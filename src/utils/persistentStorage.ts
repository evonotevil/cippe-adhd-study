// Coalesced, off-critical-path writes to localStorage.
//
// `JSON.stringify` on the answer log is O(history) and localStorage.setItem is
// synchronous, so writing inline on every answer puts a growing block of main
// thread work between the tap and the feedback animation. Writes are queued per
// key, collapsed to the newest value, and flushed when the browser is idle —
// or immediately when the data is about to be read or the page is going away.

export const ACTIVE_SESSION_STORAGE_KEY = import.meta.env.BASE_URL.endsWith('/v2/')
  ? 'cippe-v2-active-session'
  : 'cippe-active-session';

const pendingValues = new Map<string, unknown>();
let scheduledHandle: number | null = null;
let listenersAttached = false;

function cancelScheduledFlush(): void {
  if (scheduledHandle === null) return;

  if (typeof window.cancelIdleCallback === 'function') {
    window.cancelIdleCallback(scheduledHandle);
  } else {
    window.clearTimeout(scheduledHandle);
  }
  scheduledHandle = null;
}

export function flushPendingWrites(): boolean {
  cancelScheduledFlush();
  if (pendingValues.size === 0) return true;

  const entries = [...pendingValues];
  pendingValues.clear();
  let saved = true;

  for (const [key, value] of entries) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      saved = false;
      pendingValues.set(key, value);
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  }
  return saved;
}

function attachFlushListeners(): void {
  if (listenersAttached) return;
  listenersAttached = true;

  // `pagehide` is the reliable last call on iOS Safari, where `beforeunload`
  // often never fires; `visibilitychange` covers app switching and tab hiding.
  window.addEventListener('pagehide', flushPendingWrites);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushPendingWrites();
  });
}

export function queueWrite(key: string, value: unknown): void {
  attachFlushListeners();
  pendingValues.set(key, value);
  if (scheduledHandle !== null) return;

  scheduledHandle =
    typeof window.requestIdleCallback === 'function'
      ? window.requestIdleCallback(flushPendingWrites, { timeout: 1000 })
      : window.setTimeout(flushPendingWrites, 200);
}

export function readStoredValue<T>(key: string, fallback: T): T {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return fallback;
  }
}

export function savePracticeDraft(value: unknown): boolean {
  queueWrite(ACTIVE_SESSION_STORAGE_KEY, value);
  return flushPendingWrites();
}
