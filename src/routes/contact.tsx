import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/shared/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TransitFlow" },
      { name: "description", content: "Get in touch with TransitFlow dispatch and sales." },
      { property: "og:title", content: "Contact TransitFlow" },
      { property: "og:description", content: "Real humans, real timelines, real prices." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk Freight"
        subtitle="Tell us what you need to ship and we'll come back with a quote in under 60 seconds."
      />
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <form
            className="rounded-3xl border border-brand-border bg-brand-steel p-10 space-y-5 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" placeholder="Jane Doe" />
              <Field label="Email" placeholder="jane@company.com" type="email" />
              <Field label="Subject" placeholder="Shipping inquiry" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-brand-muted mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your shipment…"
                className="w-full rounded-xl border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-amber"
              />
            </div>
            <MagneticButton type="submit" variant="amber">
              Let's Talk
            </MagneticButton>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-brand-muted mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted focus:outline-none focus:border-brand-amber"
      />
    </div>
  );
}

