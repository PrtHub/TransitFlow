

const PricingCard = () => {
  return (
    <>
     <div className="w-full h-full bg-white">
       <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col justify-center items-center gap-10 py-20 px-7 xl:px-0">
         <div className="flex flex-col justify-center items-center gap-5 font-Rubik">
            <p className="head-text">
               Pricing
            </p>
            <h1 className="header-text">
              Our Best Pricing
            </h1>
          </div>
          
          <div className="w-full h-full flex flex-wrap flex-col md:flex-row justify-center gap-10">
              <div className="w-[360px] h-full bg-[#F4F4F4] flex flex-col justify-center items-center p-8 gap-8">
                <div className="flex flex-col items-center justify-center gap-4 r">
                 <h3 className="font-Rubik font-semibold text-3xl text-black-200 ">Basic</h3>
                 <h1 className="font-Rubik font-medium text-7xl text-black-200">$39<span className="text-sm font-light">/month</span></h1>
                </div>
                 <div className="w-full flex flex-col items-center justify-center gap-4 border-y-[1px] border-[#D6D6D6] py-4">
                  <p className="font-Rubik text-black-200 text-lg font-normal ">Single Truck</p>
                  <p className="w-full text-center font-Rubik text-black-200 text-lg font-normal border-t-[1px] border-[#D6D6D6] pt-4">Full Insurance</p>
                  <p className="w-full text-center font-Rubik text-black-200 text-lg font-normal border-t-[1px] border-[#D6D6D6] pt-4">500 Km</p>
                  <p className="w-full text-center font-Rubik text-black-200 text-lg font-normal border-t-[1px] border-[#D6D6D6] pt-4">Real-time rate shopping</p>
                 </div>
                 <button className="bg-black-300 px-8 py-4 text-base text-white font-Krub">Choose Plan</button>
              </div>
          </div>
       </div>
     </div>
    </>
  )
}

export default PricingCard