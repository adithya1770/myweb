import React from 'react'
import Image from 'next/image'
import '../web.css';

const page = () => {
  return (
    <div>
      <iframe src="/resume.pdf" width="100%" className='h-170' style={{ border: 'none' }}/>
    </div>
  )
}

export default page
