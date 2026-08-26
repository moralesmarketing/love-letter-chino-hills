import { business } from "@/lib/site-data";

const reasons = [
  { label: "Lower prices", detail: "Menu runs 15–20% less than third-party apps" },
  { label: "No service fees", detail: "Third-party apps tack on delivery + service fees" },
  { label: "Goes straight to the kitchen", detail: "No middleman between your order and your food" },
];

export default function OrderDirectCTA() {
  return (
    <section className="bg-surface-raised border-y border-surface-line">
      <div className="section py-16 md:py-20">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Order Direct &amp; Save</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Skip the app fees. Order straight from us.
            </h2>
            <p className="text-ink-soft text-lg mb-8 max-w-[48ch]">
              Same food, same kitchen — for less. Ordering directly keeps more of
              every dollar with the restaurant instead of a delivery app.
            </p>
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-base">
              Order Direct Now
            </a>
          </div>

          <ul className="flex flex-col gap-5">
            {reasons.map((r) => (
              <li key={r.label} className="flex gap-4 items-start bg-surface rounded-xl border border-surface-line p-5">
                <span className="mt-0.5 shrink-0 h-7 w-7 rounded-full bg-green-soft text-green flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <div>
                  <div className="font-semibold text-ink">{r.label}</div>
                  <div className="text-sm text-ink-faint">{r.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
