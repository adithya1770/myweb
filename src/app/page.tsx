import React from 'react'
import Navbar from './components/navbar';
import './web.css';
import { Vortex } from "./components/ui/vortex";
import { MacbookScroll } from "./components/ui/macbook-scroll";
import Link from "next/link";

const page = () => {
  return (
    <div className='text-white bebas-neue-regular tracking-widest'>
      <Navbar/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <div className="w-full mx-auto rounded-md mt-14 h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-4xl md:text-7xl font-bold text-center fira-code-500">
          {"<"}adithya p s{" />"}
        </h2>
        <p className="text-white text-2xl md:text-3xl max-w-xl mt-6 text-center">
           Welcome to my digital realm, I am a developer passionate about web, apps, and everything tech.
        </p>
      </Vortex>
    </div>
    <p className='text-white ml-36 lg:ml-168 mt-10'>Scroll down!</p>
    <MacbookScroll
        title={
          <span className='text-white'>
            Technologies I know so far! but I don&apos;t think this laptop can handle it!
          </span>
        }
        badge={
          <Link href="/blue.png">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/blue.png`}
        showGradient={false}
      />
    <div className='text-3xl ml-20 mb-6 lg:mt-40 lg:pt-72 lg:ml-160'>
      <a href="/gallery" className='mr-14 hover:text-purple-400'>Gallery</a>
      <a href="/feeder" className='hover:text-purple-400'>PING ME!</a>
    </div>
    </div>
    
  )
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};

export default page
