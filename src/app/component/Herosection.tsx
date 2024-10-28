
import React from 'react'
import Image from 'next/image'

export default function Herosection() {
  return (
    <div className=' pt-20 flex flex-col md:flex-col justify-between items-center overflow-hidden xl:flex-row'>
      <div className='ml-2 h-fit text-center pt-5  xl:ml-20 xl:text-left '>
        <h1 className='text-primary text-[40px] md:text-[60px] font-extrabold'>Governor Sindh</h1>
        <h1 className='text-primary text-[30px] md:text-[40px]'>Kamran Khan Tessori</h1>
        <h1 className='text-[#2eb6e8] text-[30px] md:text-[40px] font-extrabold'>
          Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
        </h1>
        <p className='text-primary text-[20px] md:text-[24px] font-extrabold mt-3'>Earn up to $5,000 / month</p>
        <p className='text-primary text-[20px] md:text-[24px] font-extrabold my-6'>
          Now admissions are open in Hyderabad
        </p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 items-center'>
          <button className='bg-primary text-white py-3 px-28 md:py-4 md:px-20 rounded-md text-lg md:text-xl font-extrabold'>
            Apply Now
          </button>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-primary text-[24px] md:text-[30px] font-extrabold'>562,143</p>
            <p className='text-primary text-[16px] md:text-[20px]'>Accepted Applications</p>
          </div>
        </div>
      </div>
      <div className='relative xl:left-40 mt-10 md:mt-7 flex justify-center md:justify-end items-center overflow-hidden'>
        <Image
          src="/governor-pic.png"
          alt="Governor Picture"
          width={600}
          height={0}
          className='w-[100%] sm:w-[500px] md:w-[600px] lg:w-[900px] h-auto'
        />
      </div>
    </div>
  )
}
