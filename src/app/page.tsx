import React from 'react';
import Head from 'next/head';
import Herosection from '../app/component/Herosection';
import Mainsection from '../app/component/Mainsection';
import Course from '../app/component/Course';
import Advancecourse from '../app/component/Advancecourse';

export default function Page() {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3139298744644114"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <Herosection />
        <Mainsection />
        <Course />
        <Advancecourse />
      </div>
    </>
  );
}

