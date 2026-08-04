import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gokul M — Full Stack Developer",
    short_name: "Gokul.dev",
    description:
      "Portfolio of Gokul M — Full Stack Developer and Data Science enthusiast.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9ff",
    theme_color: "#0ea5e9",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
