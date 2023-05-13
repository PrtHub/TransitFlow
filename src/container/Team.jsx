import { TeamCard } from "../components";
import { Jessca, Tylor, kathleen } from "../assets/images";

const Team = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col justify-center items-center gap-10 py-20 px-7 xl:px-0">
          <div className="flex flex-col justify-center items-center gap-5 font-Rubik">
            <p className="head-text">
              The Transporters
            </p>
            <h1 className="header-text">
              Meet Expert Team
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-14">
             <TeamCard img={Jessca} name="Jessca Arow" job="Designer"/>
             <TeamCard img={kathleen} name="Kathleen Smith" job="Designer"/>
             <TeamCard img={Tylor} name="Rebecca Tylor" job="Designer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
