import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";

const POSTS: Record<string, { title: string; img: string; excerpt: string; category: string; date: string }> = {
  "navigating-tomorrow": {
    title: "Navigating Tomorrow's Transport Challenges",
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80",
    excerpt: "How shifting trade routes and AI dispatch are redefining freight in 2026.",
    category: "Industry",
    date: "Jun 02, 2026",
  },
  "ai-reshaping-freight": {
    title: "How AI Is Reshaping Freight Logistics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80",
    excerpt: "From predictive ETAs to autonomous yard ops, the new OS of trucking.",
    category: "Tech",
    date: "May 24, 2026",
  },
  "green-freight": {
    title: "Sustainable Trucking: The Green Freight Future",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80",
    excerpt: "Electric tractors, biofuels, and route AI cut our fleet emissions by 34% last quarter.",
    category: "Sustainability",
    date: "May 11, 2026",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = POSTS[params.slug];
    return {
      meta: [
        { title: `${p?.title ?? "Article"} — TransitFlow` },
        { name: "description", content: p?.excerpt ?? "TransitFlow article." },
        { property: "og:title", content: p?.title ?? "Article" },
        { property: "og:description", content: p?.excerpt ?? "" },
        ...(p?.img ? [{ property: "og:image", content: p.img }] : []),
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const p = POSTS[slug] ?? POSTS["navigating-tomorrow"];

  return (
    <>
      <PageHero
        eyebrow={`${p.category} · ${p.date}`}
        title={p.title}
        subtitle={p.excerpt}
        image={p.img}
        backTo={{ to: "/blog", label: "All Articles" }}
      />
      <article className="bg-brand-black py-20">
        <div className="mx-auto max-w-3xl px-6 prose-invert space-y-6 text-brand-white/80 leading-relaxed">
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-96 object-cover rounded-3xl mb-10"
          />
          <p>
            Freight is changing faster than at any point in the last fifty years.
            Trade lanes are reshuffling, fuel prices are volatile, and customers
            expect Amazon-grade visibility on industrial shipments.
          </p>
          <p className="border-l-2 border-brand-amber pl-6 italic text-2xl font-display text-brand-amber tracking-wide">
            "Reliability isn't a feature anymore, it's the entire product."
          </p>
          <p>
            At TransitFlow, our dispatch team treats every shipment as a
            commitment. That means proactive communication, contingency routing,
            and accountability when something goes wrong because something
            always eventually goes wrong.
          </p>
          <p>
            In the next three years, we expect AI-assisted dispatch to absorb
            most repetitive planning work, freeing human operators to focus on
            exceptions and customer relationships. That's the future we're
            building toward.
          </p>
        </div>
      </article>
    </>
  );
}

