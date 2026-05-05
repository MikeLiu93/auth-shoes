import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authorization Confirmed — AUTH SHOES",
  description:
    "eBay account authorization successfully completed for AUTH SHOES PTY LTD.",
  robots: { index: false, follow: false },
};

export default function AuthAcceptedPage() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 md:px-10 py-20 relative">
      <div className="absolute top-8 left-6 md:left-10 font-mono text-[11px] tracking-[0.18em] text-ink/70 tag-quote">
        № AUTH / 01
      </div>
      <div className="absolute top-8 right-6 md:right-10 font-mono text-[11px] tracking-[0.18em] text-muted">
        eBay OAuth — accepted
      </div>

      <div className="max-w-[760px] w-full text-center">
        <div
          aria-hidden
          className="mx-auto mb-10 w-14 h-14 border-2 border-accent flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7"
            fill="none"
            stroke="#FF5F1F"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <polyline points="4 12 10 18 20 6" />
          </svg>
        </div>

        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-6 tag-quote">
          STATUS — AUTHORIZED
        </p>

        <h1 className="font-display uppercase tracking-tightest text-5xl md:text-7xl leading-[0.9]">
          Authorization
          <br />
          Confirmed.
        </h1>

        <p className="mt-10 text-base md:text-lg leading-relaxed text-ink/85 max-w-[55ch] mx-auto">
          You have successfully authorized{" "}
          <strong>AUTH SHOES PTY LTD</strong> to access your eBay account on
          your behalf. You may now close this window and return to the
          application that initiated this request.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-muted max-w-[55ch] mx-auto">
          If you did not initiate this request, please revoke access
          immediately from your eBay account settings, under &ldquo;Apps
          you&rsquo;ve given access to&rdquo;.
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
