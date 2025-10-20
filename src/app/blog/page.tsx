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
            If I had to summarize my internship experience in a single phrase, it would be technical exhilaration. I felt really overwhelmed by the facilities provided by the lab. The project I took up involved too many technical intricacies, so I had to seek help from a few mentors who were really kind and helpful. Even though I hit some roadblocks, the journey of finishing my project was smooth, and I was able to solve them. In a nutshell, it was a great learning experience that gave me many insights into robotics.
            </p>
            <Image
              src="https://avatars.githubusercontent.com/u/3979232?s=280&v=4"
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
              revamping my projects and surge of informations!
              </span>{" "}
              You take any project, it might be new or old, small or big doesn&apos;t matter revamping and rewriting them is a huge pain. I have always struggled with rewriting my old projects, when you have already thought that this project ends here but yet there is some scope for imporvement. ahh! painful right&lsquo; That&apos;s exactly when you see the new version of this particular technology has new updates and lots of new features have been added, YES! you have to learn them all. (Happend to me! Had to relearn how to install tailwind.) 
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
    category: "Experiences",
    title: "expreience at centre for system & design",
    src: "/slam1.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "revamp and surge",
    src: "https://blueseatblogs.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2018/07/consciousness-709143.jpg",
    content: <DummyContent2 />,
  }
];
