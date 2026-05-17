from pathlib import Path
from PIL import Image, ImageEnhance, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "equipamentos"
ASSETS.mkdir(parents=True, exist_ok=True)

SOURCES = [
    {
        "name": "banco-halteres",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (3).jpeg"),
        "crop": (60, 560, 1180, 1180),
    },
    {
        "name": "flexora-sentada",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (2).jpeg"),
        "crop": (210, 250, 1120, 1260),
    },
    {
        "name": "bike-spinning",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (1).jpeg"),
        "crop": (140, 440, 1120, 1450),
    },
    {
        "name": "polia-alta",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06.jpeg"),
        "crop": (80, 40, 1150, 1450),
    },
    {
        "name": "cadeira-extensora",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (3).jpeg"),
        "crop": (220, 120, 1150, 1320),
    },
    {
        "name": "chest-press",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (2).jpeg"),
        "crop": (260, 210, 1160, 1350),
    },
    {
        "name": "abdutora-adutora",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (1).jpeg"),
        "crop": (100, 170, 1090, 1410),
    },
    {
        "name": "maquinas-geral",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05.jpeg"),
        "crop": (130, 160, 1160, 1350),
    },
]


def cover_resize(img, size):
    w, h = img.size
    tw, th = size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale), int(h * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return img.crop((left, top, left + tw, top + th))


def make_asset(item):
    base = Image.open(item["src"]).convert("RGB")
    crop = base.crop(item["crop"])
    target = (1000, 720)
    crop = cover_resize(crop, target)

    composed = ImageEnhance.Color(crop).enhance(0.96)
    composed = ImageEnhance.Contrast(composed).enhance(1.08)
    composed = ImageEnhance.Sharpness(composed).enhance(1.18)
    composed = ImageEnhance.Brightness(composed).enhance(1.03)
    composed = ImageOps.expand(composed, border=18, fill="#ffffff")

    # Rounded card-like image with a subtle border.
    rounded = Image.new("RGBA", composed.size, (0, 0, 0, 0))
    card_mask = Image.new("L", composed.size, 0)
    card_draw = ImageDraw.Draw(card_mask)
    card_draw.rounded_rectangle((0, 0, composed.size[0] - 1, composed.size[1] - 1), radius=34, fill=255)
    rounded.paste(composed.convert("RGBA"), (0, 0), card_mask)
    border = ImageDraw.Draw(rounded)
    border.rounded_rectangle((1, 1, composed.size[0] - 2, composed.size[1] - 2), radius=34, outline="#d9e6de", width=2)

    out = ASSETS / f"{item['name']}.png"
    rounded.save(out)
    return out


for source in SOURCES:
    print(make_asset(source))
