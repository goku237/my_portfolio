import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f6f9ff 0%, #e0f2fe 50%, #eef2ff 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 110,
              height: 110,
              borderRadius: 28,
              background: "linear-gradient(135deg, #38bdf8, #4f46e5)",
              color: "#fff",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            GM
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#0b1526",
              marginTop: 28,
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              background: "linear-gradient(120deg, #0284c7, #4f46e5)",
              backgroundClip: "text",
              color: "transparent",
              marginTop: 12,
            }}
          >
            Full Stack Developer · Data Science · Web3
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#5b6b85",
              marginTop: 20,
              fontWeight: 500,
            }}
          >
            Chennai, India
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
