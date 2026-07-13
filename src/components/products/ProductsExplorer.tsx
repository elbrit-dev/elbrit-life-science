"use client";

import { useMemo, useState } from "react";
import { Search, Package, X } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { buildCatalogue, TOTAL_SKUS, type Category } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function ProductsExplorer() {
  const catalogue = useMemo(() => buildCatalogue(), []);
  const counts = useMemo(
    () =>
      Object.fromEntries(
        catalogue.map((c) => [c.category, c.families.reduce((n, f) => n + f.variants.length, 0)])
      ) as Record<Category, number>,
    [catalogue]
  );

  const [active, setActive] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = catalogue
    .filter((cat) => active === "All" || cat.category === active)
    .map((cat) => ({
      ...cat,
      families: cat.families.filter(
        (fam) =>
          !q ||
          fam.family.toLowerCase().includes(q) ||
          fam.variants.some((v) => v.toLowerCase().includes(q))
      ),
    }))
    .filter((r) => r.families.length > 0);

  const totalShown = results.reduce(
    (n, r) => n + r.families.reduce((m, f) => m + f.variants.length, 0),
    0
  );

  return (
    <div className="container-x">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] xl:gap-16">
        {/* ---------------- Sidebar ---------------- */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search 210 products…"
              className="w-full border-b border-ink bg-transparent py-3 pl-6 pr-6 text-base text-ink outline-none transition-colors placeholder:text-navy-300 focus:border-elbrit-500"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>

          {/* Desktop: vertical index */}
          <nav aria-label="Therapy areas" className="mt-8 hidden lg:block">
            <p className="mono mb-3 text-[0.65rem] uppercase tracking-widest text-navy-300">
              Therapy areas
            </p>
            <ul>
              <SideItem
                label="All products"
                count={TOTAL_SKUS}
                active={active === "All"}
                onClick={() => setActive("All")}
              />
              {catalogue.map((c) => (
                <SideItem
                  key={c.category}
                  label={c.category}
                  count={counts[c.category]}
                  active={active === c.category}
                  onClick={() => setActive(c.category)}
                />
              ))}
            </ul>
          </nav>

          {/* Mobile: wrapping chips */}
          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            <Chip label="All" active={active === "All"} onClick={() => setActive("All")} />
            {catalogue.map((c) => (
              <Chip
                key={c.category}
                label={c.category}
                active={active === c.category}
                onClick={() => setActive(c.category)}
              />
            ))}
          </div>
        </aside>

        {/* ---------------- Results ---------------- */}
        <div className="min-w-0">
          <div className="flex items-baseline justify-between border-b border-hairline pb-4">
            <p className="text-sm text-muted" aria-live="polite">
              <span className="font-semibold text-ink">{totalShown}</span> products
              {active !== "All" && <> · {active}</>}
              {q && <> · “{query}”</>}
            </p>
            {(active !== "All" || q) && (
              <button
                onClick={() => {
                  setActive("All");
                  setQuery("");
                }}
                className="mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-elbrit-600"
              >
                Reset
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="mt-16 flex flex-col items-center text-center">
              <Package className="h-10 w-10 text-navy-300" />
              <p className="mt-3 font-display text-xl text-ink">No products found</p>
              <p className="mt-1 text-sm text-muted">Try a different search or therapy area.</p>
            </div>
          ) : (
            <div className="space-y-16 pt-10">
              {results.map((cat) => (
                <section key={cat.category} aria-label={cat.category}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] bg-ink text-white">
                      <Icon name={cat.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl leading-none text-ink">{cat.category}</h2>
                      <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {cat.families.map((fam) => (
                      <article key={fam.family} className="card p-5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-lg text-ink">{fam.family}</h3>
                          <span className="mono shrink-0 text-[0.65rem] uppercase tracking-wider text-navy-300">
                            {fam.variants.length} {fam.variants.length === 1 ? "sku" : "skus"}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {fam.variants.map((v) => (
                            <span
                              key={v}
                              className="mono rounded-[2px] border border-hairline bg-mist px-1.5 py-1 text-[0.68rem] text-muted"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SideItem({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        aria-current={active}
        className={cn(
          "flex w-full items-center justify-between gap-3 border-l-2 py-2.5 pl-3 text-left text-sm transition-colors",
          active
            ? "border-elbrit-500 font-semibold text-ink"
            : "border-transparent text-muted hover:border-navy-200 hover:text-ink"
        )}
      >
        <span>{label}</span>
        <span className="mono text-[0.7rem] text-navy-300">{count}</span>
      </button>
    </li>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-[3px] px-3 py-2 text-xs font-medium transition-colors",
        active ? "bg-ink text-white" : "border border-hairline bg-white text-navy-700 hover:bg-navy-50"
      )}
    >
      {label}
    </button>
  );
}
