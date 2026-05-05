import Link from "next/link";

const links = [
  { href: "/shoes", label: "SHOES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-tightest leading-none uppercase hover:text-accent transition-colors"
        >
          AUTH SHOES
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
