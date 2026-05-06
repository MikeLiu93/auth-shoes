import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AUTH SHOES",
  description:
    "How AUTH SHOES PTY LTD collects, uses, and protects personal information, including disclosures relating to the eBay Developer API.",
};

const EFFECTIVE_DATE = "5 May 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <header className="border-b border-ink pb-8 md:pb-12 mb-10 md:mb-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
          LEGAL — 01
        </p>
        <h1 className="font-display uppercase tracking-tightest text-5xl md:text-7xl leading-[0.85]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-muted">
          Effective date: {EFFECTIVE_DATE} &middot; Last revised: {EFFECTIVE_DATE}
        </p>
      </header>

      <div className="space-y-6 text-base leading-[1.75] text-ink/90">
        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-2">
          Introduction
        </h2>
        <p>
          This Privacy Policy explains how <strong>AUTH SHOES PTY LTD</strong>{" "}
          (ABN 37 694 216 950), a company registered in Australia at 30
          Fitzhardinge Cres, Evatt, ACT 2617 (&ldquo;AUTH SHOES&rdquo;,{" "}
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), handles
          personal information collected through this website and through the
          services we operate that integrate with third-party platforms such as
          eBay. We are committed to handling personal information in a manner
          consistent with the Australian Privacy Principles (APPs) under the{" "}
          <em>Privacy Act 1988</em> (Cth).
        </p>
        <p>
          By using this website or any service we provide, you agree to the
          collection and use of information in accordance with this policy. If
          you do not agree, please do not use the website or our services.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Information we collect
        </h2>
        <p>
          We collect personal information in three ways. First, information you
          provide directly &mdash; principally your name and email address when
          you contact us by email, together with any details you choose to
          include in your message. Second, information collected automatically
          when you visit the website, such as your IP address, browser type and
          version, the pages you view, the date and time of your visit, and
          basic server log data used to operate and secure the site. Third,
          information we receive from third-party services where you have
          authorised an integration &mdash; for example, when you authorise
          AUTH SHOES to access your eBay account through the eBay Developer
          API, we receive an access token and the specific account data
          necessary to perform the requested operations.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          How we use your information
        </h2>
        <p>
          We use personal information to respond to your enquiries, to operate
          and improve the website, to provide and maintain any services you
          have requested, to detect and prevent misuse, and to comply with our
          legal obligations. We do not use your information for advertising
          profiling, and we do not engage in cross-site tracking.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          eBay integration disclosure
        </h2>
        <p>
          AUTH SHOES PTY LTD operates services that integrate with the eBay
          Developer API. When a user authorises one of our applications to act
          on their behalf, eBay issues an OAuth access token to us. We use this
          token only to perform the operations that the user has expressly
          authorised, and only for as long as necessary to complete those
          operations.
        </p>
        <p>
          We do <strong>not</strong> store eBay account passwords or login
          credentials at any point &mdash; the OAuth flow is designed
          specifically so that credentials remain with eBay. We do not sell,
          rent or share eBay account data with third parties for marketing
          purposes. Account data received through the eBay API is held under
          access controls and is used solely to deliver the integrated
          functionality the user has requested.
        </p>
        <p>
          Users may revoke our access to their eBay account at any time
          directly from their eBay account settings, under the &ldquo;Apps
          you&rsquo;ve given access to&rdquo; section. Once access is revoked,
          we will cease accessing the account and will delete or de-identify
          related access tokens in accordance with our retention practices.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Compliance with eBay Marketplace Account Deletion notifications
        </h2>
        <p>
          Where the eBay platform issues a Marketplace Account Deletion or
          Account Closure notification for a user whose data we hold through
          the eBay Developer API, we comply fully with eBay&rsquo;s published
          policy. We operate a dedicated HTTPS webhook endpoint that is
          subscribed to these notifications, validates each incoming
          notification against eBay&rsquo;s challenge-code mechanism on
          initial registration, and verifies the authenticity of subsequent
          notifications against eBay&rsquo;s published public keys before
          processing.
        </p>
        <p>
          Upon receipt of a valid Marketplace Account Deletion notification,
          we permanently and irrevocably delete all personal data associated
          with the affected user &mdash; including buyer username, shipping
          address, message history, and any order metadata containing
          personal identifiers &mdash; from our production database,
          application logs, and backups, within thirty (30) days of receipt.
          Each notification, the deletion actions taken, and the time of
          completion are recorded in our immutable audit log for compliance
          review. We do not retain any personal identifier of the affected
          user beyond what is technically necessary to complete and verify
          the deletion process itself.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          How we share information
        </h2>
        <p>
          We do not sell personal information. We disclose personal
          information only in the following limited circumstances: to service
          providers who process information on our behalf under contractual
          confidentiality and security obligations (for example, hosting and
          email infrastructure providers); where required or permitted by
          Australian law, including in response to a lawful request from a
          government or regulatory authority; and in the context of a business
          transfer, such as a merger or acquisition, in which case the
          recipient will be bound to honour this policy.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Data retention
        </h2>
        <p>
          We retain personal information only for as long as is reasonably
          necessary for the purposes described in this policy, or for as long
          as required by law. Email correspondence is retained for the period
          necessary to address your enquiry and for a reasonable follow-up
          window thereafter. Server logs are retained for a short rolling
          window for security and diagnostic purposes. eBay access tokens are
          retained only for the duration of the authorised integration.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Security
        </h2>
        <p>
          We take reasonable technical and organisational measures to protect
          personal information against loss, misuse and unauthorised access.
          The website is served exclusively over HTTPS. Access to systems that
          handle personal information is restricted to authorised personnel on
          a need-to-know basis. While no method of transmission or storage is
          completely secure, we work to maintain protections appropriate to
          the sensitivity of the information we hold.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Your rights under Australian law
        </h2>
        <p>
          Subject to the Privacy Act and other applicable laws, you have the
          right to request access to the personal information we hold about
          you, to request correction of information that is inaccurate or
          out-of-date, and to request deletion of personal information that we
          are no longer required to retain. Requests can be sent to{" "}
          <a
            href="mailto:zhuoran@authshoes.com.au"
            className="underline underline-offset-4 hover:text-accent"
          >
            zhuoran@authshoes.com.au
          </a>
          . If you believe we have not handled your information in accordance
          with the Australian Privacy Principles, you may lodge a complaint
          with the Office of the Australian Information Commissioner (OAIC) at{" "}
          <a
            href="https://www.oaic.gov.au"
            className="underline underline-offset-4 hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            oaic.gov.au
          </a>
          .
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Cookies
        </h2>
        <p>
          The website uses minimal essential cookies only, for purposes such as
          remembering basic preferences and supporting core functionality. We
          do not use advertising cookies, third-party analytics that profile
          users across sites, or cross-site tracking cookies of any kind.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Children&rsquo;s privacy
        </h2>
        <p>
          This website and our services are not directed to children under the
          age of 16, and we do not knowingly collect personal information from
          children. If you believe a child has provided personal information to
          us, please contact us and we will take appropriate steps to delete
          it.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Changes to this policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, the services we offer, or applicable law.
          When we do, we will revise the &ldquo;last revised&rdquo; date shown
          at the top of this page. Material changes will be highlighted where
          appropriate.
        </p>

        <h2 className="font-display uppercase tracking-tightest text-2xl md:text-3xl pt-4">
          Contact us
        </h2>
        <p>
          For any questions about this Privacy Policy or about how your
          personal information is handled, please contact us:
        </p>
        <p className="text-sm leading-relaxed">
          AUTH SHOES PTY LTD
          <br />
          Email:{" "}
          <a
            href="mailto:zhuoran@authshoes.com.au"
            className="underline underline-offset-4 hover:text-accent"
          >
            zhuoran@authshoes.com.au
          </a>
          <br />
          Post: 30 Fitzhardinge Cres, Evatt, ACT 2617, Australia
        </p>
      </div>
    </article>
  );
}
