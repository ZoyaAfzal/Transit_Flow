import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const Route = createFileRoute("/team/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — TransitFlow` },
      { name: "description", content: "Team member profile at TransitFlow." },
    ],
  }),
  component: TeamMember,
});

function TeamMember() {
  const { slug } = Route.useParams();
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  return (
    <>
      <PageHero eyebrow="Team Member" title={name} subtitle="Helping forge the future of global freight, one shipment at a time." backTo={{ to: "/team", label: "All Team" }} />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-3xl px-6 text-brand-white/80 space-y-6">
          <p>
            {name} brings over a decade of logistics leadership to TransitFlow,
            with deep expertise across cross-border operations, fleet
            optimization, and customer success.
          </p>
          <p>Full profile content coming in the next iteration.</p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

