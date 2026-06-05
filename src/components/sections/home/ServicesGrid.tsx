import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";
import { staggerContainer, staggerItem } from "@/components/ui/RevealOnScroll";

const services = [
  {
    n: "01",
    name: "Road Freight",
    slug: "road-freight",
    desc: "Cross-continent trucking with guaranteed transit times.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
  {
    n: "02",
    name: "Air Cargo",
    slug: "air-cargo",
    desc: "Express airfreight to 180+ international hubs.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    n: "03",
    name: "Ocean Freight",
    slug: "ocean-freight",
    desc: "FCL & LCL containers with full port-to-port handling.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    n: "04",
    name: "Rail Transport",
    slug: "rail-transport",
    desc: "Sustainable bulk rail for predictable long hauls.",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
  },
  {
    n: "05",
    name: "Warehousing",
    slug: "warehousing",
    desc: "Climate-controlled storage with real-time inventory.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    n: "06",
    name: "Last-Mile Delivery",
    slug: "last-mile-delivery",
    desc: "Final-mile precision across urban and rural zones.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative bg-brand-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">
              — Capabilities
            </p>
            <SplitText
              as="h2"
              text="What We Haul, How We Haul It"
              className="font-display text-5xl lg:text-7xl text-brand-white leading-[0.95]"
            />
          </div>
          <p className="max-w-md text-brand-muted">
            Six integrated services. One accountable partner. From the first
            mile to the last, every leg is tracked, insured, and on the clock.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.slug} variants={staggerItem}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  n,
  name,
  slug,
  desc,
  img,
}: {
  n: string;
  name: string;
  slug: string;
  desc: string;
  img: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      data-cursor="button"
      className="group relative block overflow-hidden rounded-3xl bg-brand-steel border border-brand-border"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-steel via-brand-steel/40 to-transparent" />
          <span className="absolute left-5 top-5 font-display text-2xl text-brand-amber tracking-widest">
            {n}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-3xl text-brand-white tracking-wide">
              {name}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-brand-muted group-hover:text-brand-amber group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="mt-3 text-sm text-brand-muted leading-relaxed">{desc}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-amber">
            View Service →
          </span>
        </div>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-amber"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "0% 50%" }}
        />
      </motion.div>
    </Link>
  );
}

