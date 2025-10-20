import React from 'react'
import Navbar from './components/navbar';
import './web.css';
import SignupFormDemo from './feeder/page';

const page = () => {
  return (
    <div className='text-white bebas-neue-regular tracking-widest'>
      <Navbar/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <div className="w-full mx-auto rounded-md mt-14 h-[30rem] overflow-hidden">
        <h2 className="text-white text-4xl mt-40 md:text-7xl font-bold text-center fira-code-500">
          {"<"}adithya p s{" />"}
        </h2>
        <p className="text-white text-2xl lg:ml-120 lg:mt-10 md:text-3xl max-w-xl mt-6 text-center">
           Welcome to my digital realm, I am a developer passionate about web, apps, and everything tech.
        </p>
    </div>
    <p className='text-white ml-36 lg:ml-170 lg:mt-10 mt-16'>Scroll down!</p>
    <h1 className='lg:text-8xl lg:ml-80 lg:mt-20 ml-8 mt-32 text-3xl'>TECHNOLOGIES I KNOW SO FAR!</h1>
    <div className="flex flex-wrap items-center justify-center lg:gap-4 lg:p-4 gap-2 p-4">
    <img src="https://cdn.simpleicons.org/react" alt="React Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/git" alt="Git Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/python" alt="Python Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/svelte" alt="Svelte Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/c" alt="C Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/cplusplus" alt="C++ Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/r" alt="R Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/css" alt="CSS3 Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/html5" alt="HTML5 Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB Icon" className="w-10 h-10" />
    <img src="https://cdn.simpleicons.org/mysql" alt="MySQL Icon" className="w-10 h-10" />
  </div>
    <div className='text-3xl ml-20 mt-20 mb-6 lg:mt-2 lg:pt-2 lg:ml-160'>
      <SignupFormDemo/>
    </div>
    </div>
    
  )
}

export default page
