import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA PETITE & RADIANT | 3D Custom Jewelry Studio" },
      { name: "description", content: "Design custom fine jewelry in real-time 3D: metals, gemstones, charms and engraving." },
      { property: "og:title", content: "AURA PETITE & RADIANT | 3D Jewelry Studio" },
      { property: "og:description", content: "Build your dream jewelry in 3D with true-to-life gold and gemstones." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/aura.html"
      title="AURA PETITE 3D Jewelry Studio"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
