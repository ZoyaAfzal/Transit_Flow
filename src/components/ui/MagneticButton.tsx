import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "amber" | "outline" | "dark";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  cursor?: "cta" | "button";
}

const variantClasses: Record<Variant, string> = {
  amber:
    "relative bg-brand-amber text-brand-black hover:bg-brand-gold border border-brand-amber",
  outline:
    "bg-transparent text-brand-white border border-brand-white/40 hover:border-brand-amber hover:text-brand-amber",
  dark:
    "bg-brand-black text-brand-white border border-brand-black hover:bg-brand-charcoal",
};

function useMagnetic() {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220, mass: 0.4 });
  const sy = useSpring(y, { damping: 18, stiffness: 220, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.3);
    y.set(my * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, sx, sy, onMove, onLeave };
}

const baseClasses =
  "group inline-flex items-center justify-center gap-2 font-body font-medium px-7 py-4 text-sm uppercase tracking-[0.18em] rounded-full transition-colors will-change-transform";

interface BtnProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  variant = "amber",
  className,
  onClick,
  type = "button",
  cursor = "cta",
}: BtnProps) {
  const m = useMagnetic();
  return (
    <motion.button
      ref={m.ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={m.onMove}
      onMouseLeave={m.onLeave}
      style={{ x: m.sx, y: m.sy }}
      data-cursor={cursor}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "amber" && (
        <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="btn-shimmer absolute inset-0" />
        </span>
      )}
    </motion.button>
  );
}

interface LinkBtnProps extends BaseProps {
  to: string;
}

export function MagneticLink({
  children,
  to,
  variant = "amber",
  className,
  cursor = "cta",
}: LinkBtnProps) {
  const m = useMagnetic();
  return (
    <motion.span
      ref={m.ref as React.RefObject<HTMLSpanElement>}
      onMouseMove={m.onMove}
      onMouseLeave={m.onLeave}
      style={{ x: m.sx, y: m.sy, display: "inline-block" }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        to={to}
        data-cursor={cursor}
        className={cn(baseClasses, variantClasses[variant], "relative overflow-hidden", className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    </motion.span>
  );
}

