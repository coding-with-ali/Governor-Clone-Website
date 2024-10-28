import React from 'react'
import Image from 'next/image'

export default function Mainsection() {
    return (
        <div className='m-5 border-b-2 border-black pb-12 md:m-10 lg:m-20' >
        <div>
            <h1 className='text-primary text-center font-extrabold text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[40px] '>
                Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
            </h1>
            <p className='pt-10 text-[14px] text-justify font-medium md:text-[16px] lg:text-[20px] 2xl:text-[28px]'>
            The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
            </p>
        </div>
        <div className='flex justify-center pt-12 gap-10 flex-wrap'>
            <Image
            src="/img1.jpg"
            alt="Governor Picture"
            width={700}
            height={600}
            className='w-[420px] h-auto rounded-2xl shadow-2xl shadow-neutral-950'
            />
             <Image
            src="/img2.jpg"
            alt="Governor Picture"
            width={700}
            height={600}
            className='w-[420px] h-auto rounded-2xl shadow-2xl shadow-neutral-950'
            />
             <Image
            src="/img3.jpg"
            alt="Governor Picture"
            width={700}
            height={600}
            className='w-[420px] h-auto rounded-2xl shadow-2xl shadow-neutral-950'
            />
        </div>
        <div className='flex justify-center pt-12 gap-2 flex-wrap'>
        <Image
            src="/slide1.jpg"
            alt="Governor Picture"
            width={700}
            height={0}
            className='w-[650px] h-auto rounded-xl'
            />
            <Image
            src="/slide2.jpg"
            alt="Governor Picture"
            width={700}
            height={0}
            className='w-[650px] h-auto rounded-xl'
            />
        </div>

        </div>
    )

}