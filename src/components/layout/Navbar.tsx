import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/pricing", label: "Pricing" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2", className)} data-cursor="button">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3" y="6" width="26" height="4" rx="1" fill="var(--brand-amber)" />
        <rect x="6" y="14" width="20" height="4" rx="1" fill="var(--brand-amber)" opacity="0.85" />
        <rect x="9" y="22" width="14" height="4" rx="1" fill="var(--brand-amber)" opacity="0.6" />
      </svg>
      <span className="font-display text-2xl tracking-wide text-brand-white group-hover:text-brand-amber transition-colors">
        TransitFlow
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-brand-black/80 border-b border-brand-border"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-cursor="button"
                className="font-body text-sm uppercase tracking-[0.18em] text-brand-white/80 hover:text-brand-amber transition-colors"
                activeProps={{ className: "text-brand-amber" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <MagneticLink to="/contact" variant="amber" className="!px-6 !py-3">
              Get a Quote
            </MagneticLink>
          </div>
          <button
            type="button"
            className="lg:hidden text-brand-white"
            onClick={() => setOpen(true)}
            data-cursor="button"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-black lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="text-brand-white"
                data-cursor="button"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-10 gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl tracking-wide text-brand-white hover:text-brand-amber"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6">
                <MagneticLink to="/contact" variant="amber">
                  Get a Quote
                </MagneticLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

