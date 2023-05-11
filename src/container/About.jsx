import { AboutBg, Air } from "../assets/images";
import { BsBox } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="w-full h-full  bg-white flex flex-col ">
        <div className="w-full h-full z-0">
          <img
            src={AboutBg}
            alt="Background"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] h-fit mx-auto bg-white flex flex-col md:flex-row items-start justify-center gap-5 z-10 sm:-mt-16 md:-mt-24 lg:-mt-28 xl:-mt-32 p-10">
          <div className="w-full md:w-[350px] lg:w-[400px] xl:w-[472px] h-full flex flex-col items-start justify-start gap-4">
            <p className="text-xs text-[#1C1F35] font-normal border-l-4 border-l-[#FFB629] px-2">
              Why us
            </p>
            <h1 className="font-Rubik text-2xl md:text-xl lg:text-3xl text-[#1C1F35] font-semibold">
              We provide full range global logistics solution
            </h1>
            <p className="text-[#666C89] font-medium text-sm md:text-xs lg:text-sm">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.{" "}
            </p>
            <p className="text-[#666C89] font-medium text-sm md:text-xs lg:text-sm">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="flex items-center justify-start gap-2 mt-2">
              <BsBox className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <BiMoney className="background w-7 h-7 p-2 rounded-full" />
              <p className="text-base md:text-lg font-Rubik font-normal">
                Optimized Travel Cost
              </p>
            </div>
          </div>
          <div className="w-full h-full md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] ">
            <img src={Air} alt="" className="w-full h-full" />
          </div>
        </div>

          <div className="w-full h-full flex flex-col sm:flex-row  items-center justify-center gap-10 p-10">
             <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-5xl font-semibold">1294</h1>
                <div className="w-4 h-4 background"/>
                <p className="font-League text-base">Delivered Packages</p>
             </div>
             <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-5xl font-semibold">3594</h1>
                <div className="w-4 h-4 background"/>
                <p className="font-League text-base">Satisfied Clients</p>
             </div>
          </div>
      </div>
    </>
  );
};

export default About;
