import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FleetShowcase } from "@/components/sections/home/FleetShowcase";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — TransitFlow" },
      { name: "description", content: "Heavy haul, refrigerated, flatbed, and cargo vans — every vehicle in our iron fleet." },
      { property: "og:title", content: "Our Iron Fleet — TransitFlow" },
      { property: "og:description", content: "Built for the long haul. Every vehicle in our fleet, with specs." },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Iron Fleet"
        title="Built for the Long Haul"
        subtitle="Modern, well-maintained vehicles across every class and use case — fully insured and tracked 24/7."
        image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80"
      />
      <FleetShowcase />
      <CTABanner />
    </>
  );
}

