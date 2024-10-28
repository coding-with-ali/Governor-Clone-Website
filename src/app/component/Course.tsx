import React from 'react'
import Image from 'next/image'

export default function Course() {
    return (
        <div className='ml-5 md:ml-10 lg:ml-20 '>
            <h1 className='text-primary text-[26px] font-extrabold text-center md:text-[35px] lg:text-[50px] lg:text-left '>
            Core Courses Sequence
            </h1>

         <div className=' flex justify-center items-center gap-5 mt-8 flex-wrap lg:justify-start'>
            <div className='border-2 border-black rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-[.5s] '>
                <Image
                    src="/course1.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[20px] font-semibold text-center p-5'>
                Programming Fundamental
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course4.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[20px] font-semibold text-center p-5'>
                Web2 using Nextjs
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course3.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[20px] font-semibold text-center p-5'>
                Earn as You Learn
                </h2>
            </div>
        </div>   
        </div>
    )
}