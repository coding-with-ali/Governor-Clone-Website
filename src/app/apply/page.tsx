
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Result() {
  return (
    <div className="pt-40">
       <div className="m-auto w-80 h-fit bg-white rounded-lg shadow-sm shadow-black md:py-10 md:w-[500px] lg:w-[600px]  ">
          <h3 className="text-primary text-lg text-center font-semibold p-3 lg:text-3xl">
          Before continuing to the application please subscribe on these social media platforms.
          </h3>
            <div className='w-12 h-auto bg-transparent text-blue-500 m-auto pt-5'>
          <FontAwesomeIcon icon={faFacebook} className='' />
          </div>
          <div className="flex flex-col justify-center items-center py-10">
          <button className="bg-blue-400 text-white text-lg font-extrabold px-12 py-2  ">
            Continue
          </button>
          <div className="flex py-5 gap-1">
          <p>Already applied?</p> 
          <a href="" className="text-blue-400 underline">Get Admit Card</a>
          </div>
          </div>
       </div>
    </div>
  )
}
