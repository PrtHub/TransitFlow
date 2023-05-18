import { Banner } from "../../assets/images";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[450px] sm:h-[550px] md:h-[700px] z-0 relative">
        <section className="w-full h-full">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
        </section>

        <section className="w-full h-full font-Rubik text-white flex flex-col items-start  justify-start gap-2 md:gap-3 absolute top-44 sm:top-64 md:top-72 lg:top-64 left-5 sm:left-10 md:left-10 lg:left-20 xl:left-40  2xl:left-96">
          <p className="text-[10px] sm:text-xs bg-[#041C37] bg-opacity-50 px-1 border-l-4 border-l-dark-yellow-200">
            Logistics & Supply Chain Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Your Gateway <br /> to any Destination <br /> in the World
          </h1>
          <p className="max-w-xs md:max-w-xl text-xs md:text-sm">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>
          <button className="background text-xs sm:text-sm text-black px-5 py-3 mt-2">Explore More</button>
        </section>
      </div>
    </>
  );
};

export default Hero;

//