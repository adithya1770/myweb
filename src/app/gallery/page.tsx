"use client";
import React from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import '../web.css'

export default function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <h1 className="text-white lg:text-7xl text-5xl ml-32 mt-10 bebas-neue-regular">Gallery</h1>
      <LayoutGrid cards={cards}/>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        LightSaber by the beach
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A calm and serene place by the beach.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Crowded Church building.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Blends with the sky.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Grumpy Old man.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Couldn&apos;t enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Hating Crowds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A very tranquil place ruined by the chaos.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        technologie
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Pink Floyd and silicon
        </p>
      </div>
    );
  };

  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Old building
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Where i wander off in my free time.
        </p>
      </div>
    );
  };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/pic3.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/pic1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/pic6.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/pic5.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "/pic7.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail:
      "/pic8.jpg",
  }
];
