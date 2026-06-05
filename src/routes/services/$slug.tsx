import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/home/CTABanner";

const SERVICES: Record<string, { name: string; img: string; desc: string }> = {
  "road-freight": {
    name: "Road Freight",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
    desc: "Cross-continent road freight services offering dedicated and less-than-truckload (LTL) options. We guarantee reliable, on-time delivery with end-to-end live GPS tracking and proactive shipment notifications.",
  },
  "air-cargo": {
    name: "Air Cargo",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    desc: "Express air cargo solutions designed for time-sensitive, high-value, and urgent freight. We manage connections to over 180 international hubs, ensuring comprehensive customs brokerage and swift handling.",
  },
  "ocean-freight": {
    name: "Ocean Freight",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80",
    desc: "Comprehensive ocean freight services for full container load (FCL) and less-than-container load (LCL) shipments. We offer direct-route management across all major global lanes, optimizing transit times and cost-efficiency.",
  },
  "rail-transport": {
    name: "Rail Transport",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80",
    desc: "Sustainable, cost-effective rail transport solutions for bulk and large-volume freight. We specialize in long-haul, low-emission corridors that provide highly predictable transit schedules across continents.",
  },
  warehousing: {
    name: "Warehousing",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    desc: "Secure, climate-controlled warehousing facilities integrated with real-time inventory management. Our services include efficient pick-and-pack fulfillment, temporary storage, and rapid distribution capabilities.",
  },
  "last-mile-delivery": {
    name: "Last-Mile Delivery",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80",
    desc: "Precision last-mile delivery services tailored for urban and rural logistics. We offer flexible scheduling, real-time tracking, and specialized handling to ensure your goods reach the final destination flawlessly, 7 days a week.",
  },
};

const STEPS = [
  { title: "Request a Quote", desc: "Tell us your origin, destination, cargo, and timeline." },
  { title: "Cargo Assessment", desc: "Our team designs the optimal mode and route mix." },
  { title: "Route Planning & Dispatch", desc: "We assign vehicles, drivers, and lanes." },
  { title: "Real-Time Delivery", desc: "Live tracking and signed proof of delivery on arrival." },
];

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES[params.slug];
    const name = s?.name ?? "Service";
    return {
      meta: [
        { title: `${name} — TransitFlow` },
        { name: "description", content: s?.desc ?? "Freight service detail." },
        { property: "og:title", content: `${name} — TransitFlow` },
        { property: "og:description", content: s?.desc ?? "Freight service detail." },
        ...(s?.img ? [{ property: "og:image", content: s.img }] : []),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const s = SERVICES[slug] ?? SERVICES["road-freight"];

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={s.name}
        subtitle={s.desc}
        image={s.img}
        backTo={{ to: "/services", label: "All Services" }}
      />

      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <img
            src={s.img}
            alt={s.name}
            className="w-full h-96 object-cover rounded-3xl mb-16"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">— Our Process</p>
          <h2 className="font-display text-5xl lg:text-6xl text-brand-white mb-16 tracking-wide">
            From Quote to Delivery in 4 Steps
          </h2>
          <div className="relative grid gap-10 md:grid-cols-4">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-brand-border">
              <div className="h-full w-full bg-gradient-to-r from-brand-amber via-brand-amber to-brand-amber/30" />
            </div>
            {STEPS.map((st, i) => (
              <div key={st.title} className="relative">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-amber font-display text-xl text-brand-black mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl text-brand-white tracking-wide mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-brand-muted">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

