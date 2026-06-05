import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/home/CTABanner";

const TEAM = [
  { slug: "sarah-okonkwo", name: "Sarah Okonkwo", role: "CEO", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  { slug: "marcus-lin", name: "Marcus Lin", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { slug: "elena-vasquez", name: "Elena Vasquez", role: "VP Strategy", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { slug: "david-park", name: "David Park", role: "CTO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { slug: "amara-johnson", name: "Amara Johnson", role: "Fleet Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { slug: "luca-rossi", name: "Luca Rossi", role: "Global Partnerships", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
];

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Team — TransitFlow" },
      { name: "description", content: "Meet the team Driving the Future of Freight." },
      { property: "og:title", content: "Our Team — TransitFlow" },
      { property: "og:description", content: "The operators, engineers, and dispatchers behind TransitFlow." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our People" title="The Operators Behind the Forge" subtitle="Sixty years of combined logistics experience, one obsession with reliability." />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Link
              key={m.slug}
              to="/team/$slug"
              params={{ slug: m.slug }}
              data-cursor="button"
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-steel"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-brand-white tracking-wide group-hover:text-brand-amber transition-colors">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-muted mt-1">{m.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

