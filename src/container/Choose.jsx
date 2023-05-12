import { BsBox } from "react-icons/bs"
import { AiOutlineGlobal, AiOutlineClockCircle } from "react-icons/ai"
import { MdOutlineHeadsetMic } from "react-icons/md"
import { RiShipLine } from "react-icons/ri"
import { ImPriceTags } from "react-icons/im"
import { plane } from "../assets/images"


const Choose = () => {
  return (
    <>
    <div className="w-full h-full bg-[#F4F4F4] flex lg:flex-row flex-col items-center justify-start gap-20">
        <div className="h-full md:w-[800px]">
         <img src={plane} alt="" className="w-full h-full object-contain"/>
        </div>
      
       <div className="w-full max-w-[500px] h-full flex flex-col items-start justify-start gap-3 font-Rubik sm:px-0 px-8 ">
            <p className="text-xs text-[#1C1F35] font-normal border-l-4 border-l-[#FFB629] px-2">
            Why Choose
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#1C1F35] font-semibold">
            We create opportunity to <br /> reach potential
            </h1>
            <p className="font-Krub text-[#666C89] ">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>

            <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-start gap-2 mt-2">
              <BsBox className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <RiShipLine className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
              Ship Everyware
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <AiOutlineGlobal className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
              Global Tracking
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <MdOutlineHeadsetMic className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
              24/7 Support
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <AiOutlineClockCircle className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
              In Time Delivery
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <ImPriceTags className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
              Transparant Pricing
              </p>
            </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Choose