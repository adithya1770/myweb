"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import "./web.css";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "LightSaber by the beach",
      image: "/pic3.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Crowded Church building",
      image: "/pic1.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Grumpy Old man",
      image: "/pic6.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Hating Crowds",
      image: "/pic5.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Technologie",
      image: "/pic7.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Old Building",
      image: "/pic8.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
  ];

  return (
    <DraggableCardContainer className="julius-sans-one-regular relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Doto:wght@100..900&family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jersey+10&family=Julius+Sans+One&family=Londrina+Shadow&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+MX+Guides&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        welcome to my vault of memories!
      </p>
      {items.map((item, idx) => (
        <DraggableCardBody key={idx} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover montserrat-400"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
