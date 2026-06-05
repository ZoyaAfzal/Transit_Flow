import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Navbar";

const cols = [
  {
    title: "Pages",
    links: [
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/fleet", label: "Fleet" },
      { to: "/blog", label: "Blog" },
      { to: "/careers", label: "Careers" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Utility",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/services", label: "Style Guide" },
      { to: "/services", label: "Licenses" },
      { to: "/services", label: "Protected" },
      { to: "/not-found", label: "Not Found" },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-black border-t border-brand-border">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "0% 50%" }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent"
      />

      {/* World map */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <svg viewBox="0 0 800 400" className="w-full max-w-5xl">
          {Array.from({ length: 200 }).map((_, i) => {
            const x = (i % 40) * 20 + 10;
            const y = Math.floor(i / 40) * 20 + 30;
            return <circle key={i} cx={x} cy={y} r="1.2" fill="white" />;
          })}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo />
            <p className="text-sm text-brand-muted max-w-xs">
              Driving the Future of Freight. Precision logistics across 180+ countries.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-brand-border text-brand-white/80 hover:border-brand-amber hover:text-brand-amber transition-colors"
                  data-cursor="button"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-xl text-brand-amber mb-5 tracking-wider">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-brand-white/70 hover:text-brand-amber transition-colors"
                      data-cursor="button"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-end gap-4 pt-8 border-t border-brand-border">
          <a
            href="https://axistechgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-muted uppercase tracking-[0.2em] hover:text-brand-amber transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}

