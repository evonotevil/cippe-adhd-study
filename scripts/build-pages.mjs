import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The classic site is rebuilt from the exact last published classic commit.
const classicRevision = 'cdd46fa6bd386541ce149e0ba724724593a76a5e';
const pagesBase = '/cippe-adhd-study/';
const repo = fileURLToPath(new URL('../', import.meta.url));
const scratch = mkdtempSync(join(tmpdir(), 'cippe-pages-'));
const archive = join(scratch, 'classic.tar');
const site = join(scratch, 'site');
const next = join(scratch, 'new');
const run = (file, args, cwd = repo) => execFileSync(file, args, { cwd, stdio: 'inherit' });

try {
  run('git', ['archive', '--format=tar', '-o', archive, classicRevision]);
  const classic = join(scratch, 'classic');
  mkdirSync(classic);
  run('tar', ['-xf', archive, '-C', classic]);
  const classicEntry = join(classic, 'index.html');
  const originalEntry = readFileSync(classicEntry, 'utf8');
  const correctedEntry = originalEntry.replace('%BASE_URL%manifest.webmanifest', '/manifest.webmanifest');
  writeFileSync(classicEntry, correctedEntry);

  const home = join(classic, 'src/components/Home.tsx');
  const markup = readFileSync(home, 'utf8');
  const anchor = '      {activeSession && (';
  if (markup.split(anchor).length !== 2) throw new Error('Could not locate the classic home version switch.');
  writeFileSync(home, markup.replace(anchor, `      <a
        href="${pagesBase}v2/"
        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-soft px-3 py-2 text-sm font-extrabold text-brand-soft-ink"
      >
        试用 V2 · 30 天备考 <Icon name="arrow-right" size={18} />
      </a>

${anchor}`));

  run('npm', ['ci', '--no-audit', '--no-fund'], classic);
  run('npm', ['run', 'build', '--', '--base', pagesBase, '--outDir', site], classic);
  run('npm', ['run', 'build', '--', '--base', `${pagesBase}v2/`, '--outDir', next, '--mode', 'pages-v2']);
  renameSync(next, join(site, 'v2'));

  const destination = resolve(repo, 'dist-pages');
  // Keep the current build until both applications have built successfully.
  rmSync(destination, { recursive: true, force: true });
  cpSync(site, destination, { recursive: true });
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
