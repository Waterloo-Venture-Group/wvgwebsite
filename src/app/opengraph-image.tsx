import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Waterloo Venture Group community event";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photoPath = join(process.cwd(), "public/photos/IMG_4330.JPG");
  const photoBuffer = await readFile(photoPath);
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires native img */}
        <img
          src={photoSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 48,
            right: 48,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Waterloo Venture Group
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.72)" }}>
            Your early-stage edge in the Maple Valley
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
