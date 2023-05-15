import { PriceBanner } from "../assets/images"
import { HeroCard, PricingCard } from "../components"
import Testimonial from "../container/Testimonial"


const Pricing = () => {
  return (
    <>
    <div className="w-full h-full">
    <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
          <HeroCard img={PriceBanner} para="Pricing" header="Our best Price" />
        </section>
        <PricingCard/>
        <Testimonial/>
    </div>
    </>
  )
}

export default Pricing