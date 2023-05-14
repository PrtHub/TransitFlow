import { care, safety, ware } from "../../assets/icons";
import { work } from "../../assets/images";

const Work = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col justify-center items-center gap-10 py-20 px-7 xl:px-0">
          <section className="flex flex-col justify-center items-center gap-5 font-Rubik">
            <p className="head-text">Our Goodness</p>
            <h1 className="header-text">How We Works</h1>
          </section>

          <section className="w-full h-full flex flex-col lg:flex-row items-center lg:items-center justify-start gap-20">
            <div className="w-full h-full sm:w-[600px] sm:h-[380px] lg:w-[720px] lg:h-[479px] ">
              <img src={work} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start justify-start gap-10">
            <section className="flex items-start justify-start gap-4">
              <img
                src={ware}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl text-black-200">
                Warehousing Services
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking 
                </p>
              </div>
            </section>
            <section className="flex items-start justify-start gap-4">
              <img
                src={safety}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl text-black-200">
                Safety & Quality
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking 
                </p>
              </div>
            </section>
            <section className="flex items-start justify-start gap-4">
              <img
                src={care}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl text-black-200">
                Care for Environment
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking 
                </p>
              </div>
            </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Work;
