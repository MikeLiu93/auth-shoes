import shoesData from "@/data/shoes.json";

export type Shoe = {
  slug: string;
  brand: string;
  name: string;
  colorway: string;
  releaseYear: number;
  category: string;
  materials: string;
  description: string;
  image: string;
  featured: boolean;
};

const shoes: Shoe[] = shoesData as Shoe[];

export function getAllShoes(): Shoe[] {
  return shoes;
}

export function getFeaturedShoes(): Shoe[] {
  return shoes.filter((s) => s.featured);
}

export function getShoeBySlug(slug: string): Shoe | undefined {
  return shoes.find((s) => s.slug === slug);
}

export function getShoeSlugs(): string[] {
  return shoes.map((s) => s.slug);
}
