import { ServiceDetailsBanner } from "../assets/images"
import { HeroCard, ServiceDetailsCard } from "../components"


const ServicesDetails = () => {
  return (
    <>
    <div className="w-full h-full ">
    <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
         <HeroCard img={ServiceDetailsBanner} para="Services" header="Our Logistics Service"/>
      </div>
      <div className="w-full h-full">
        <ServiceDetailsCard/>
      </div>
    </div>
    </>
  )
}

export default ServicesDetails