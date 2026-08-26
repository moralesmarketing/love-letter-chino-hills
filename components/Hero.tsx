import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/dish-story.jpg"
          alt="Cheese pull slice from a Love Letter pizza"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_38%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface from-5% via-surface/60 via-40% to-transparent to-85%" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute inset-0 bg-surface/50 md:hidden" />
      </div>

      <div className="section relative py-28 md:py-40">
        <div className="max-w-xl [text-shadow:0_2px_18px_rgba(0,0,0,0.6)] md:[text-shadow:none]">
          <div className="eyebrow mb-4">Chino Hills, CA</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.05] mb-6">
            Korean Chicken &amp; Pizza,{" "}
            <span className="text-red">Done Right.</span>
          </h1>
          <p className="text-ink-soft text-lg mb-8 max-w-[42ch]">
            Gold-crust pizza stuffed with sweet potato, Korean fried chicken tossed
            fresh to order, and a menu built for sharing. Family owned, right on
            Grand Ave.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-base">
              Order Online
            </a>
            <a href="/menu" className="btn btn-ghost text-base">
              View Menu
            </a>
          </div>

          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
          >
            <span className="text-gold font-bold">★ {business.rating.yelp.score}</span>
            <span>{business.rating.yelp.count.toLocaleString()} reviews on Yelp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
