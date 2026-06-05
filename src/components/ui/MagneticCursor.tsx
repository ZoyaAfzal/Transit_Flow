import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 20, stiffness: 200, mass: 0.6 });
  const ringY = useSpring(y, { damping: 20, stiffness: 200, mass: 0.6 });
  const [variant, setVariant] = useState<"default" | "button" | "cta">("default");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest("[data-cursor]");
      const v = el?.getAttribute("data-cursor");
      if (v === "cta") setVariant("cta");
      else if (v === "button" || t.closest("a,button")) setVariant("button");
      else setVariant("default");
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const ringSize = variant === "default" ? 36 : 64;
  const ringHeight = variant === "default" ? 36 : 40;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-brand-amber"
        style={{
          x,
          y,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        animate={{
          width: ringSize,
          height: ringHeight,
          backgroundColor:
            variant === "cta" ? "rgba(245,166,35,0.9)" : "rgba(245,166,35,0)",
          borderColor:
            variant === "cta"
              ? "rgba(245,166,35,1)"
              : "rgba(245,166,35,0.45)",
        }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
}

