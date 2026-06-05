import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  backTo?: { to: string; label: string };
}

export function PageHero({ eyebrow, title, subtitle, image, backTo }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      {image && (
        <>
          <div className="absolute inset-0 -z-10">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-black/80 via-brand-black/70 to-brand-black" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-charcoal to-brand-black" />
      )}

      <div className="mx-auto max-w-7xl px-6">
        {backTo && (
          <Link
            to={backTo.to}
            data-cursor="button"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-amber mb-8 hover:text-brand-gold"
          >
            <ArrowLeft className="h-3 w-3" /> {backTo.label}
          </Link>
        )}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-brand-amber mb-5"
          >
            — {eyebrow}
          </motion.p>
        )}
        <SplitText
          as="h1"
          text={title}
          className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] text-brand-white text-balance max-w-5xl"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-2xl text-lg text-brand-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

