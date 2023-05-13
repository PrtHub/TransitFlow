/* eslint-disable react/prop-types */
import { useState } from "react"
import { calender } from "../assets/images"


const BlogCard = ({ img, title, date}) => {
    const[show, setShow] = useState(false)

  return (
    <>
    <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-5 ">
       <div className="w-full h-full sm:w-[453px] sm:h-[308px] relative">
         <img src={img} alt="" className="w-full h-full object-contain z-0" onMouseOver={() => setShow(!show)} />
         { show && 
          <div className="w-[323px] h-[203px] m-auto bg-black-200 bg-opacity-90 z-10 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-Krub cursor-pointer">Read More</div>
         }
       </div>
       <div className="flex justify-start items-start gap-4">
           <div className="flex flex-col justify-center items-center gap-2">
               <img src={calender} alt="calender" className="w-8 h-9 md:w-9 md:h-10 lg:w-10 lg:h-11" />
               <div className="flex flex-col items-center justify-center gap-0">
                <p className="text-black-200 text-3xl md:text-4xl lg:text-5xl font-Rubik font-semibold">{date}</p>
                <p className="text-light-gray text-sm font-Krub">September</p>
               </div>
           </div>
           <div className="max-w-[335px] h-full flex flex-col justify-start items-start gap-2">
               <h2 className="font-Rubik text-xl font-normal hover:text-[#FFBE34] cursor-pointer focus:text-[#FFBE34] transition-all duration-200">{title}</h2>
               <p className="para">We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
               <ul className="flex flex-col items-start gap-1 p-4 list-disc font-Krub text-black-200 text-sm">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
               </ul>
           </div>
       </div>
    </div>
    </>
  )
}

export default BlogCard