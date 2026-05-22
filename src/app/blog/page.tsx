"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

import Image from "next/image";

const InternshipContent = () => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        md:p-10
      "
    >
      <p
        className="
          text-sm
          leading-relaxed
          text-neutral-300
          md:text-base
        "
      >
        If I had to summarize my internship experience in a single phrase,
        it would probably be technical exhilaration. I was honestly
        overwhelmed by the facilities and the amount of research happening
        inside the lab.

        <br />
        <br />

        The project I took up involved a lot of technical intricacies,
        debugging, experimentation, and unexpected roadblocks. There were
        moments where I genuinely had no clue what was happening, so I had
        to seek help from mentors and researchers who were extremely kind
        and patient throughout the process.

        <br />
        <br />

        Even though I hit multiple obstacles during development, the process
        of solving them became the most enjoyable part of the internship.
        It pushed me to think differently about systems, robotics, and how
        research projects actually evolve behind the scenes.

        <br />
        <br />

        Overall, it became one of the best learning experiences I’ve had so
        far and gave me a completely different perspective on engineering
        and experimentation.
      </p>

      <Image
        src="/slam1.png"
        alt="Internship"
        width={1200}
        height={800}
        className="
          mt-10
          rounded-2xl
          border
          border-white/10
          object-cover
        "
      />
    </div>
  );
};

const RevampContent = () => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        md:p-10
      "
    >
      <p
        className="
          text-sm
          leading-relaxed
          text-neutral-300
          md:text-base
        "
      >
        Rewriting old projects is honestly painful.

        <br />
        <br />

        You start a project thinking it’s finally complete, then suddenly
        you revisit it months later and realize the architecture is messy,
        dependencies are outdated, styling feels broken, and the codebase
        looks completely different from how you write code now.

        <br />
        <br />

        One of the biggest struggles for me has always been rebuilding old
        projects properly instead of abandoning them halfway. Every framework
        changes fast, tooling changes constantly, and suddenly you end up
        relearning things you already knew before.

        <br />
        <br />

        I literally had to relearn how to configure Tailwind again because
        everything had changed from the older versions I previously used.

        <br />
        <br />

        But at the same time, rebuilding projects teaches a lot more than
        starting new ones repeatedly. You understand your old mistakes,
        architecture decisions, and how much your engineering approach has
        evolved over time.
      </p>

      <Image
        src="/collage.png"
        alt="Revamp"
        width={1200}
        height={800}
        className="
          mt-10
          rounded-2xl
          border
          border-white/10
          object-cover
        "
      />
    </div>
  );
};

const ExperimentalContent = () => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        md:p-10
      "
    >
      <p
        className="
          text-sm
          leading-relaxed
          text-neutral-300
          md:text-base
        "
      >
        I genuinely think experimental projects teach more than endlessly
        cloning the same CRUD applications.

        <br />
        <br />

        Most people improve by repeating tutorials. But for me, the biggest
        learning moments usually came from trying weird ideas that had a
        high chance of failing.

        <br />
        <br />

        Sometimes the project works.
        Sometimes it completely breaks.
        Sometimes the architecture becomes a disaster.

        <br />
        <br />

        But every failed experiment teaches something valuable about
        systems, scalability, tooling, debugging, or engineering decisions.

        <br />
        <br />

        A lot of my projects start as random curiosity rather than polished
        product ideas — recommendation systems, semantic search experiments,
        intelligent music systems, infrastructure tooling, or rebuilding
        runtimes just to understand how they work internally.

        <br />
        <br />

        That curiosity-driven approach honestly helped me learn faster than
        blindly following roadmaps.
      </p>

      <Image
        src="/schematic.png"
        alt="Engineering"
        width={1200}
        height={800}
        className="
          mt-10
          rounded-2xl
          border
          border-white/10
          object-cover
        "
      />
    </div>
  );
};

const blogs = [
  {
    category: "Internship",
    title: "Experience at Centre for System & Design",
    image: "/slam1.png",
    description:
      "Reflections on robotics systems, engineering collaboration, experimentation, and research workflows during my internship experience.",
    content: <InternshipContent />,
  },

  {
    category: "Projects",
    title: "Revamping Legacy Projects & Information Overload",
    image: "/collage.png",
    description:
      "Thoughts on rebuilding old systems, relearning technologies, architectural rewrites, and surviving ecosystem chaos.",
    content: <RevampContent />,
  },

  {
    category: "Engineering",
    title: "Why Experimental Projects Matter",
    image: "/schematic.png",
    description:
      "Why weird experiments and unconventional projects helped me learn more than repetitive tutorial-based development.",
    content: <ExperimentalContent />,
  },
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <div className="grid-background fixed inset-0 opacity-30" />

      <main className="relative z-10 pt-28 pb-32">
        <Container>
          <div className="mb-20 max-w-5xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                latest posts
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
              Blog
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
              Thoughts on projects, engineering, rebuilding old systems,
              internships, random experiments, and things I learn while
              building software.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                onClick={() => setSelectedBlog(blog)}
                className="
                  group
                  cursor-pointer
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
                <div className="relative h-[300px] overflow-hidden border-b border-white/10">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute left-5 top-5">
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
                        tracking-[0.25em]
                        text-emerald-300
                      "
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h2
                    className="
                      text-3xl
                      font-bold
                      leading-tight
                      text-white
                    "
                  >
                    {blog.title}
                  </h2>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-relaxed
                      text-neutral-400
                    "
                  >
                    {blog.description}
                  </p>

                  <div
                    className="
                      mt-8
                      inline-flex
                      rounded-2xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      px-5
                      py-3
                      text-sm
                      text-emerald-300
                    "
                  >
                    read article
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </main>

      {selectedBlog && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-md
            p-4
          "
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-y-auto
              rounded-[32px]
              border
              border-white/10
              bg-[#0d0d0d]
              p-6
              md:p-8
            "
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="
                sticky
                top-0
                ml-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-xl
                text-white
              "
            >
              ×
            </button>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                {selectedBlog.category}
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                {selectedBlog.title}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-neutral-400">
                {selectedBlog.description}
              </p>

              <div className="mt-10">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}