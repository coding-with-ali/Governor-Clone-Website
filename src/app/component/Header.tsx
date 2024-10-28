
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='bg-primary m-auto flex justify-between items-center h-16 w-full fixed z-50 px-4 lg:px-8'>
      <Image 
        src="/logo.png"
        alt="Logo"
        width={90}
        height={120}
        className='mt-16 w-[70px] md:w-[80px] lg:w-[100px] lg:mt-20'
      />
      <h2 className='text-secondary text-xl font-extrabold lg:block xl-lg:text-xl xl:text-xl hidden'>
        Tuition Free Education Program on Latest Technologies
      </h2>
      <h2 className='text-secondary text-xl font-extrabold lg:hidden'>
        Tuition Free Education
      </h2>

      <div className="lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="h-10 w-10  text-white cursor-pointer" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-white cursor-pointer" />
        )}
      </div>

      {/* Large screen horizontal menu */}
      <nav className='hidden lg:flex space-x-8 text-white text-[1rem]'>
        <Link href="/">Home</Link>
        <Link href="/apply">Apply</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/result">Result</Link>
        <Link href="/course">Course</Link>
      </nav>

      {/* Small screen vertical menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-primary text-white text-[1rem] lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/apply" onClick={toggleMenu}>Apply</Link>
            <Link href="/jobs" onClick={toggleMenu}>Jobs</Link>
            <Link href="/result" onClick={toggleMenu}>Result</Link>
            <Link href="/course" onClick={toggleMenu}>Course</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
