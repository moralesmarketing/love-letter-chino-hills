import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Story() {
  return (
    <section id="story" className="section py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="eyebrow mb-3">Family Owned &amp; Operated</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">
            Two food traditions, one pizza.
          </h2>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-4">
            Love Letter started with a simple idea: bring the bold, sweet-and-savory
            flavors of Korean cooking to a pizza and fried chicken menu. Our dough is
            hand tossed daily, our crust is stuffed with real sweet potato, and every
            batch of wings is fried and sauced to order — never sitting under a heat
            lamp.
          </p>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-6">
            Every table gets a side of cabbage salad and pickled radish, on the house,
            same as it would at a Korean BBQ spot — because that's the tradition this
            menu grew out of.
          </p>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Visit Us on Grand Ave
          </a>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-pizza.jpg"
            alt="Fresh pizza being sliced at Love Letter"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[38%_60%]"
          />
        </div>
      </div>
    </section>
  );
}
