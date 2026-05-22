"use client";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

import Image from "next/image";

const stack = [
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Python",
  "C",
  "C++",
  "Linux",
  "MongoDB",
  "Supabase",
  "TailwindCSS",
  "AI Systems",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <div className="grid-background fixed inset-0 opacity-30" />

      <main className="relative z-10 pt-28 pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[320px_1fr]">
            
            <div
              className="
                mx-auto
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                w-[220px]
                h-[220px]
                lg:w-[320px]
                lg:h-[420px]
                lg:rounded-[32px]
              "
            >
              <div className="relative h-[220px] w-[220px] lg:h-[420px] lg:w-[320px]">
                <Image
                  src="/main.jpg"
                  alt="Adithya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  about me
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
                systems,
                <br />
                software
                <span className="text-emerald-300">
                  {" "}
                  & curiosity
                </span>
              </h1>

              <p
                className="
                  mt-10
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-neutral-400
                "
              >
                Final year computer science student passionate about building
                experimental systems, intelligent software, full-stack
                platforms, mobile applications, and unconventional engineering
                projects.
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-neutral-400
                "
              >
                I enjoy exploring low-level systems, recommendation engines,
                distributed architectures, semantic discovery, AI-assisted
                workflows, and rebuilding projects from the ground up to deeply
                understand how they function internally.
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-neutral-400
                "
              >
                Currently interested in systems programming, intelligent music
                systems, infrastructure engineering, semantic search, and
                experimental product design.
              </p>

              <div className="mt-14">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-bold tracking-[0.25em] text-emerald-300">
                    current stack
                  </h2>

                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    things i use often
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {stack.map((tech) => (
                    <div
                      key={tech}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-2.5
                        text-sm
                        text-neutral-400
                        transition-all
                        duration-300
                        hover:border-emerald-400/30
                        hover:text-emerald-300
                      "
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="
                  mt-12
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  text-sm
                  leading-relaxed
                  text-neutral-500
                "
              >
                Currently exploring intelligent systems, semantic search,
                recommendation engines, distributed architectures, and scalable
                software engineering.
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}