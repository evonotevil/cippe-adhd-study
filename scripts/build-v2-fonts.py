"""Regenerate the bundled V2.2 WOFF2 fonts with fonttools[woff].
Run from any directory: python3 scripts/build-v2-fonts.py
"""
from pathlib import Path
from tempfile import TemporaryDirectory
from urllib.parse import quote
from urllib.request import urlretrieve

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / "src/assets/fonts"
LICENSES = ROOT / "public/licenses/fonts"
REVISION = "29b4ec6df2522a8aee279414b78a07910b065874"
GOOGLE_FONTS = f"https://raw.githubusercontent.com/google/fonts/{REVISION}/ofl"
FONTS = [
    ("notosanssc", "NotoSansSC[wght].ttf", "noto-sans-sc-v2.woff2", {"wght": (400, 900)}),
    ("inter", "Inter[opsz,wght].ttf", "inter-v2.woff2", {"wght": (400, 700), "opsz": 14}),
    ("nunito", "Nunito[wght].ttf", "nunito-extra-bold-v2.woff2", {"wght": 800}),
]


def convert(path, filename, limits, chars):
    font = TTFont(path)
    options = subset.Options()
    options.flavor = "woff2"
    options.name_IDs = ["*"]
    options.layout_features = ["*"]
    builder = subset.Subsetter(options=options)
    builder.populate(unicodes=chars)
    builder.subset(font)
    instantiateVariableFont(font, limits, inplace=True)
    font.flavor = "woff2"
    font.save(DESTINATION / filename)


def main():
    DESTINATION.mkdir(parents=True, exist_ok=True)
    LICENSES.mkdir(parents=True, exist_ok=True)
    latin = set(range(0x20, 0x250)) | set(range(0x2000, 0x2070))
    corpus = ''.join(
        path.read_text()
        for path in sorted((ROOT / "src").rglob("*.ts*"))
        if path.suffix in {".ts", ".tsx"}
    )
    # Cover all copy in the application and authored notes. System fonts remain
    # available for any new characters in user-entered text.
    chinese = latin | {ord(char) for char in corpus if ord(char) >= 0x2000}
    numeric = {ord(char) for char in "0123456789.,:+-/%—− "}
    with TemporaryDirectory() as tmp:
        for (folder, source, filename, limits), chars in zip(FONTS, (chinese, latin, numeric), strict=True):
            base = f"{GOOGLE_FONTS}/{folder}"
            path = Path(tmp) / source
            urlretrieve(f"{base}/{quote(source)}", path)
            license_path = LICENSES / f"{folder}-OFL.txt"
            urlretrieve(f"{base}/OFL.txt", license_path)
            license_path.write_text("\n".join(line.rstrip() for line in license_path.read_text().splitlines()) + "\n")
            convert(path, filename, limits, chars)


if __name__ == "__main__":
    main()
