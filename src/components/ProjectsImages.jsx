/* eslint-disable react/prop-types */

import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectsImages = ({ img }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full h-full sm:w-[380px] sm:h-[346px] flex items-center justify-center relative">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
          onMouseOver={() => setShow(!show)}
        />
        {show && (
          <div className="w-[322px] h-[283px] m-auto bg-black-200 bg-opacity-90 z-10 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-Krub cursor-pointer">
            <BsBoxArrowUpRight className="w-6 h-6"/>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsImages;
