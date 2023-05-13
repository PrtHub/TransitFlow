import { Star } from "../assets/icons";
import { smith, john, colon } from "../assets/images";

const Testimonial = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col items-start justify-between gap-10 sm:gap-14 py-20 px-7 xl:px-0">
          <div className="flex flex-col items-start justify-start gap-2 font-Rubik ">
            <p className="head-text">
              Testimonial
            </p>
            <h1 className="header-text">
              What Our Customer Say
            </h1>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row  items-center justify-center gap-10">
            <div className="w-full sm:w-[600px] h-full flex flex-col items-start justify-start gap-4 bg-[#F4F4F4] p-6 sm:p-16">
              <div className="w-full h-full flex items-center gap-2">
                <div className="w-full h-full flex items-center gap-2">
                  <img
                    src={smith}
                    alt="smith"
                    className="w-14 h-14 sm:w-20 sm:h-20"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-Rubik text-base sm:text-xl text-black-200 font-medium">
                      Kathleen Smith
                    </h1>
                    <p className="text-black-300 text-xs sm:text-sm font-medium">
                      Fuel Company
                    </p>
                  </div>
                </div>
                <div className="w-15 h-12">
                  <img
                    src={colon}
                    alt=""
                    className="w-full h-full background p-4 rounded-full"
                  />
                </div>
              </div>
              <div className="w-full h-full font-Krub text-xs sm:text-base">
                <p className="text-light-gray">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div className="flex items-start ">
                <img src={Star} alt="" className="w-32 sm:w-full sm:h-full" />
              </div>
            </div>
            <div className="w-full sm:w-[600px] h-full flex flex-col items-start justify-start gap-4 bg-black-300 p-6 sm:p-16">
              <div className="w-full h-full flex items-center gap-2">
                <div className="w-full h-full flex items-center gap-2">
                  <img
                    src={john}
                    alt="smith"
                    className="w-14 h-14 sm:w-20 sm:h-20"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-Rubik text-base sm:text-xl text-white font-medium">
                      John Martin
                    </h1>
                    <p className="text-white text-xs sm:text-sm font-medium">
                      Restoration Company
                    </p>
                  </div>
                </div>
                <div className="w-15 h-12">
                  <img
                    src={colon}
                    alt=""
                    className="w-full h-full background p-4 rounded-full"
                  />
                </div>
              </div>
              <div className="w-full h-full font-Krub  text-xs sm:text-base">
                <p className="text-white">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div className="flex items-start">
                <img src={Star} alt="" className="w-32 sm:w-full sm:h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
