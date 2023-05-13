import { AboutBg, Air } from "../../assets/images";
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
            <p className="head-text">
              Why us
            </p>
            <h1 className="header-text">
              We provide full range global logistics solution
            </h1>
            <p className="para">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.{" "}
            </p>
            <p className="para">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="flex items-center justify-start gap-2 mt-2">
              <BsBox className="icon" />
              <p className="icon-text">
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 mt-2">
              <BiMoney className="icon" />
              <p className="icon-text">
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
                <h1 className="text-3xl md:text-5xl font-semibold text-black-200">1294</h1>
                <div className="w-4 h-4 background"/>
                <p className="font-League text-base">Delivered Packages</p>
             </div>
             <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-5xl font-semibold text-black-200">3594</h1>
                <div className="w-4 h-4 background"/>
                <p className="font-League text-base">Satisfied Clients</p>
             </div>
          </div>
      </div>
    </>
  );
};

export default About;
