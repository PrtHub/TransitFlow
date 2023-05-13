import { BsBox } from "react-icons/bs"
import { AiOutlineGlobal, AiOutlineClockCircle } from "react-icons/ai"
import { MdOutlineHeadsetMic } from "react-icons/md"
import { RiShipLine } from "react-icons/ri"
import { ImPriceTags } from "react-icons/im"
import { plane } from "../../assets/images"


const Choose = () => {
  return (
    <>
    <div className="w-full h-full bg-[#F4F4F4] flex lg:flex-row flex-col items-center justify-start gap-20">
        <div className="h-full md:w-[800px]">
         <img src={plane} alt="" className="w-full h-full object-contain"/>
        </div>
      
       <div className="w-full max-w-[500px] h-full flex flex-col items-start justify-start gap-3 font-Rubik sm:px-0 px-8 ">
            <p className="head-text">
            Why Choose
            </p>
            <h1 className="header-text">
            We create opportunity to <br /> reach potential
            </h1>
            <p className="para ">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>

            <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-start gap-2 mt-2">
              <BsBox className="icon" />
              <p className="icon-text">
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <RiShipLine className="icon" />
              <p className="icon-text">
              Ship Everyware
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <AiOutlineGlobal className="icon" />
              <p className="icon-text">
              Global Tracking
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <MdOutlineHeadsetMic className="icon" />
              <p className="icon-text">
              24/7 Support
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <AiOutlineClockCircle className="icon" />
              <p className="icon-text">
              In Time Delivery
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <ImPriceTags className="icon" />
              <p className="icon-text">
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