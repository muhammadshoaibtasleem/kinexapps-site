import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kinexapps — Australian App Studio",
    short_name: "Kinexapps",
    description:
      "Australian mobile app studio crafting free iOS games, education apps, and AI-powered utilities.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/kinexapps-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/kinexapps-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
