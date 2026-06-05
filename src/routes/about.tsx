import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TransitFlow" },
      { name: "description", content: "Our mission, history, and the team Driving the Future of Freight." },
      { property: "og:title", content: "About TransitFlow" },
      { property: "og:description", content: "Leading the future of logistics tech since 2008." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TransitFlow"
        title="Leading the Future of Logistics Tech"
        subtitle="Since 2008, we've built one of the most reliable freight networks on the planet, connecting 180+ countries with precision, transparency, and humanity."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
      />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-brand-muted">Full About page sections - Mission, Timeline, Team Preview - coming in the next iteration.</p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

