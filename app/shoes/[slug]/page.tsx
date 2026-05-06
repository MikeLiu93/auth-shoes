import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllShoes, getShoeBySlug, getShoeSlugs } from "@/lib/shoes";

type Params = { slug: string };

export function generateStaticParams() {
  return getShoeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const shoe = getShoeBySlug(params.slug);
  if (!shoe) {
    return { title: "Not Found — AUTH SHOES" };
  }
  return {
    title: `${shoe.brand} ${shoe.name} — ${shoe.colorway} | AUTH SHOES`,
    description: shoe.description,
  };
}

export default function ShoeDetailPage({ params }: { params: Params }) {
  const shoe = getShoeBySlug(params.slug);
  if (!shoe) notFound();

  const all = getAllShoes();
  const idx = all.findIndex((s) => s.slug === shoe.slug);
  const indexLabel = `№ ${String(idx + 1).padStart(3, "0")} / ${String(all.length).padStart(3, "0")}`;

  return (
    <article className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16 pb-20">
      <Link
        href="/shoes"
        className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-muted hover:text-accent transition-colors mb-10"
      >
        <span aria-hidden>&larr;</span> Back to archive
      </Link>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7">
          <div className="relative aspect-square bg-[#F5F5F5] border border-ink">
            <Image
              src={shoe.image}
              alt={`${shoe.brand} ${shoe.name} — ${shoe.colorway}`}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-contain p-8 md:p-14"
            />
            <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.18em] text-ink/60">
              {indexLabel}
            </span>
            <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.18em] text-ink/60 tag-quote">
              SNEAKER
            </span>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-ink/70 tag-quote">
            FOR DISPLAY ONLY — NOT FOR SALE ONLINE
          </p>
        </div>

        <div className="md:col-span-5 md:sticky md:top-20">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-3">
            {shoe.brand}
          </p>
          <h1 className="font-display uppercase tracking-tightest text-5xl md:text-6xl leading-[0.9]">
            {shoe.name}
          </h1>
          <p className="mt-4 text-lg text-ink/85">
            <span className="tag-quote">{shoe.colorway}</span>
          </p>

          <p className="mt-8 text-base leading-relaxed text-ink/85">
            {shoe.description}
          </p>

          <dl className="mt-10 border-t border-ink divide-y divide-hairline">
            <div className="flex items-baseline justify-between py-3 gap-4">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                Release year
              </dt>
              <dd className="text-sm font-medium">{shoe.releaseYear}</dd>
            </div>
            <div className="flex items-baseline justify-between py-3 gap-4">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                Category
              </dt>
              <dd className="text-sm font-medium">{shoe.category}</dd>
            </div>
            <div className="flex items-baseline justify-between py-3 gap-4">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">
                Materials
              </dt>
              <dd className="text-sm font-medium text-right max-w-[60%]">
                {shoe.materials}
              </dd>
            </div>
          </dl>

          <a
            href={`mailto:zhuoran@authshoes.com.au?subject=${encodeURIComponent(
              `Enquiry — ${shoe.brand} ${shoe.name} (${shoe.colorway})`
            )}`}
            className="mt-10 inline-flex items-center justify-center w-full bg-ink text-paper px-6 py-5 text-xs tracking-[0.22em] uppercase hover:bg-accent transition-colors"
          >
            <span className="tag-quote">ENQUIRE — EMAIL US</span>
          </a>
          <p className="mt-3 text-[11px] tracking-[0.18em] uppercase text-muted">
            Replies within 2 business days.
          </p>
        </div>
      </div>
    </article>
  );
}
