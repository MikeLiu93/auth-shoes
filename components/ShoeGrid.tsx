import type { Shoe } from "@/lib/shoes";
import ShoeCard from "./ShoeCard";

export default function ShoeGrid({ shoes }: { shoes: Shoe[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {shoes.map((shoe, i) => (
        <ShoeCard
          key={shoe.slug}
          slug={shoe.slug}
          brand={shoe.brand}
          name={shoe.name}
          colorway={shoe.colorway}
          image={shoe.image}
          index={i + 1}
        />
      ))}
    </div>
  );
}
