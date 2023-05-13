/* eslint-disable react/prop-types */
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";


const TeamCard = ({img, name, job}) => {
  return (
    <>
      <div className="w-[344px] h-[500px] bg-black-200 relative">
        <div className="w-full h-[410px]">
          <img
            src={img}
            alt="jessca"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col absolute bottom-0 left-0 ml-5 mb-5 text-white">
          <h2 className="font-Rubik font-medium text-xl">{name}</h2>
          <p className="font-Krub font-medium text-sm">{job}</p>
        </div>
        <div className="absolute right-0 bottom-[78px] background w-fit h-fit flex items-center gap-2 p-1 text-black-200">
          <AiOutlineInstagram className="w-6 h-6 cursor-pointer" />
          <AiFillFacebook className="w-6 h-6  cursor-pointer" />
          <AiOutlineTwitter className="w-6 h-6 cursor-pointer" />
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
