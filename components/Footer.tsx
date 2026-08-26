import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-surface-line bg-surface-raised">
      <div className="section py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo.png"
            alt="Love Letter Pizza & Chicken"
            width={64}
            height={58}
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm text-ink-faint max-w-[28ch]">
            Korean-style pizza and Korean fried chicken, made fresh in Chino Hills.
          </p>
        </div>

        <div className="text-sm">
          <div className="eyebrow mb-3">Visit</div>
          <p className="text-ink-soft">{business.address.line1}</p>
          <p className="text-ink-soft mb-2">{business.address.line2}</p>
          <a href={business.phoneHref} className="block text-ink-soft hover:text-ink mb-2">
            {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red hover:text-red-dark font-medium"
          >
            Get Directions
          </a>
        </div>

        <div className="text-sm">
          <div className="eyebrow mb-3">Find Us</div>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Instagram
              </a>
            </li>
            <li>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Yelp
              </a>
            </li>
            <li>
              <a href={business.grubhubUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Grubhub
              </a>
            </li>
            <li>
              <Link href="/menu" className="text-ink-soft hover:text-ink">
                Full Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-line">
        <div className="section py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} Love Letter Pizza & Chicken. All rights reserved.</p>
          <p>Chino Hills, CA</p>
        </div>
      </div>
    </footer>
  );
}
