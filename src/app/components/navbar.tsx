import React from 'react';
import '../web.css'

const Navbar = () => {
  return (
    <div style={{ position: 'relative', zIndex: 50 }}>
      <div className="mt-10 flex items-center ml-2 lg:ml-36 bebas-neue-regular">
        <a href="/projects" className="text-xl lg:text-4xl mr-1 lg:mr-10 hover:text-purple-400">Projects</a>
        <p className='mr-1 lg:mr-10'>|</p>
        <a href="/blog" className="text-xl lg:text-4xl mr-1 lg:mr-10 hover:text-purple-400">Blog</a>
        <p className='mr-1 lg:mr-10'>|</p>
        <a href="/resume" className="text-xl lg:text-4xl mr-1 lg:mr-10 hover:text-purple-400">Resume</a>
        <p className='mr-1 lg:mr-10'>|</p>
        <a href="/about" className="text-xl lg:text-4xl hover:text-purple-400">SeeMe</a>    
        <div className="lg:h-14 h-6 lg:w-40 w-24 bg-white ml-2 lg:ml-130 flex items-center justify-center rounded-lg  hover:bg-black">
          <a href="/contact" className="text-xl lg:text-4xl text-black hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
