import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticLink } from "@/components/ui/MagneticButton";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1920&q=80"
          alt="Highway"
          className="h-[120%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-brand-amber/85" />
      <div className="absolute inset-0 -z-10 bg-stripes opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center text-brand-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] text-balance"
        >
          Ready to Ship Smarter?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-brand-black/80 max-w-2xl mx-auto"
        >
          Get your free freight consultation in under 60 seconds. Real humans,
          real timelines, real prices.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticLink to="/contact" variant="dark">
            Get Free Quote
          </MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}

