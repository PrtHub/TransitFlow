/* eslint-disable react/prop-types */


const ServiceCard = ({img, title}) => {
  return (
    <>
      <div className="flex flex-row sm:flex-col items-start justify-start gap-4">
        <img
          src={img}
          alt="ship"
          className="w-7 h-7 md:w-8 md:h-8 object-cover"
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <h2 className="font-Rubik text-xl md:text-2xl text-black-200 hover:text-dark-yellow-100 cursor-pointer transition-all duration-200">
            {title}
          </h2>
          <p className="font-Krub text-xs md:text-sm max-w-[270px] text-[#666C89]">
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
