import Image from "next/image";
import Link from "next/link";

export type ShoeCardProps = {
  slug: string;
  brand: string;
  name: string;
  colorway: string;
  image: string;
  index: number;
};

export default function ShoeCard({
  slug,
  brand,
  name,
  colorway,
  image,
  index,
}: ShoeCardProps) {
  const indexLabel = `№ ${String(index).padStart(3, "0")}`;
  return (
    <Link
      href={`/shoes/${slug}`}
      className="group block border border-ink bg-paper hover:border-accent transition-colors"
    >
      <div className="relative aspect-square overflow-hidden bg-[#F5F5F5]">
        <Image
          src={image}
          alt={`${brand} ${name} — ${colorway}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.18em] text-ink/60">
          {indexLabel}
        </span>
        <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.18em] text-ink/60 tag-quote">
          SNEAKER
        </span>
      </div>
      <div className="border-t border-ink p-4 md:p-5">
        <p className="text-[10px] tracking-[0.22em] uppercase text-muted">
          {brand}
        </p>
        <h3 className="mt-2 text-base md:text-lg font-medium leading-snug">
          {name}
        </h3>
        <p className="mt-1 text-xs text-muted">{colorway}</p>
      </div>
    </Link>
  );
}
