import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="mt-10 flex items-center ml-32">
        <a href="/projects" className="text-4xl mr-10">Projects</a>
        <a href="/blog" className="text-4xl mr-10">Blog</a>
        <a href="/resume" className="text-4xl">Resume</a>   
        <div className="h-14 w-40 bg-white ml-168 flex items-center justify-center rounded-lg">
          <a href="/contact" className="text-4xl text-black">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
