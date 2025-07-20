"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../components/ui/link-preview";
import { LampContainer } from "../components/ui/lamp";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center bg-black h-screen items-center flex-col px-4">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      <p className="text-white dark:text-neutral-400 text-2xl lg:text-4xl mt-10 max-w-3xl mx-auto mb-10">
        I am available only on{" "}
        <LinkPreview url="https://github.com/adithya1770" className="font-bold text-lime-600">
          Github
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://www.linkedin.com/in/adithyaps929/" className="font-bold text-lime-600">
          Linkedin,
        </LinkPreview>{" "}
        and I can&apos;t be found on any other platform. {";}"}
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit my old portfolio{" "}
        <LinkPreview
          url="https://projectpathways.vercel.app/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          ProjectPathways
        </LinkPreview>{" "}
        to know about my journey.
      </p>
      </motion.h1>
      </LampContainer>
    </div>
  );
}
