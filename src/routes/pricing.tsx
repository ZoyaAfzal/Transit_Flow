import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { MagneticLink } from "@/components/ui/MagneticButton";

const TIERS = [
  {
    name: "Basic",
    price: "$150",
    highlight: false,
    features: [
      "Up to 50 shipments / month",
      "Standard road & rail freight",
      "Real-time tracking dashboard",
      "Email support, 24-hr response",
      "Standard cargo insurance",
    ],
  },
  {
    name: "Premier",
    price: "$250",
    highlight: true,
    features: [
      "Unlimited shipments",
      "All freight modes — road, air, ocean, rail",
      "Dedicated account manager",
      "24/7 priority dispatch hotline",
      "Premium cargo insurance + customs handling",
      "Quarterly strategy reviews",
    ],
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TransitFlow" },
      { name: "description", content: "Transparent, monthly pricing for global freight services." },
      { property: "og:title", content: "Pricing — TransitFlow" },
      { property: "og:description", content: "Reasonably priced transport services. Two plans, no surprises." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans & Pricing"
        title="Reasonably Priced Transport Services"
        subtitle="Two plans. Transparent pricing. Cancel any time."
      />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-10 border ${
                t.highlight
                  ? "bg-brand-amber text-brand-black border-brand-amber amber-glow"
                  : "bg-brand-steel text-brand-white border-brand-border"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-10 rounded-full bg-brand-black text-brand-amber px-4 py-1 text-[10px] uppercase tracking-[0.2em]">
                  Most Popular
                </span>
              )}
              <p className={`text-xs uppercase tracking-[0.3em] ${t.highlight ? "text-brand-black/70" : "text-brand-amber"}`}>
                {t.name} Package
              </p>
              <p className="mt-4 font-display text-7xl leading-none">
                {t.price}
                <span className={`text-2xl ${t.highlight ? "text-brand-black/60" : "text-brand-muted"}`}>/mo</span>
              </p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`h-5 w-5 mt-0.5 shrink-0 ${t.highlight ? "text-brand-black" : "text-brand-amber"}`} strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <MagneticLink
                  to="/contact"
                  variant={t.highlight ? "dark" : "outline"}
                >
                  Get Started
                </MagneticLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

