"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-surface-line">
      <div className="section flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Love Letter Pizza & Chicken"
            width={52}
            height={47}
            className="h-12 w-auto"
            priority
          />
          <span className="hidden sm:block font-display font-700 leading-tight text-ink">
            <span className="block text-[11px] tracking-[0.15em] uppercase text-ink-faint">
              {business.tagline}
            </span>
            <span className="block text-lg font-bold">Love Letter</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={business.phoneHref} className="text-sm font-semibold text-ink-soft hover:text-ink">
            {business.phone}
          </a>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-1.5 h-11 w-11 items-center rounded-full border border-surface-line"
        >
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-surface-line bg-surface">
          <nav className="section flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink-soft hover:text-ink border-b border-surface-line last:border-none"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href={business.phoneHref} className="btn btn-ghost justify-center">
                Call {business.phone}
              </a>
              <a
                href={business.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary justify-center"
              >
                Order Online
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
