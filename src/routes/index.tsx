import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/home/Hero";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { FleetShowcase } from "@/components/sections/home/FleetShowcase";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TransitFlow — Driving the Future of Freight" },
      {
        name: "description",
        content:
          "Precision freight across 180+ countries. Real-time tracking, guaranteed timelines, ISO-certified logistics from TransitFlow.",
      },
      { property: "og:title", content: "TransitFlow — Driving the Future of Freight" },
      {
        property: "og:description",
        content:
          "Precision freight across 180+ countries. Real-time tracking, guaranteed timelines.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyUs />
      <FleetShowcase />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}

