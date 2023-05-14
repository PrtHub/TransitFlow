import { BsArrowRight, BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { project1full } from "../assets/images"
import port from '../assets/port.mp4'
import { useRef, useState } from "react";


const ProjectDeatailsCard = () => {
    const vidRef = useRef();
    const [playVideo, setPlayVideo] = useState(false);
  
    const HandleClick = () => {
      setPlayVideo((prevPlay) => !prevPlay)
  
      if(playVideo) {
          vidRef.current.pause()
      } else {
          vidRef.current.play()
      }
    }
  return (
    <>
    <div className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-10">
       <div className="w-full h-full sm:w-[590px] sm:h-[350px] md:w-[642px] md:h-[380px]">
          <img src={project1full} alt="" />
       </div>
       <div className="flex flex-col items-start justify-start gap-4 ">
          <h1 className="header-text">Project Details</h1>
          <div className="flex items-start justify-start gap-4">
            <h2 className="text-base font-Rubik font-medium ">Customer :</h2>
            <p className="text-base  font-Krub font-normal">David Warner</p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <h2 className="text-base font-Rubik font-medium ">Category  :</h2>
            <p className="text-base  font-Krub font-normal">Warehouse Transportaion</p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <h2 className="text-base font-Rubik font-medium ">Date :</h2>
            <p className="text-base  font-Krub font-normal">12 December, 2022</p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <h2 className="text-base font-Rubik font-medium ">Status :</h2>
            <p className="text-base  font-Krub font-normal">Completed</p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <h2 className="text-base font-Rubik font-medium ">Tags :</h2>
            <p className="text-base  font-Krub font-normal">Life Style Travel , Best Delivery</p>
          </div>
       </div>
    </div>

    <div className="w-full h-full flex flex-col gap-4 items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="header-text">Wharehouse Transportation</h1>
              <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
              National Customer Service Center – 24 hours a day.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
              Online shipping navigator lets you quote, book, and track shipments
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
              Your Logistics Needs Are At The Heart Of Our Business
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
              Very careful handling of valuable goods
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
              Time saving and convenient transportation services in your area
              </p>
            </div>
            </div>

            <div className="w-full h-full flex flex-col gap-4 items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="header-text">Our Project Transportation</h1>
              <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
              </p>
            </div>
            <div className="w-full h-full lg:h-[640px] relative">
            <video
              src={port}
              ref={vidRef}
              type="video/mp4"
              loop
              controls={false}
              muted
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute inset-0 flex items-center justify-center ">
                <div className="text-white border-2 border-white p-1 rounded-full cursor-pointer" onClick={HandleClick}>
              {playVideo ? (
                <BsPauseFill className="text-black bg-white border-2 border-white rounded-full w-14 h-14 p-3" />
              ) : (
                <BsFillPlayFill className="text-black bg-white border-2 border-white rounded-full w-14 h-14 p-3" />
              )}
                </div>
            </div>
          </div>
            </div>
         
    </>
  )
}

export default ProjectDeatailsCard