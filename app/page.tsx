import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ShoeGrid from "@/components/ShoeGrid";
import { getAllShoes, getFeaturedShoes } from "@/lib/shoes";

export default function HomePage() {
  const allShoes = getAllShoes();
  const featured = getFeaturedShoes();
  const heroShoe = featured[0] ?? allShoes[0];

  return (
    <>
      <Hero heroShoe={heroShoe} total={allShoes.length} />
      <Marquee />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-28">
        <div className="flex items-end justify-between mb-10 md:mb-14 border-b border-ink pb-6">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-3 tag-quote">
              SECTION 02
            </p>
            <h2 className="font-display uppercase tracking-tightest text-5xl md:text-7xl leading-[0.85]">
              Featured
              <span className="text-muted"> / 选品</span>
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.18em] text-ink/70 mb-2">
            № {String(featured.length).padStart(2, "0")} / {String(allShoes.length).padStart(2, "0")}
          </p>
        </div>

        <ShoeGrid shoes={featured} />

        <div className="mt-14 flex justify-end">
          <Link
            href="/shoes"
            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            View all shoes
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32 pb-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
              c/o AUTH SHOES
            </p>
            <h3 className="font-display uppercase tracking-tightest text-4xl md:text-6xl leading-[0.9]">
              An archive,
              <br />
              not a store.
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-base md:text-lg leading-relaxed text-ink/85">
            <p>
              AUTH SHOES is a Canberra-based sneaker curation studio. We source,
              authenticate, and showcase rare and contemporary footwear from the
              brands shaping streetwear culture today.
            </p>
            <p>
              Every piece in our archive is verified, documented, and presented
              with care. This site is the public catalog &mdash; a working
              reference, not a checkout.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Read more &nbsp;&rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
