import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import {
  ProjectBanner,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets/images";
import { HeroCard, ProjectsImages } from "../components";
import Counter from "../container/Services/Counter";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = (destination) => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
    navigate(destination);
  };
  return (
    <>
      <div className="w-full h-full">
        <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
          <HeroCard img={ProjectBanner} para="Gallery" header="Our Projects" />
        </section>
        <section className="w-full xl:w-[1200px] h-full mx-auto flex flex-row flex-wrap items-center justify-center gap-5 px-7 py-20 xl:px-0">
          <ProjectsImages
            destination="/project-details"
            img={project1}
            onClick={handleClick}
          />
          <ProjectsImages img={project2} />
          <ProjectsImages img={project3} />
          <ProjectsImages img={project4} />
          <ProjectsImages img={project5} />
          <ProjectsImages img={project6} />
        </section>
        <div className="w-full h-full">
          <Counter />
        </div>
      </div>
    </>
  );
};

export default Projects;
