import { ship, Flight, warehouse, Truck } from "../../assets/icons";

const Service = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex items-start justify-around gap-10 sm:gap-14 py-20 px-7 xl:px-0">
          <div className="flex flex-col items-start justify-start gap-2 font-Rubik ">
            <p className="head-text">
              What We Do
            </p>
            <h1 className="header-text">
              Safe & Reliable <br /> Cargo Solutions
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="flex items-start justify-start gap-4">
              <img
                src={ship}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8 object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik text-xl md:text-2xl  text-black-200">
                  Sea Transport Services
                </h2>
                <p className="font-Krub text-xs md:text-sm max-w-xs text-[#666C89]">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <img
                src={warehouse}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8 object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl  text-black-200">
                  Warehousing Services
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <img
                src={Flight}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8 object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl text-black-200">
                  Air Fright Services
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <img
                src={Truck}
                alt="ship"
                className="w-7 h-7 md:w-8 md:h-8object-cover"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-Rubik  text-xl md:text-2xl text-black-200">
                  Local Shipping Services
                </h2>
                <p className=" font-Krub text-xs md:text-sm max-w-xs text-light-gray">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
