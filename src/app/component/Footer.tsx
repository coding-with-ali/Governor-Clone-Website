import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-slate-100 w-[100%] h-fit flex flex-wrap justify-start mt-20 pb-5 sm:justify-around'>
      <div className='flex gap-4 ml-2'>
       <div>
       <h2 className='text-[20px] font-bold py-5'>Core Courses</h2>
       <div className='flex flex-col gap-2'>
        <a href="">Programming Fundamentals</a>
        <a href="">Web2 Using NextJS</a>
        <a href="">Earn as You Learn</a>
       </div>
       </div>
      </div>


      <div className='flex gap-4 ml-2'>
       <div>
       <h2 className='text-[20px] font-bold py-5'>Advance Courses</h2>
       <div className='flex flex-col gap-2'>
        <a href="">Web 3 and Metaverse</a>
        <a href="">Cloud-Native Computing</a>
        <a href="">Artificial Intelligence (AI) and Deep Learning</a>
        <a href="">Ambient Computing and IoT</a>
        <a href="">Genomics and Bioinformatics</a>
        <a href="">Network Programmability and Automation</a>
       </div>
       </div>
      </div>


      <div className='flex gap-4 ml-2'>
       <div>
       <h2 className='text-[20px] font-bold py-5'>Social Links</h2>
       <div className='flex flex-col gap-2'>
        <a href="">Programming Fundamentals</a>
        <a href="">Web2 Using NextJS</a>
        <a href="">Earn as You Learn</a>
       </div>
       </div>
      </div>
    </footer>
  )
}