import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kinexapps — Australian Mobile App Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(168, 85, 247, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Kinexapps
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.6)",
            fontWeight: 500,
            display: "flex",
          }}
        >
          7 Free iOS Apps &bull; Games &bull; Education &bull; AI
        </div>
      </div>
    ),
    { ...size },
  );
}
