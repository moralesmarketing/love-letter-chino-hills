import type { Metadata } from "next";
import Image from "next/image";
import { business, menu } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Menu | Love Letter Pizza & Chicken — Chino Hills",
  description:
    "Full menu for Love Letter Pizza & Chicken in Chino Hills: Korean-style pizza, fried chicken and wings, starters, and drinks.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-surface-line">
        <div className="absolute inset-0">
          <Image
            src="/images/dish-pizza.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-surface/60" />
        </div>
        <div className="section relative py-20 md:py-28">
          <div className="eyebrow mb-3">Full Menu</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            Pizza, Chicken &amp; More
          </h1>
          <p className="text-ink-soft text-lg max-w-[52ch] mb-8">
            Prices below are for ordering direct. Order online for pickup or
            delivery — no third-party markup.
          </p>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
        </div>
      </section>

      <div className="section py-14 md:py-20">
        <div className="flex flex-col gap-14">
          {menu.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-1">{category.title}</h2>
              {category.note && (
                <p className="text-sm text-ink-faint mb-5 max-w-[60ch]">{category.note}</p>
              )}
              <ul className="grid sm:grid-cols-2 gap-x-10 mt-5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3 border-b border-surface-line/60"
                  >
                    <span>
                      <span className="text-ink font-medium">{item.name}</span>
                      {item.description && (
                        <span className="block text-sm text-ink-faint mt-0.5">{item.description}</span>
                      )}
                    </span>
                    <span className="text-green font-display font-700 tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
