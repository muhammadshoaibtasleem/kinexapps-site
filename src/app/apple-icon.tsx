import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: "system-ui, sans-serif",
            display: "flex",
          }}
        >
          K
        </div>
      </div>
    ),
    { ...size },
  );
}
