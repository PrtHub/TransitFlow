/* eslint-disable react/prop-types */


const ProjectCard = ({ img, title, desc }) => {
  return (
    <>
    <div className="w-80 h-96 relative">
        <div className="w-full h-full">
       <img src={img} alt="one" className="w-full h-full"/>
        </div>
       <div className="absolute bottom-1 font-Rubik p-2">
        <h3 className="font-medium text-xl text-white">{title}</h3>
        <p className="font-medium text-base text-[#FFB629]">{desc}</p>
       </div>
    </div>
    </>
  )
}

export default ProjectCard