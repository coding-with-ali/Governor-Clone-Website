export default function About() {
  return (
    <div>
       <h2 className='pt-28 pb-10 text-center text-primary text-[20px] md:text-[30px] font-extrabold lg:text-[40px]'>
       Grand Entrance Exam Result
       </h2>
       <div className="m-auto w-80 h-fit bg-white rounded-lg shadow-sm shadow-black md:py-10 md:w-[500px] lg:w-[600px]  ">
          <h3 className="ml-3 py-2 md:text-2xl ">
            Registration Number *
          </h3>
          <input type="text" placeholder="Registration Number"  className="bg-slate-50 ml-3 w-[90%] h-10 border-black border-[1px] p-1 md:my-2 " required/>
          <h3 className="ml-3 py-2  md:text-2xl">
          CNIC or B-Form Number *
          </h3>
          <input type="text" placeholder=" CNIC or B-Form Number"  className="bg-slate-50 ml-3 w-[90%] h-10 border-black border-[1px] p-1 md:my-2" required/>

          <div className="flex justify-center items-center py-10">
          <button type="submit" className="bg-primary text-white text-lg font-extrabold px-12 py-2  ">
            Get Result
          </button>
          </div>
       </div>
    </div>
  )
}
