"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center bg-black h-screen items-center flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        I am available on{" "}
        <LinkPreview url="https://github.com/adithya1770" className="font-bold text-white">
          Github
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://www.linkedin.com/in/adithyaps929/" className="font-bold text-white">
          Linkedin.
        </LinkPreview>{" "}
        and i can't be found on any other platform. {";}"}
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
    </div>
  );
}
