import { estimate, vission } from "../assets/icons";
import {
  Jessca,
  Kane,
  Lisara,
  Ria,
  TeamBanner,
  TruckContainer,
  Tylor,
  kathleen,
} from "../assets/images";
import { HeroCard, TeamCard } from "../components";
import { Client } from "../container/About";

const OurTeam = () => {
  return (
    <>
      <div className="w-full h-full">
        <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
          <HeroCard img={TeamBanner} para="Team" header="Our Team" />
        </section>
        <section className="w-full h-full bg-white">
          <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col justify-center items-center gap-10 py-20 px-7 xl:px-0">
            <section className="flex flex-col justify-center items-center gap-5 font-Rubik">
              <p className="head-text">The Transporters</p>
              <h1 className="header-text">Meet Expert Team</h1>
            </section>
            <section className="flex flex-wrap items-center justify-center gap-14">
              <TeamCard img={Jessca} name="Jessca Arow" job="Designer" />
              <TeamCard img={kathleen} name="Kathleen Smith" job="Designer" />
              <TeamCard img={Tylor} name="Rebecca Tylor" job="Designer" />
              <TeamCard img={Ria} name="Ria Jackson" job="Operational Head" />
              <TeamCard img={Kane} name="Kane William" job="Country Head" />
              <TeamCard
                img={Lisara}
                name="Lisara Tylor"
                job="Finance Manager"
              />
            </section>
          </div>
        </section>
        <section className="w-full xl:w-[1400px] h-full mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-start gap-10 py-20 px-7 xl:px-0">
          <div className="w-full h-full sm:w-[600px] sm:h-[380px] lg:w-[720px] lg:h-[479px] ">
            <img
              src={TruckContainer}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full max-w-xs sm:max-w-lg h-full flex flex-col items-start lg:items-start justify-between gap-16">
            <section className="w-full flex flex-col items-start justify-start gap-2">
              <p className="head-text">About</p>
              <h1 className="header-text">Why Choose Us</h1>
              <p className="para">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
            </section>
            <section className="w-full h-full flex items-start justify-between gap-5">
              <div className="w-full h-full max-w-[150px] sm:max-w-[210px] flex flex-col items-start justify-start gap-2">
                <img src={vission} alt="vission" className="w-11 h-11 object-cover" />
                <h1 className="font-Rubik font-medium text-xl text text-black-200">
                  Our Vission
                </h1>
                <p className="para">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster.
                </p>
              </div>
              <div className="w-full h-full max-w-[150px] sm:max-w-[210px] flex flex-col items-start justify-start gap-2">
                <img
                  src={estimate}
                  alt="Estimate Shipping"
                  className="w-11 h-11 object-cover"
                />
                <h1 className="font-Rubik font-medium text-xl text text-black-200">
                  Estimate Shipping
                </h1>
                <p className="para">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster.
                </p>
              </div>
            </section>
          </div>
        </section>
       <Client/>
      </div>
    </>
  );
};

export default OurTeam;
