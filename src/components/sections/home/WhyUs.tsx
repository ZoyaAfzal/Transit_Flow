import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticLink } from "@/components/ui/MagneticButton";

const features = [
  { title: "Real-Time GPS Tracking", desc: "Every shipment, every mile — visible 24/7 on your dashboard." },
  { title: "Dedicated Account Managers", desc: "A human point of contact who knows your freight by name." },
  { title: "Flexible Scheduling", desc: "Same-day, next-day, or long-haul — built around your calendar." },
  { title: "Cargo Insurance Included", desc: "Full-value coverage on every consignment, no add-ons." },
  { title: "24/7 Emergency Dispatch", desc: "Round-the-clock crisis response from our central command." },
];

export function WhyUs() {
  return (
    <section className="relative bg-brand-charcoal py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-border">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80"
              alt="Logistics control room"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
          </div>

          <svg className="absolute -top-4 -left-4 h-20 w-20" viewBox="0 0 80 80" fill="none">
            <path d="M0 30 L0 0 L30 0" stroke="var(--brand-amber)" strokeWidth="3" />
          </svg>
          <svg className="absolute -bottom-4 -right-4 h-20 w-20" viewBox="0 0 80 80" fill="none">
            <path d="M80 50 L80 80 L50 80" stroke="var(--brand-amber)" strokeWidth="3" />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-8 -right-4 rounded-2xl border border-brand-border bg-brand-black/80 backdrop-blur-xl p-5 shadow-2xl"
          >
            <p className="font-display text-4xl text-brand-amber leading-none">98%</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-muted">
              Fleet Uptime
            </p>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">
            — Why TransitFlow
          </p>
          <SplitText
            as="h2"
            text="Built on Reliability, Driven by Precision"
            className="font-display text-5xl lg:text-6xl text-brand-white leading-[0.95] mb-10"
          />

          <ul className="space-y-6">
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-amber/40 bg-brand-amber/10">
                  <Check className="h-4 w-4 text-brand-amber" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-display text-xl text-brand-white tracking-wide">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-sm text-brand-muted">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <MagneticLink to="/about" variant="amber">
              See Our Process
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}

