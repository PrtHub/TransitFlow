import { Truck } from "../../assets/images";

const About = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col lg:flex-row items-center lg:items-start justify-start px-10 py-20 gap-20 ">
        <div className="w-full h-full sm:w-[600px] sm:h-[380px] lg:w-[720px] lg:h-[479px] ">
          <img src={Truck} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="w-full max-w-[500px] flex flex-col items-start justify-start gap-4 ">
          <p className="head-text">About us</p>
          <h1 className="header-text">Our Company Overview</h1>
          <p className="para">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="flex items-center gap-2">
            <button className="text-white font-Krub text-sm md:text-base font-medium bg-dark-yellow-100 px-6 py-3">
              Our Approch
            </button>
            <button className="text-black-200 font-Krub text-sm md:text-base font-medium  bg-[#F4F4F4]   px-6 py-3">
              Our Approch
            </button>
            <button className="text-black-200 font-Krub text-sm md:text-base font-medium bg-[#F4F4F4] px-6 py-3">
              Our Approch
            </button>
          </div>
          <p className="para">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>
          <button className="text-white font-Krub text-sm md:text-base font-medium bg-black-300 px-6 py-3">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
