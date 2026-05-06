import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AUTH SHOES",
  description:
    "AUTH SHOES PTY LTD is a Canberra-based sneaker curation studio. Authentic, verified, archived.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[900px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <header className="border-b border-ink pb-8 md:pb-12 mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
          c/o AUTH SHOES
        </p>
        <h1 className="font-display uppercase tracking-tightest text-6xl md:text-8xl leading-[0.85]">
          About
        </h1>
      </header>

      <div className="space-y-7 text-lg md:text-xl leading-relaxed text-ink/90">
        <p>
          <strong className="font-semibold">AUTH SHOES</strong> is a
          Canberra-based sneaker curation studio. We source, authenticate, and
          showcase rare and contemporary footwear from the brands shaping
          streetwear culture today.
        </p>
        <p>
          Founded in 2024, AUTH SHOES PTY LTD operates from the Australian
          Capital Territory. Our focus is authenticity &mdash; every piece in our
          archive is verified, documented, and presented with care.
        </p>
        <p>
          This website is our public archive. For enquiries about specific
          pieces, please reach out via email.
        </p>
      </div>

      <footer className="mt-20 pt-8 border-t border-hairline text-xs leading-relaxed text-muted">
        <p className="tracking-[0.12em] uppercase">
          AUTH SHOES PTY LTD &middot; ABN 37 694 216 950
        </p>
        <p className="mt-1">
          30 Fitzhardinge Cres, Evatt, ACT 2617, Australia
        </p>
      </footer>
    </article>
  );
}
