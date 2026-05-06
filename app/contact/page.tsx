import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AUTH SHOES",
  description:
    "Contact AUTH SHOES PTY LTD — Canberra, Australia. Email enquiries welcome.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-[1100px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <header className="border-b border-ink pb-8 md:pb-12 mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
          REACH US
        </p>
        <h1 className="font-display uppercase tracking-tightest text-6xl md:text-8xl leading-[0.85]">
          Contact
        </h1>
      </header>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-3">
            Email
          </p>
          <a
            href="mailto:zhuoran@authshoes.com.au"
            className="font-display uppercase tracking-tightest text-3xl md:text-5xl leading-[0.95] hover:text-accent transition-colors break-all"
          >
            zhuoran@authshoes.com.au
          </a>

          <p className="mt-10 text-base md:text-lg text-ink/85 leading-relaxed max-w-prose">
            We respond to all enquiries within{" "}
            <span className="font-semibold">2 business days</span>. For specific
            archive pieces, include the model and colourway in your subject
            line.
          </p>
        </div>

        <aside className="md:col-span-5 md:col-start-8 border-t md:border-t-0 md:border-l border-ink pt-8 md:pt-0 md:pl-10">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
            REGISTERED OFFICE
          </p>
          <address className="not-italic text-base leading-relaxed">
            <span className="block font-semibold tracking-wide">
              AUTH SHOES PTY LTD
            </span>
            30 Fitzhardinge Cres
            <br />
            Evatt, ACT 2617
            <br />
            Australia
          </address>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-hairline pb-2">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                ABN
              </dt>
              <dd className="font-mono">37 694 216 950</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-hairline pb-2">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                Country
              </dt>
              <dd>Australia</dd>
            </div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
