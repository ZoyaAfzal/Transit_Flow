import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — TransitFlow" },
      { name: "description", content: "Six integrated freight services: road, air, ocean, rail, warehousing, and last-mile delivery." },
      { property: "og:title", content: "Logistics Services — TransitFlow" },
      { property: "og:description", content: "Drive success with our proven logistics solutions." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Drive Success With Our Proven Logistics Solutions"
        subtitle="From road and rail to air and ocean, one accountable partner for every leg of your supply chain."
      />
      <StatsBar />
      <ServicesGrid />
      <CTABanner />
    </>
  );
}

