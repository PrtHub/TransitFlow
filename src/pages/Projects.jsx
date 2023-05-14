import { ProjectBanner, project1, project2, project3, project4, project5, project6 } from "../assets/images"
import { HeroCard, ProjectsImages } from "../components"
import Counter from "../container/Services/Counter"


const Projects = () => {
  return (
    <>
    <div className="w-full h-full">
    <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
         <HeroCard img={ProjectBanner} para="Gallery" header="Our Projects"/>
      </div>
      <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-row flex-wrap items-center justify-center gap-5 px-7 py-20 xl:px-0">
        <ProjectsImages img={project1}/>
        <ProjectsImages img={project2}/>
        <ProjectsImages img={project3}/>
        <ProjectsImages img={project4}/>
        <ProjectsImages img={project5}/>
        <ProjectsImages img={project6}/>
      </div>
      <div className="w-full h-full">
      <Counter/>
      </div>
    </div>
    </>
  )
}

export default Projects