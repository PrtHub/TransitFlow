import { about } from "../../assets/images"


const Hero = () => {
  return (
    <>
    <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
      <div className="w-full h-full ">
         <img src={about} alt="about"  className="w-full h-full object-cover"/>
      </div>
      <div className="w-full  h-full flex flex-col items-start justify-start gap-2 absolute top-36 left-8 sm:top-36 sm:left-8 md:top-40 md:left-5 lg:top-40 lg:left-8 xl:top-44 xl:left-32 2xl:left-80 ">
      <p className="font-Rubik text-white text-xs font-normal border-l-4 border-l-[#FFB629] px-2">
      About Us
            </p>
            <h1 className="font-Rubik text-2xl md:text-3xl lg:text-4xl  text-white font-bold">
            About Our Logistics
            </h1>
      </div>
    </div>
    </>
  )
}

export default Hero