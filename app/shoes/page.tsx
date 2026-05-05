import type { Metadata } from "next";
import ShoeGrid from "@/components/ShoeGrid";
import { getAllShoes } from "@/lib/shoes";

export const metadata: Metadata = {
  title: "All Shoes — AUTH SHOES",
  description:
    "The complete archive of sneakers documented by AUTH SHOES PTY LTD.",
};

export default function ShoesPage() {
  const shoes = getAllShoes();
  const total = String(shoes.length).padStart(2, "0");

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
      <header className="border-b border-ink pb-8 md:pb-12 mb-12 md:mb-16 flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-4 tag-quote">
            ARCHIVE — INDEX
          </p>
          <h1 className="font-display uppercase tracking-tightest text-6xl md:text-8xl leading-[0.85]">
            All Shoes
          </h1>
        </div>
        <p className="font-mono text-xs md:text-sm tracking-[0.18em] text-ink/70 self-end pb-2">
          № {total} TOTAL
        </p>
      </header>

      <ShoeGrid shoes={shoes} />
    </section>
  );
}
