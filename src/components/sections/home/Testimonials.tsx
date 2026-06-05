import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";

const items = [
  {
    quote:
      "TransitFlow rebuilt our supply chain in under 90 days. Their dispatch team is the most responsive partner we've ever had.",
    name: "Marcus Lin",
    role: "VP Operations, Northgate Manufacturing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "Real-time tracking saved us during the port closures. We always knew exactly where every container was.",
    name: "Priya Shankar",
    role: "Head of Logistics, Hexa Apparel",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
  },
  {
    quote:
      "Reliable, on time, and honest about constraints. They feel like an in-house team, not a vendor.",
    name: "Daniel Owens",
    role: "Founder, Vector Cold Chain",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const cur = items[i];

  return (
    <section className="relative grain bg-brand-black py-28 overflow-hidden">
      <div className="absolute -left-10 top-20 font-display text-[20rem] leading-none text-brand-amber/[0.06] select-none pointer-events-none">
        "
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">
          — Voices From the Dock
        </p>
        <SplitText
          as="h2"
          text="What Our Clients Say"
          className="font-display text-5xl lg:text-7xl text-brand-white leading-[0.95] mb-16"
        />

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-brand-amber text-brand-amber" />
                ))}
              </div>
              <p className="font-display text-3xl md:text-5xl text-brand-white leading-tight tracking-wide text-balance">
                "{cur.quote}"
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <img
                  src={cur.avatar}
                  alt={cur.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-brand-amber"
                />
                <div className="text-left">
                  <p className="font-display text-xl text-brand-white tracking-wide">
                    {cur.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                    {cur.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              data-cursor="button"
              aria-label={`Show testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === k ? "w-10 bg-brand-amber" : "w-2 bg-brand-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

