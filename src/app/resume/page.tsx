"use client";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

export default function ResumePage() {
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
                PROFESSIONAL RECORD
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
              Resume
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
              My resume with projects, experience, skills, and things I’ve been
              working on recently.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              Download Resume
            </a>
          </div>

          <div
            className="
              mt-16
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div className="hidden md:block">
              <iframe
                src="/resume.pdf"
                width="100%"
                className="h-[85vh]"
                style={{ border: "none" }}
              />
            </div>

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-6
                px-6
                py-20
                md:hidden
              "
            >
              <p className="text-center text-neutral-400">
                Resume preview is disabled on mobile devices.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
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
                "
              >
                Open Resume
              </a>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}