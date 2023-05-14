import { ServiceBanner } from "../../assets/images"
import { HeroCard } from "../../components"


const Hero = () => {
  return (
    <>
    <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
         <HeroCard img={ServiceBanner} para="Services" header="Our Logistics Service"/>
      </div>
    </>
  )
}

export default Hero