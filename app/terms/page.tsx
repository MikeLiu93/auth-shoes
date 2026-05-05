import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AUTH SHOES",
  description:
    "Terms governing use of the AUTH SHOES website operated by AUTH SHOES PTY LTD.",
};

const EFFECTIVE_DATE = "5 May 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <header className="border-b border-ink pb-8 md:pb-12 mb-10 md:mb-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
          LEGAL — 02
        </p>
        <h1 className="font-display uppercase tracking-tightest text-5xl md:text-7xl leading-[0.85]">
          Terms of Service
        </h1>
        <p className="mt-6 text-sm text-muted">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </header>

      <div className="space-y-6 text-base leading-[1.75] text-ink/90">
        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-2">
          1. About these terms
        </h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          website operated by <strong>AUTH SHOES PTY LTD</strong> (ABN 37 694
          216 950) at this domain. By accessing or using the website, you agree
          to be bound by these Terms. If you do not agree, please do not use
          the website.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          2. Nature of the website
        </h2>
        <p>
          This website is provided for informational purposes. It functions as
          a public archive and reference for our sneaker curation work. No
          transactions, purchases, payments, or transfers of goods occur on or
          through this website. Any enquiry about a piece in the archive is
          conducted by direct correspondence following an email enquiry, and
          remains subject to separate agreement.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          3. Intellectual property
        </h2>
        <p>
          All content on this website, including text, photographs,
          illustrations, layout, and the AUTH SHOES name and wordmark, is
          owned by AUTH SHOES PTY LTD or used with permission of the rights
          holder. You may view and reference content for personal,
          non-commercial use. You may not reproduce, distribute, or create
          derivative works from website content without our prior written
          permission. Third-party brand names, product names, and trade marks
          referenced on this site (for example, sneaker brand and product
          names) remain the property of their respective owners and are used
          here for descriptive and editorial purposes only.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          4. Acceptable use
        </h2>
        <p>
          You agree not to use the website in any way that is unlawful,
          fraudulent, or harmful, including attempting to gain unauthorised
          access to systems, interfering with the operation of the site,
          scraping content at scale without permission, or using the site in a
          manner that could damage or overburden it. We reserve the right to
          restrict access where we reasonably believe these Terms have been
          breached.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          5. Disclaimers
        </h2>
        <p>
          The website and its content are provided on an &ldquo;as is&rdquo;
          and &ldquo;as available&rdquo; basis. While we take care to keep
          information accurate and current, we make no warranty that the
          website will be uninterrupted, error-free, or that any information
          on the site is complete or up-to-date at all times. Product
          information presented in the archive is descriptive and editorial,
          and may not reflect current availability or condition.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          6. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, AUTH SHOES PTY LTD, its
          directors, employees and contractors will not be liable for any
          indirect, incidental, special, consequential or exemplary damages
          arising out of or in connection with your use of the website,
          including loss of profits, loss of data, or business interruption.
          Nothing in these Terms excludes any non-excludable consumer
          guarantee, right or remedy you have under the{" "}
          <em>Australian Consumer Law</em> or any other applicable law.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          7. Third-party links
        </h2>
        <p>
          The website may include links to third-party websites or services.
          We do not control and are not responsible for the content, policies,
          or practices of those third parties. Visiting a linked site is at
          your own discretion and risk.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          8. Changes to the website and to these Terms
        </h2>
        <p>
          We may modify, suspend, or discontinue any aspect of the website at
          any time, with or without notice. We may also update these Terms
          from time to time; the revised version takes effect on publication.
          Continued use of the website after changes are published constitutes
          acceptance of the revised Terms.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          9. Governing law
        </h2>
        <p>
          These Terms are governed by the laws of the{" "}
          <strong>Australian Capital Territory, Australia</strong>. You and
          AUTH SHOES PTY LTD submit to the non-exclusive jurisdiction of the
          courts of the Australian Capital Territory and the courts competent
          to hear appeals from them.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          10. Contact
        </h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a
            href="mailto:hello@acecareer.com.au"
            className="underline underline-offset-4 hover:text-accent"
          >
            hello@acecareer.com.au
          </a>
          , or by post to AUTH SHOES PTY LTD, 47 Maranoa St, Kaleen, ACT 2617,
          Australia.
        </p>
      </div>
    </article>
  );
}
