import React from 'react'
import Image from 'next/image'

export default function Advancecourse() {
    return (
        <div className='ml-5 mt-10 md:ml-10 lg:ml-20 '>
            <h1 className='text-primary text-[26px] font-extrabold text-center md:text-[35px] lg:text-[50px] lg:text-left'>
            Advance Courses 
            </h1>

         <div className=' flex justify-center items-center flex-wrap gap-5 mt-8 lg:justify-start'>
            <div className='border-2 border-black rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-[.5s] '>
                <Image
                    src="/course2.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-5'>
                    Web3 & Metaverse
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course5.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-5'>
                Artifical Inteligence
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course6.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-2'>
                Network Programability  And <br /> Automation 
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course7.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-5'>
                Cloud Native Computing
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course8.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-5'>
                Ambient Computing and IOT
                </h2>
            </div>
            <div className='border-2 border-black rounded-lg shadow-md hover:scale-110 transition-all duration-[.5s]'>
                <Image
                    src="/course10.jpg"
                    alt="Governor Picture"
                    width={300}
                    height={200}
                    className=''
                />
                <h2 className='text-black text-[16px] font-semibold text-center p-5'>
                Earn as You Learn
                </h2>
            </div>
        </div>   
        </div>
    )
}