import { HeroCard } from "../components"
import { ProjectDetailsBanner } from '../assets/images'
import ProjectDeatailsCard from "../components/ProjectDeatailsCard"

const ProjectDetails = () => {
  return (
    <>
    <div className="w-full h-full">
    <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
         <HeroCard img={ProjectDetailsBanner} para="Warehouse Transportation" header="Air Cargo Transportation"/>
      </section>
      <section className="w-full xl:w-[1200px] h-full mx-auto flex flex-col justify-start items-center gap-20 px-7 xl:px-0 py-20">
         <ProjectDeatailsCard/>
      </section>
    </div>
    </>
  )
}

export default ProjectDetails