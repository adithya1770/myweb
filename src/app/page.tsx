import React from 'react'
import Navbar from './components/navbar';
import Image from 'next/image';
import { url } from 'inspector';

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-130 mt-15.5 ml-168 w-96 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/cover.png')"}}></div>
    </div>
  )
}

export default page
