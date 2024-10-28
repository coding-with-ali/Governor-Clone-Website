import React from 'react'
import Herosection from "../app/component/Herosection"
import Mainsection from "../app/component/Mainsection"
import Course from "../app/component/Course"
import Advancecourse from "../app/component/Advancecourse"



export default function Page() {
  return (
    <div>
      <Herosection />
      <Mainsection />
      <Course />
      <Advancecourse />
    </div>
  )
}
