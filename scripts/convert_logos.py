#!/usr/bin/env python3
"""Convert logos to white text/logo on transparent PNG background."""

from PIL import Image
import os

SUPPORTERS_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "photos", "supporters")


def convert_upfront(img_path: str) -> Image.Image:
    """Dark grey text on black -> white text on transparent."""
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # Invert colors (dark -> light)
        inv_r, inv_g, inv_b = 255 - r, 255 - g, 255 - b
        # Make near-black (original background) transparent
        if r < 30 and g < 30 and b < 30:
            new_data.append((255, 255, 255, 0))
        else:
            # Make logo pure white, preserve visibility
            lum = (inv_r + inv_g + inv_b) / 3
            alpha = int(min(255, lum * 1.2))  # Slight boost for grey text
            new_data.append((255, 255, 255, alpha))
    img.putdata(new_data)
    return img


def convert_atlas(img_path: str) -> Image.Image:
    """Colored logo on dark background -> white logo on transparent."""
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # Luminance to detect logo vs background
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        # Dark background -> transparent
        if lum < 60:
            new_data.append((255, 255, 255, 0))
        else:
            # Logo area -> white with alpha from original brightness
            alpha = int(min(255, (lum / 255) * 255))
            new_data.append((255, 255, 255, alpha))
    img.putdata(new_data)
    return img


def ensure_northside(img_path: str) -> Image.Image:
    """Northside is already white on transparent - ensure it's correct."""
    img = Image.open(img_path).convert("RGBA")
    # If already good, return as-is. Otherwise ensure white on transparent.
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        if a < 10:  # Already transparent
            new_data.append((255, 255, 255, 0))
        else:
            # Ensure logo is white
            new_data.append((255, 255, 255, a))
    img.putdata(new_data)
    return img


def main():
    os.makedirs(SUPPORTERS_DIR, exist_ok=True)

    # Northside - already white, just ensure format
    northside_path = os.path.join(SUPPORTERS_DIR, "northside_logo.png")
    if os.path.exists(northside_path):
        img = ensure_northside(northside_path)
        img.save(northside_path, "PNG")
        print("Converted northside_logo.png")

    # Atlas - purple to white
    atlas_path = os.path.join(SUPPORTERS_DIR, "atlas_logo.png")
    if os.path.exists(atlas_path):
        img = convert_atlas(atlas_path)
        img.save(atlas_path, "PNG")
        print("Converted atlas_logo.png")

    # Upfront - dark to white
    upfront_path = os.path.join(SUPPORTERS_DIR, "upfront_logo.png")
    if os.path.exists(upfront_path):
        img = convert_upfront(upfront_path)
        img.save(upfront_path, "PNG")
        print("Converted upfront_logo.png")


if __name__ == "__main__":
    main()
