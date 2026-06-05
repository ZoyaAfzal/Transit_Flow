import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { ArrowUpRight } from "lucide-react";

const JOBS = [
  { slug: "transportation-analyst", title: "Transportation Analyst", dept: "Analytics", location: "Remote", type: "Full-time" },
  { slug: "dispatch-coordinator", title: "Dispatch Coordinator", dept: "Operations", location: "Chicago, IL", type: "Full-time" },
  { slug: "logistics-coordinator", title: "Logistics Coordinator", dept: "Operations", location: "Dallas, TX", type: "Full-time" },
  { slug: "driver-recruiter", title: "Driver Recruiter", dept: "People", location: "Remote", type: "Full-time" },
  { slug: "fleet-manager", title: "Fleet Manager", dept: "Operations", location: "Atlanta, GA", type: "Full-time" },
  { slug: "route-planner", title: "Route Planner", dept: "Operations", location: "Remote", type: "Full-time" },
  { slug: "operations-manager", title: "Operations Manager", dept: "Operations", location: "New York, NY", type: "Full-time" },
  { slug: "sales-executive", title: "Sales Executive", dept: "Commercial", location: "Remote", type: "Full-time" },
];

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers — TransitFlow" },
      { name: "description", content: "Join one of the fastest-growing freight networks in the world." },
      { property: "og:title", content: "Careers at TransitFlow" },
      { property: "og:description", content: "Open roles across operations, tech, and commercial teams." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the Future of Freight With Us"
        subtitle="We hire operators who care about details, engineers who love hard systems, and humans who treat every shipment like it matters."
        image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1600&q=80"
      />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">— Open Positions</p>
          <h2 className="font-display text-5xl lg:text-6xl text-brand-white mb-12 tracking-wide">8 Roles Currently Open</h2>
          <div className="grid gap-4">
            {JOBS.map((j) => (
              <Link
                key={j.slug}
                to="/careers/$slug"
                params={{ slug: j.slug }}
                data-cursor="button"
                className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-border bg-brand-steel p-6 hover:border-brand-amber transition-colors"
              >
                <div>
                  <h3 className="font-display text-2xl text-brand-white tracking-wide group-hover:text-brand-amber">
                    {j.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] text-brand-muted">
                    <span>{j.dept}</span>
                    <span>· {j.location}</span>
                    <span>· {j.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-amber">
                  Apply Now <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

