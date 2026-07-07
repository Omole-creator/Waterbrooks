import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { nav, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-green-deep text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-cream/70">
              Solar-powered cold storage and smart monitoring that keep African
              harvests fresh, so farmers waste less and earn more.
            </p>
            <SocialLinks variant="dark" className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-cream/80 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 text-cream/80 hover:text-cream"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={1.8} />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={1.8} />
                <span className="flex flex-wrap gap-x-2">
                  {site.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="hover:text-cream"
                    >
                      {p}
                      {i < site.phones.length - 1 ? "," : ""}
                    </a>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-cream/80 hover:text-cream"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={1.8} />
                  <span>
                    {site.address}
                    <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 opacity-60" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {year} WaterBrooks Technologies. All rights reserved.
          </p>
          <p>Ibadan, Oyo State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
