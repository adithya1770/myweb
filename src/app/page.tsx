"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

import Link from "next/link";

import {
  SiReact,
  SiNextdotjs,
  SiPandas,
  SiNodedotjs,
  SiPython,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiLinux,
  SiSvelte,
  SiJavascript,
  SiDocker,
  SiGit,
  SiRedis
} from "react-icons/si";

interface Project {
  repo_link: string;
  repo_name: string;
  repo_desc: string;
  image1: string;
}

const technologies = [
  {
    name: "React",
    logo: <SiReact className="text-cyan-400 text-xl" />,
  },

  {
    name: "Next.js",
    logo: <SiNextdotjs className="text-white text-xl" />,
  },

  {
    name: "JavaScript",
    logo: <SiJavascript className="text-yellow-300 text-xl" />,
  },

  {
    name: "Node.js",
    logo: <SiNodedotjs className="text-green-500 text-xl" />,
  },

  {
    name: "Python",
    logo: <SiPython className="text-yellow-400 text-xl" />,
  },

  {
    name: "Pandas",
    logo: <SiPandas className="text-white text-xl" />,
  },

  {
    name: "C",
    logo: <SiC className="text-blue-500 text-xl" />,
  },

  {
    name: "C++",
    logo: <SiCplusplus className="text-blue-400 text-xl" />,
  },

  {
    name: "MongoDB",
    logo: <SiMongodb className="text-green-400 text-xl" />,
  },

  {
    name: "PostgreSQL",
    logo: <SiPostgresql className="text-sky-400 text-xl" />,
  },

  {
    name: "Redis",
    logo: <SiRedis className="text-red-400 text-xl" />,
  },

  {
    name: "Supabase",
    logo: <SiSupabase className="text-emerald-400 text-xl" />,
  },

  {
    name: "TailwindCSS",
    logo: <SiTailwindcss className="text-cyan-300 text-xl" />,
  },

  {
    name: "Linux",
    logo: <SiLinux className="text-yellow-300 text-xl" />,
  },

  {
    name: "Svelte",
    logo: <SiSvelte className="text-orange-400 text-xl" />,
  },

  {
    name: "Docker",
    logo: <SiDocker className="text-blue-400 text-xl" />,
  },

  {
    name: "Git",
    logo: <SiGit className="text-orange-500 text-xl" />,
  },
];

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");

      const data = await response.json();

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <div className="grid-background fixed inset-0 opacity-30" />

      <main className="relative z-10">
        <section className="flex min-h-screen items-center pt-20">
          <Container>
            <div className="max-w-5xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  currently building stuff
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
                  lg:text-[7rem]
                "
              >
                {"<ADITHYA"}

                <span className="text-emerald-300">
                  {"_P_S/>"}
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
                Final year computer science student who likes building weird,
                experimental, and sometimes useful software.
              </p>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-neutral-500
                "
              >
                Currently exploring AI systems, recommendation engines,
                low-level programming, full-stack development, and rebuilding
                old projects properly instead of abandoning them halfway.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
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
                    transition-all
                    duration-300
                    hover:border-emerald-400/40
                    hover:bg-emerald-400/20
                  "
                >
                  Projects
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-32">
          <Container>
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-lg font-bold tracking-[0.25em] text-emerald-300">
                Skills / Tools
              </h2>

              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                things i use often
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    transition-all
                    duration-300
                    hover:border-emerald-400/30
                    hover:-translate-y-1
                  "
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs text-neutral-600">
                      #{index + 1}
                    </span>

                    <div>{tech.logo}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {tech.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    Used in random experiments, projects, apps, or systems I’ve
                    built over time.
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-6
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                text-sm
                leading-relaxed
                text-neutral-500
              "
            >
              Currently spending most of my time learning systems programming,
              AI-related stuff, recommendation systems, and rebuilding old
              projects cleaner than before.
            </div>
          </Container>
        </section>

        <section className="pb-32">
          <Container>
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-lg font-bold tracking-[0.25em] text-emerald-300">
                Featured Projects
              </h2>

              <Link
                href="/projects"
                className="
                  text-sm
                  text-neutral-500
                  transition-all
                  duration-300
                  hover:text-emerald-300
                "
              >
                see more →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {projects.slice(0, 3).map((project, index) => (
                <a
                  key={index}
                  href={project.repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    transition-all
                    duration-300
                    hover:border-emerald-400/30
                    hover:-translate-y-1
                  "
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      personal project
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-emerald-400/20
                        bg-emerald-400/10
                        px-3
                        py-1
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-emerald-300
                      "
                    >
                      building
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {project.repo_name}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                    {project.repo_desc}
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}