import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SplitText } from "@/components/ui/SplitText";
import { staggerContainer, staggerItem } from "@/components/ui/RevealOnScroll";

const posts = [
  {
    slug: "navigating-tomorrow",
    title: "Navigating Tomorrow's Transport Challenges",
    excerpt: "How shifting trade routes and AI dispatch are redefining freight in 2026.",
    category: "Industry",
    date: "Jun 02, 2026",
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=700&q=80",
  },
  {
    slug: "ai-reshaping-freight",
    title: "How AI Is Reshaping Freight Logistics",
    excerpt: "From predictive ETAs to autonomous yard ops, the new operating system of trucking.",
    category: "Tech",
    date: "May 24, 2026",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80",
  },
  {
    slug: "green-freight",
    title: "Sustainable Trucking: The Green Freight Future",
    excerpt: "Electric tractors, biofuels, and route AI cut our fleet emissions by 34% last quarter.",
    category: "Sustainability",
    date: "May 11, 2026",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=80",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-brand-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">
              — Field Notes
            </p>
            <SplitText
              as="h2"
              text="Fresh From the Road"
              className="font-display text-5xl lg:text-7xl text-brand-white leading-[0.95]"
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.article
              key={p.slug}
              variants={staggerItem}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                data-cursor="button"
                className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-steel h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-amber px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-black">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-brand-muted mb-3">
                    {p.date}
                  </p>
                  <h3 className="font-display text-2xl text-brand-white tracking-wide leading-tight group-hover:text-brand-amber transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted flex-grow">{p.excerpt}</p>
                  <span className="mt-5 inline-flex text-xs uppercase tracking-[0.2em] text-brand-amber">
                    Read Article →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

