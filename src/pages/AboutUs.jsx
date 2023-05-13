import { PricingCard } from "../components"
import { Hero, About, Service, Team, Testimonial, Question, Client } from "../container/About"


const AboutUs = () => {
  return (
    <>
    <div className="w-full h-full">
     <Hero/>
     <About/>
     <Service/>
     <Team/>
     <Testimonial/>
     <PricingCard/>
     <Question/>
     <Client/>
     
    </div>
    </>
  )
}

export default AboutUs