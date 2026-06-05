import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { MagneticLink } from "@/components/ui/MagneticButton";

export const Route = createFileRoute("/careers/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Careers at TransitFlow` },
      { name: "description", content: "Open role at TransitFlow." },
    ],
  }),
  component: CareerDetail,
});

function CareerDetail() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());

  return (
    <>
      <PageHero
        eyebrow="Open Role"
        title={title}
        subtitle="Join the team Driving the Future of Freight."
        backTo={{ to: "/careers", label: "All Roles" }}
      />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-3xl px-6 text-brand-white/80 space-y-6">
          <h3 className="font-display text-3xl text-brand-amber tracking-wide">About the Role</h3>
          <p>
            You'll work alongside operations, engineering, and commercial teams
            to keep TransitFlow running like clockwork. Detail-oriented,
            calm under pressure, and curious by default.
          </p>
          <h3 className="font-display text-3xl text-brand-amber tracking-wide pt-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-brand-amber">
            <li>Competitive base + performance bonus</li>
            <li>Full health, dental, and vision</li>
            <li>Remote-friendly with quarterly team offsites</li>
            <li>Real career progression — most of our managers were promoted internally</li>
          </ul>
          <div className="pt-6">
            <MagneticLink to="/contact" variant="amber">Apply Now</MagneticLink>
          </div>
        </div>
      </section>
    </>
  );
}

