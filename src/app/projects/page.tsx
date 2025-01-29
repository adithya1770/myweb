"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";

export default function AnimatedPinDemo() {
  return (
    <div className="h-screen bg-black w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[35rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <Image width={150} height={90} alt="" src="data:image/webp;base64,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" className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br"/>
        </div>
      </PinContainer>
    </div>
  );
}

