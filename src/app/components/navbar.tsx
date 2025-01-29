import React from 'react';
import '../web.css'

const Navbar = () => {
  return (
    <div style={{ position: 'relative', zIndex: 50 }}>
      <div className="mt-10 flex items-center ml-36 bebas-neue-regular">
        <a href="/projects" className="text-4xl mr-10">Projects</a>
        <p className='mr-10'>|</p>
        <a href="/blog" className="text-4xl mr-10">Blog</a>
        <p className='mr-10'>|</p>
        <a href="/resume" className="text-4xl mr-10">Resume</a>
        <p className='mr-10'>|</p>
        <a href="/about" className="text-4xl">See Me</a>    
        <div className="h-14 w-40 bg-white ml-130 flex items-center justify-center rounded-lg  hover:bg-black">
          <a href="/contact" className="text-4xl text-black hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
