import Image from "next/image";
import Link from "next/link";
import type { Shoe } from "@/lib/shoes";

export default function Hero({
  heroShoe,
  total,
}: {
  heroShoe: Shoe;
  total: number;
}) {
  const totalLabel = String(total).padStart(3, "0");
  return (
    <section className="relative overflow-hidden border-b border-ink min-h-[calc(100vh-3.5rem)]">
      <div className="absolute top-6 right-6 md:top-8 md:right-10 font-mono text-[11px] tracking-[0.18em] text-ink/70">
        № 001 / {totalLabel}
      </div>
      <div className="absolute top-6 left-6 md:top-8 md:left-10 font-mono text-[11px] tracking-[0.18em] text-ink/70 tag-quote">
        ARCHIVE — VOL. 01
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-28 pb-20 grid md:grid-cols-12 gap-8 md:gap-4 items-end relative">
        <div className="md:col-span-7 lg:col-span-7 relative z-10">
          <p className="text-xs tracking-[0.22em] uppercase text-muted mb-6 md:mb-8">
            <span className="tag-quote">EST. 2024</span>
            <span className="mx-3 text-ink/30">/</span>
            CANBERRA, AUSTRALIA
          </p>
          <h1 className="font-display uppercase tracking-tightest leading-[0.85] text-[18vw] md:text-[10rem] lg:text-[11rem]">
            AUTHENTIC.
          </h1>
          <h2 className="font-display uppercase tracking-tightest leading-[0.95] text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6 max-w-3xl">
            SNEAKERS,
            <br />
            CURATED IN CANBERRA.
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted max-w-md leading-relaxed">
            A working archive of the silhouettes shaping streetwear &mdash; sourced,
            authenticated, documented.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/shoes"
              className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 text-xs tracking-[0.22em] uppercase hover:bg-accent transition-colors"
            >
              Enter the archive
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-4 text-xs tracking-[0.22em] uppercase border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-5 relative">
          <div className="relative aspect-square md:absolute md:-right-10 md:bottom-0 md:w-[120%] md:aspect-auto md:h-[80vh]">
            <div className="absolute inset-0 bg-[#F1F1F1]" />
            <Image
              src={heroShoe.image}
              alt={`${heroShoe.brand} ${heroShoe.name}`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain p-6 md:p-12"
            />
            <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.18em] text-ink/70 tag-quote">
              {heroShoe.brand.toUpperCase()} — {heroShoe.colorway.toUpperCase()}
            </div>
            <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.18em] text-ink/70">
              REF. {heroShoe.slug.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
