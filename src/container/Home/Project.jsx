import { ProjectCard } from "../../components";
import { one, two, three, four, five } from "../../assets/images";

const Project = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col items-center justify-center mt-20 gap-10">
        <h1 className="header-text">Transporting Across The World</h1>
        <section className="flex flex-row flex-wrap items-center justify-center gap-10 z-10">
          <ProjectCard
            img={one}
            title="Liquid Transportation"
            desc="Premium Tankers"
          />
          <ProjectCard
            img={two}
            title="Packaging Solutions"
            desc="Warehouse Management"
          />
          <ProjectCard
            img={three}
            title="Contract Logistics"
            desc="Road Transportation"
          />
          <ProjectCard
            img={four}
            title="Warehouse & Distribution"
            desc="Large Warehouse"
          />
          <ProjectCard
            img={five}
            title="Specialized Transport"
            desc="Ocean Transports"
          />
        </section>
        <section className="z-0 -mt-32 background w-full h-72">
          <div className="w-full h-full flex items-center justify-center mt-6">
            <button className="bg-black-300 px-6 py-3 text-white">
              More work
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
