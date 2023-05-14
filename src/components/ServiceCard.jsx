/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ img, title, destination }) => {
  return (
    <>
      <div className="flex flex-row sm:flex-col items-start justify-start gap-4">
        <img
          src={img}
          alt="ship"
          className="w-7 h-7 md:w-8 md:h-8 object-cover"
        />
        <section className="flex flex-col items-start justify-start gap-1">
          <Link
            to={destination}
            className="font-Rubik text-xl md:text-2xl text-black-200 hover:text-dark-yellow-100 cursor-pointer transition-all duration-200"
          >
            {title}
          </Link>
          <p className="font-Krub text-xs md:text-sm max-w-[270px] text-[#666C89]">
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </section>
      </div>
    </>
  );
};

export default ServiceCard;
