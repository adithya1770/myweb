"use client";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    value: "@adithya1770",
    href: "https://github.com/adithya1770",
  },

  {
    label: "LinkedIn",
    value: "adithyaps929",
    href: "https://www.linkedin.com/in/adithyaps929/",
  },

  {
    label: "Email",
    value: "adithyaps929@gmail.com",
    href: "mailto:adithyaps929@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <div className="grid-background fixed inset-0 opacity-30" />

      <main className="relative z-10 pt-28 pb-32">
        <Container>
          <div className="max-w-5xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                reach out anytime
              </p>
            </div>

            <h1
              className="
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                text-white
                md:text-7xl
              "
            >
              Contact
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-neutral-400
              "
            >
              Open to collaborations, interesting ideas, random engineering
              discussions, internships, or just talking about tech and systems.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                "
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {social.label}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <h2 className="text-[1.35rem] font-bold text-white break-all">
                  {social.value}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  {social.label === "GitHub" &&
                    "my codes, experiments, and random projects."}

                  {social.label === "LinkedIn" &&
                    "my professional journey and experiences."}

                  {social.label === "Email" &&
                    "probably the fastest way to reach me."}
                </p>

                <div
                  className="
                    mt-8
                    inline-flex
                    rounded-2xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/10
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-emerald-300
                  "
                >
                  Open
                </div>
              </Link>
            ))}
          </div>

          <div
            className="
              mt-20
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              lg:p-10
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                quick note
              </p>
            </div>

            <h2 className="text-4xl font-bold text-white">
              I like building weird things
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-neutral-400
              "
            >
              Especially systems involving AI, recommendation engines,
              infrastructure, semantic search, experimental products, mobile
              applications, or low-level engineering concepts.
            </p>

            <a
              href="mailto:adithyaps929@gmail.com"
              className="
                mt-10
                inline-flex
                rounded-2xl
                border
                border-emerald-400/20
                bg-emerald-400/10
                px-6
                py-3
                text-sm
                uppercase
                tracking-[0.2em]
                text-emerald-300
                transition-all
                duration-300
                hover:border-emerald-400/40
                hover:bg-emerald-400/20
              "
            >
              Send Email
            </a>
          </div>
        </Container>
      </main>
    </div>
  );
}