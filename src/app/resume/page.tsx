import React from 'react'
import Image from 'next/image'
import '../web.css';

const page = () => {
  return (
    <div>
      <Image alt="" width={550} height={800} src="/resume.png" className='ml-128'/>
    </div>
  )
}

export default page
