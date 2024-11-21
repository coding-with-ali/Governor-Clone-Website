import React from 'react'
import Herosection from "../app/component/Herosection"
import Mainsection from "../app/component/Mainsection"
import Course from "../app/component/Course"
import Advancecourse from "../app/component/Advancecourse"



export default function Page() {
  return (
    <head>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3139298744644114"
     crossorigin="anonymous"></script>
    </head>
    <div>
      <Herosection />
      <Mainsection />
      <Course />
      <Advancecourse />
    </div>
  )
}
