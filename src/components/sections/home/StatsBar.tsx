import { motion } from "framer-motion";
import { NumberCounter } from "@/components/ui/NumberCounter";

const stats = [
  { value: 100, suffix: "%", label: "On-Time Commitment" },
  { value: 7254, suffix: "", label: "Routes Covered" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 3520, suffix: "", label: "Deliveries This Month" },
];

export function StatsBar() {
  return (
    <section className="relative bg-brand-charcoal border-y border-brand-border">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "0% 50%" }}
        className="absolute inset-x-0 top-0 h-px bg-brand-amber"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ transformOrigin: "100% 50%" }}
        className="absolute inset-x-0 bottom-0 h-px bg-brand-amber"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border/60">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="px-6 first:pl-0 text-center md:text-left"
          >
            <p className="font-display text-5xl md:text-7xl text-brand-amber leading-none">
              <NumberCounter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-muted">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

