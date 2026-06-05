import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — TransitFlow" },
      { name: "description", content: "Fresh insights from the road — trucking, logistics, AI, and sustainability." },
      { property: "og:title", content: "Fresh Insights — TransitFlow Blog" },
      { property: "og:description", content: "Field notes on freight, logistics, and tech." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Field Notes"
        title="Fresh Insights From the Road"
        subtitle="Industry analysis, tech deep-dives, and on-the-ground stories from our dispatch team."
      />
      <BlogPreview />
      <CTABanner />
    </>
  );
}

