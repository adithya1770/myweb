"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "./Container";

const navItems = [
  {
    label: "Projects",
    href: "/projects",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Resume",
    href: "/resume",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Updates",
    href: "/updates",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/5
          bg-black/70
          backdrop-blur-xl
        "
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between">
            
            <Link
              href="/"
              className="
                text-sm
                font-bold
                tracking-[0.22em]
                text-emerald-300
                md:text-base
              "
            >
              {"<ADITHYA_P_S/>"}
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      text-sm
                      transition-all
                      duration-300
                      hover:text-emerald-300
                      ${
                        active
                          ? "text-emerald-300"
                          : "text-neutral-500"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="
                rounded-2xl
                border
                border-emerald-400/20
                bg-emerald-400/10
                px-3
                py-2
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-emerald-300
                transition-all
                duration-300
                hover:border-emerald-400/40
                hover:bg-emerald-400/20
                md:px-5
                md:py-2.5
                md:text-xs
              "
            >
              Contact
            </Link>
          </div>
        </Container>
      </header>

      <div
        className="
          fixed
          bottom-3
          left-1/2
          z-50
          flex
          w-[95%]
          max-w-md
          -translate-x-1/2
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-black/80
          px-2
          py-2
          backdrop-blur-xl
          lg:hidden
        "
      >
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                rounded-xl
                px-2
                py-2
                text-[11px]
                transition-all
                duration-300
                ${
                  active
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-neutral-500"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}