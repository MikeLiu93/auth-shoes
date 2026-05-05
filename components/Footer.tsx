import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-3xl md:text-4xl tracking-tightest uppercase leading-none">
            AUTH
            <br />
            SHOES
          </div>
          <p className="mt-6 text-sm text-paper/70 max-w-[18ch] leading-relaxed">
            Authentic sneakers, curated in Canberra.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">
            Index
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/shoes" className="hover:text-accent transition-colors">
                Shoes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">
            Legal
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">
            Registered
          </h4>
          <address className="not-italic text-sm leading-relaxed text-paper/80">
            AUTH SHOES PTY LTD
            <br />
            ABN 37 694 216 950
            <br />
            47 Maranoa St,
            <br />
            Kaleen, ACT 2617
            <br />
            Australia
            <br />
            <a
              href="mailto:hello@acecareer.com.au"
              className="mt-2 inline-block hover:text-accent transition-colors"
            >
              hello@acecareer.com.au
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-[11px] tracking-[0.18em] uppercase text-paper/60">
            &copy; 2025 AUTH SHOES PTY LTD &mdash; All Rights Reserved
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-paper/60 tag-quote">
            MADE IN AUSTRALIA
          </p>
        </div>
      </div>
    </footer>
  );
}
