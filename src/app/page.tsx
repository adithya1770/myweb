import React from 'react'
import Navbar from './components/navbar';
import './web.css';
import { Vortex } from "./components/ui/vortex";

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
    <div className='text-3xl ml-36 lg:mt-2 mt-10 lg:ml-160'>
      <a href="/gallery" className='mr-14 hover:text-purple-400'>Gallery</a>
      <a href="/feeder" className='hover:text-purple-400'>PING ME!</a>
    </div>
    </div>
    
  )
}

export default page
