import { ImageResponse } from "next/og";
import { apps } from "@/data/apps";

export const alt = "App by Kinexapps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#0f172a",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 48,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Kinexapps
        </div>
      ),
      { ...size },
    );
  }

  const gradientColors: Record<string, [string, string]> = {
    "from-orange-500 to-amber-500": ["#f97316", "#f59e0b"],
    "from-indigo-500 to-purple-600": ["#6366f1", "#9333ea"],
    "from-green-400 to-emerald-600": ["#4ade80", "#059669"],
    "from-red-500 to-rose-600": ["#ef4444", "#e11d48"],
    "from-cyan-400 to-blue-600": ["#22d3ee", "#2563eb"],
    "from-violet-500 to-purple-700": ["#8b5cf6", "#7e22ce"],
    "from-pink-400 to-rose-600": ["#f472b6", "#e11d48"],
    "from-teal-400 to-green-600": ["#2dd4bf", "#16a34a"],
  };

  const [color1, color2] = gradientColors[app.gradient] || ["#3b82f6", "#6366f1"];

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient accent orb */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `${color1}20`,
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `${color2}15`,
            filter: "blur(100px)",
          }}
        />

        {/* App icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {/* Gradient border around icon */}
          <div
            style={{
              display: "flex",
              width: 140,
              height: 140,
              borderRadius: 32,
              background: `linear-gradient(135deg, ${color1}, ${color2})`,
              padding: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                borderRadius: 28,
                background: "#1e293b",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 56,
              }}
            >
              {app.name.charAt(0)}
            </div>
          </div>

          {/* App name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-1.5px",
              display: "flex",
            }}
          >
            {app.name}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: 500,
              display: "flex",
            }}
          >
            {app.subtitle}
          </div>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 8,
            }}
          >
            {[app.category, app.price, `Ages ${app.ageRating}`].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 16,
                  color: "rgba(255, 255, 255, 0.4)",
                  fontWeight: 600,
                  padding: "6px 16px",
                  borderRadius: 20,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.25)",
            fontWeight: 500,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          Kinexapps — Australian App Studio
        </div>
      </div>
    ),
    { ...size },
  );
}
