const PHRASES = ["AUTHENTIC", "CURATED", "AUSTRALIA", "EST. 2024"];

export default function Marquee() {
  const items = Array.from({ length: 6 }, () => PHRASES).flat();
  return (
    <div className="bg-ink text-paper overflow-hidden border-y border-ink">
      <div className="flex whitespace-nowrap py-4 animate-marquee will-change-transform">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1 ? "true" : undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((phrase, i) => (
              <li
                key={`${dup}-${i}`}
                className="flex items-center px-8 text-sm md:text-base tracking-[0.3em] uppercase font-medium"
              >
                <span className="tag-quote">{phrase}</span>
                <span className="ml-8 text-paper/40">&mdash;</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
