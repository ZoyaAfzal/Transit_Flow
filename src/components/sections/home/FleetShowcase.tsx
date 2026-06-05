import { motion } from "framer-motion";
import { useState } from "react";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticLink } from "@/components/ui/MagneticButton";

const fleet = [
  {
    name: "Heavy Haul Semi",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80",
    payload: "80,000 lbs",
    range: "2,500 mi",
    type: "Class 8",
  },
  {
    name: "Refrigerated Truck",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=80",
    payload: "45,000 lbs",
    range: "1,800 mi",
    type: "Reefer",
  },
  {
    name: "Flatbed Loader",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&q=80",
    payload: "48,000 lbs",
    range: "2,200 mi",
    type: "Flatbed",
  },
  {
    name: "Cargo Van Fleet",
    img: "https://images.unsplash.com/photo-1518987048-93e29699e79a?w=900&q=80",
    payload: "10,000 lbs",
    range: "650 mi",
    type: "LDV",
  },
];

export function FleetShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-brand-charcoal py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-4">
              — Our Iron Fleet
            </p>
            <SplitText
              as="h2"
              text="Built for the Long Haul"
              className="font-display text-5xl lg:text-7xl text-brand-white leading-[0.95]"
            />
          </div>
          <MagneticLink to="/fleet" variant="outline">
            View Full Fleet →
          </MagneticLink>
        </div>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        className="flex gap-6 px-6 cursor-grab active:cursor-grabbing select-none"
      >
        {fleet.map((f, i) => (
          <motion.div
            key={f.name}
            onMouseEnter={() => setActive(i)}
            whileHover={{ y: -8 }}
            className={`relative shrink-0 w-[85vw] md:w-[520px] aspect-[16/10] overflow-hidden rounded-3xl border ${
              active === i ? "border-brand-amber amber-glow" : "border-brand-border"
            } transition-all duration-500`}
          >
            <img
              src={f.img}
              alt={f.name}
              draggable={false}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-amber mb-2">
                0{i + 1} / Fleet
              </p>
              <h3 className="font-display text-4xl text-brand-white tracking-wide">
                {f.name}
              </h3>
              <div className="mt-4 flex gap-6 text-xs uppercase tracking-[0.2em] text-brand-white/80">
                <span>
                  <span className="text-brand-muted">Payload</span>{" "}
                  <span className="text-brand-amber">{f.payload}</span>
                </span>
                <span>
                  <span className="text-brand-muted">Range</span>{" "}
                  <span className="text-brand-amber">{f.range}</span>
                </span>
                <span>
                  <span className="text-brand-muted">Type</span>{" "}
                  <span className="text-brand-amber">{f.type}</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

