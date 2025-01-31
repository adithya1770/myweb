"use client";
import Image from "next/image";
import React from "react";
import '../web.css'
import { Carousel, Card } from "../components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className=" py-20 bg-black h-full">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <h2 className="max-w-7xl pl-4 mx-auto text-7xl lg:text-8xl font-bold text-white bebas-neue-regular dark:text-neutral-200 font-sans">
        My Blogs
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            As I kept exploring, I realized that every new technology builds upon the fundamentals. Concepts that once seemed overwhelming started making sense with practice. I began experimenting with JavaScript, then moved on to frameworks like React and backend technologies like Node.js. With each project, I pushed myself to try something new—whether it was integrating databases, optimizing performance, or building full-stack applications. The more I coded, the more I understood that learning isn’t about memorizing everything at once but about applying knowledge step by step. Now, coding feels less like a task and more like an exciting challenge that keeps me motivated every day.
            </p>
            <Image
              src="https://www.pngkey.com/png/detail/214-2146391_web-development-icon-png.png"
              alt="WebDev"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 mt-10 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Coding Quirky projects is not easy, even if the idea seems implementable!!
              </span>{" "}
              Coding daily and building quirky projects is how I keep learning and experimenting. I enjoy taking unconventional ideas—whether it's a CLI tool, a smart automation, or a unique web app—and turning them into working projects using simple, effective code. I break things down, start with basic constructs, and refine as I go. My focus isn't just on completing projects but on exploring new tech, testing creative solutions, and making coding an everyday habit. Whether it's React, C, or a random Linux experiment, I love tinkering, breaking, and improving—one project at a time.
            </p>
            <Image
              src="https://higherinquietude.wordpress.com/wp-content/uploads/2014/07/intel_lynnfield_die2.jpg?w=1400"
              alt="CPUDie"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 mt-10 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Learning & Experiences",
    title: "Learning JavaScript and MERN Stack",
    src: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Coding Daily and Quirky Projects",
    src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
    content: <DummyContent2 />,
  }
];
