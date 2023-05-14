import { HeroCard } from "../components"
import { ProjectDetailsBanner } from '../assets/images'

const ProjectDetails = () => {
  return (
    <>
    <div className="w-full h-full">
    <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
         <HeroCard img={ProjectDetailsBanner} para="Warehouse Transportation" header="Air Cargo Transportation"/>
      </div>
      <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col">

      </div>
    </div>
    </>
  )
}

export default ProjectDetails