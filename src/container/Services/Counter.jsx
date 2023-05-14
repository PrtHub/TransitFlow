const Counter = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row  items-center justify-between gap-10 px-10 py-5 font-Rubik">
      <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-black-200">
          24
          </h1>
          <div className="w-4 h-4 background" />
          <p className="font-League text-sm sm:text-base">Our Location</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-black-200">
            1294
          </h1>
          <div className="w-4 h-4 background" />
          <p className="font-League text-sm sm:text-base">Delivered Packages</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-black-200">
            3594
          </h1>
          <div className="w-4 h-4 background" />
          <p className="font-League text-sm sm:text-base">Satisfied Clients</p>
        </div>
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-black-200">
            247+
          </h1>
          <div className="w-4 h-4 background" />
          <p className="font-League text-sm sm:text-base">Owned Vehicles</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
