import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authorization Declined — AUTH SHOES",
  description:
    "eBay account authorization was declined. No connection was made.",
  robots: { index: false, follow: false },
};

export default function AuthDeclinedPage() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 md:px-10 py-20 relative">
      <div className="absolute top-8 left-6 md:left-10 font-mono text-[11px] tracking-[0.18em] text-ink/70 tag-quote">
        № AUTH / 02
      </div>
      <div className="absolute top-8 right-6 md:right-10 font-mono text-[11px] tracking-[0.18em] text-muted">
        eBay OAuth — declined
      </div>

      <div className="max-w-[760px] w-full text-center">
        <div
          aria-hidden
          className="mx-auto mb-10 w-14 h-14 border-2 border-ink flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </div>

        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-6 tag-quote">
          STATUS — NO CONNECTION
        </p>

        <h1 className="font-display uppercase tracking-tightest text-5xl md:text-7xl leading-[0.9]">
          Authorization
          <br />
          Declined.
        </h1>

        <p className="mt-10 text-base md:text-lg leading-relaxed text-ink/85 max-w-[55ch] mx-auto">
          You have declined to authorize <strong>AUTH SHOES PTY LTD</strong>{" "}
          to access your eBay account. No connection has been made and no data
          has been exchanged. You may close this window.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted max-w-[55ch] mx-auto">
          If this was a mistake, please return to the application and try
          again.
        </p>

        <div className="mt-14 flex items-center justify-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            <span aria-hidden>&larr;</span> Return to AUTH SHOES
          </Link>
        </div>
      </div>
    </section>
  );
}
