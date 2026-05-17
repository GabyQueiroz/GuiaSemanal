from pathlib import Path
from PIL import Image, ImageFilter, ImageEnhance, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "equipamentos"
ASSETS.mkdir(parents=True, exist_ok=True)

SOURCES = [
    {
        "name": "banco-halteres",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (3).jpeg"),
        "crop": (60, 560, 1180, 1180),
        "focus": (0.50, 0.54),
    },
    {
        "name": "flexora-sentada",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (2).jpeg"),
        "crop": (210, 250, 1120, 1260),
        "focus": (0.48, 0.55),
    },
    {
        "name": "bike-spinning",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06 (1).jpeg"),
        "crop": (140, 440, 1120, 1450),
        "focus": (0.50, 0.58),
    },
    {
        "name": "polia-alta",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.06.jpeg"),
        "crop": (80, 40, 1150, 1450),
        "focus": (0.51, 0.52),
    },
    {
        "name": "cadeira-extensora",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (3).jpeg"),
        "crop": (220, 120, 1150, 1320),
        "focus": (0.50, 0.58),
    },
    {
        "name": "chest-press",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (2).jpeg"),
        "crop": (260, 210, 1160, 1350),
        "focus": (0.53, 0.58),
    },
    {
        "name": "abdutora-adutora",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05 (1).jpeg"),
        "crop": (100, 170, 1090, 1410),
        "focus": (0.52, 0.58),
    },
    {
        "name": "maquinas-geral",
        "src": Path(r"C:/Users/gabri/Downloads/WhatsApp Image 2026-05-17 at 11.08.05.jpeg"),
        "crop": (130, 160, 1160, 1350),
        "focus": (0.52, 0.55),
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

    # A softened, low-distraction backdrop replaces the busy room background.
    backdrop = crop.filter(ImageFilter.GaussianBlur(26))
    backdrop = ImageEnhance.Color(backdrop).enhance(0.28)
    backdrop = ImageEnhance.Brightness(backdrop).enhance(1.22)
    wash = Image.new("RGB", target, "#f6faf7")
    backdrop = Image.blend(backdrop, wash, 0.58)

    # Keep a sharp center focus so the equipment still reads clearly.
    sharp = ImageEnhance.Color(crop).enhance(0.90)
    sharp = ImageEnhance.Contrast(sharp).enhance(1.05)
    sharp = ImageEnhance.Sharpness(sharp).enhance(1.12)

    mask = Image.new("L", target, 0)
    draw = ImageDraw.Draw(mask)
    cx, cy = item["focus"]
    x = int(target[0] * cx)
    y = int(target[1] * cy)
    rx, ry = 430, 290
    draw.ellipse((x - rx, y - ry, x + rx, y + ry), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(38))

    composed = Image.composite(sharp, backdrop, mask)
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
