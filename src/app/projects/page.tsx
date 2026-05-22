"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

import Image from "next/image";

interface Project {
  repo_link: string;
  repo_name: string;
  repo_desc: string;
  image1: string;
}

export default function ProjectsPage() {
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

      <main className="relative z-10 pt-28 pb-32">
        <Container>
          <div className="mb-20 max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                things i've built
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
              Projects
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
              Projects I built while learning technologies, experimenting with
              ideas, rebuilding old systems, or randomly getting obsessed with
              a concept for a week.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                "
              >
                <div className="relative h-[260px] overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image1}
                    alt={project.repo_name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="p-7">
                  <h2 className="text-3xl font-bold text-white">
                    {project.repo_name}
                  </h2>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-relaxed
                      text-neutral-400
                    "
                  >
                    {project.repo_desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-2xl
                        border
                        border-emerald-400/20
                        bg-emerald-400/10
                        px-5
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
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}