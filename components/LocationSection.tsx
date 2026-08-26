import { business } from "@/lib/site-data";

export default function LocationSection() {
  return (
    <section id="location" className="bg-surface-raised border-t border-surface-line">
      <div className="section py-16 md:py-20">
        <div className="eyebrow mb-3">Visit Us</div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10">Our Location</h2>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Address
              </div>
              <p className="text-ink text-lg">{business.address.line1}</p>
              <p className="text-ink text-lg mb-3">{business.address.line2}</p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red font-semibold hover:text-red-dark"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Contact
              </div>
              <a href={business.phoneHref} className="block text-ink text-lg hover:text-red">
                {business.phone}
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-2">
                Hours
              </div>
              <ul className="text-ink-soft">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 py-1.5 border-b border-surface-line/60 max-w-xs tabular-nums">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start">
              Order Online
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-surface-line min-h-[360px]">
            <iframe
              src={business.mapEmbedSrc}
              className="w-full h-full min-h-[360px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Love Letter Pizza & Chicken location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
