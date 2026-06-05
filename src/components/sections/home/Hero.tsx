import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, PackageCheck, MapPin, ArrowRight } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticLink } from "@/components/ui/MagneticButton";

const partners = ["PENTA", "NEXTMOVE", "SITEMARK", "NETWORK", "FREIGHTBASE", "AXIOM", "CARGOLINE"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -150]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.55, 0.85]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 min-h-screen">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Highway at night"
          className="h-[120%] w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-black via-brand-black/70 to-brand-black"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-brand-amber" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-amber">
              Global Freight Solutions
            </span>
          </motion.div>

          <SplitText
            as="h1"
            text="We Move Your World Forward"
            className="font-display text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] text-brand-white text-balance"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-brand-white/70 leading-relaxed"
          >
            TransitFlow delivers precision freight across 180+ countries. Real-time
            tracking, guaranteed timelines, zero excuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticLink to="/contact" variant="amber">
              Get Instant Quote <ArrowRight className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink to="/services" variant="outline">
              Explore Services
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-brand-white/60"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-amber" /> ISO 9001 Certified
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-amber" /> 24/7 Dispatch
            </span>
            <span className="flex items-center gap-2">
              <PackageCheck className="h-4 w-4 text-brand-amber" /> Insured Cargo
            </span>
          </motion.div>
        </div>

        {/* Right: tracker + truck */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <FloatingTruck />

          <div className="mt-6 rounded-2xl border border-brand-border bg-brand-black/60 backdrop-blur-xl p-6 shadow-2xl">
            <p className="font-display text-2xl text-brand-white tracking-wide">
              Track Your Shipment
            </p>
            <p className="mt-1 text-xs text-brand-muted uppercase tracking-[0.2em]">
              Live freight tracker
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-full border border-brand-border bg-brand-charcoal p-1.5 pl-5">
              <MapPin className="h-4 w-4 text-brand-amber" />
              <input
                type="text"
                placeholder="TF-893042"
                className="flex-1 bg-transparent text-sm text-brand-white placeholder:text-brand-muted focus:outline-none"
              />
              <button
                data-cursor="cta"
                className="rounded-full bg-brand-amber px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-black hover:bg-brand-gold transition-colors"
              >
                Track
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Origin", value: "NYC" },
                { label: "Status", value: "In Transit" },
                { label: "ETA", value: "12h 24m" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-brand-charcoal p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                    {s.label}
                  </p>
                  <p className="mt-1 font-display text-lg text-brand-amber">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner ticker */}
      <div className="relative mt-20 overflow-hidden border-y border-brand-border/60 bg-brand-black/60 backdrop-blur py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="mx-12 font-display text-3xl tracking-[0.2em] text-brand-white/30 hover:text-brand-amber transition-colors"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingTruck() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-md">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-amber/20 via-transparent to-transparent blur-3xl" />
      <motion.svg
        viewBox="0 0 320 200"
        className="relative h-full w-full animate-float drop-shadow-[0_30px_40px_rgba(245,166,35,0.25)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Cargo box */}
        <g>
          <rect x="100" y="50" width="160" height="90" rx="6" fill="var(--brand-steel)" stroke="var(--brand-amber)" strokeWidth="2" />
          <rect x="110" y="60" width="50" height="70" rx="2" fill="none" stroke="var(--brand-amber)" strokeOpacity="0.5" />
          <rect x="170" y="60" width="50" height="70" rx="2" fill="none" stroke="var(--brand-amber)" strokeOpacity="0.5" />
          <text x="180" y="105" textAnchor="middle" fill="var(--brand-amber)" fontFamily="Bebas Neue" fontSize="22">TF</text>
        </g>
        {/* Cab */}
        <g>
          <path d="M40 90 L40 140 L100 140 L100 50 L75 50 L60 65 L40 90 Z" fill="var(--brand-amber)" />
          <rect x="50" y="65" width="40" height="25" rx="2" fill="var(--brand-black)" opacity="0.6" />
          <rect x="48" y="100" width="48" height="6" fill="var(--brand-black)" opacity="0.4" />
        </g>
        {/* Wheels */}
        {[65, 140, 200, 240].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="150" r="18" fill="var(--brand-black)" />
            <circle cx={cx} cy="150" r="9" fill="var(--brand-steel)" />
            <circle cx={cx} cy="150" r="3" fill="var(--brand-amber)" />
          </g>
        ))}
        {/* Ground line */}
        <line x1="0" y1="180" x2="320" y2="180" stroke="var(--brand-amber)" strokeOpacity="0.3" strokeDasharray="4 8" />
      </motion.svg>
    </div>
  );
}

