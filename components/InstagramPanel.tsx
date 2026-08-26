"use client";

import { useEffect, useRef, useState } from "react";
import { business, reels } from "@/lib/site-data";

function ReelCard({
  src,
  caption,
  playing,
  userInteracted,
}: {
  src: string;
  caption: string;
  playing: boolean;
  userInteracted: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (playing && (userInteracted || !reducedMotion)) {
      el.muted = true;
      const attemptPlay = () => el.play().catch(() => {});
      attemptPlay();
      el.addEventListener("canplay", attemptPlay, { once: true });
      return () => el.removeEventListener("canplay", attemptPlay);
    } else {
      el.pause();
    }
  }, [playing, userInteracted]);

  return (
    <div
      className="shrink-0 snap-start overflow-hidden rounded-2xl border border-surface-line bg-surface-raised"
      style={{ width: 240 }}
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={caption}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="p-3 text-sm text-ink-soft leading-snug line-clamp-3">{caption}</p>
    </div>
  );
}

export default function InstagramPanel() {
  const [playing, setPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  return (
    <section id="instagram" aria-labelledby="instagram-heading" className="section py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="eyebrow mb-3">On Instagram</div>
          <h2 id="instagram-heading" className="text-3xl md:text-4xl font-bold text-ink">
            Recent Posts
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setUserInteracted(true);
              setPlaying((v) => !v);
            }}
            aria-pressed={playing}
            className="btn btn-ghost"
          >
            {playing ? "Pause videos" : "Play videos"}
          </button>
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Follow Us
          </a>
        </div>
      </div>

      <div
        role="region"
        aria-label="Recent Instagram reels, scrollable"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {reels.map((reel) => (
          <ReelCard
            key={reel.src}
            src={reel.src}
            caption={reel.caption}
            playing={playing}
            userInteracted={userInteracted}
          />
        ))}
      </div>
    </section>
  );
}
