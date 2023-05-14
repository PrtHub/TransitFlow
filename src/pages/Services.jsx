import { Counter, Hero, Service, Testimonial, Work } from "../container/Services"


const Services = () => {
  return (
    <>
    <div className="w-full h-full">
      <Hero/>
      <Service/>
      <Work/>
      <Testimonial/>
      <Counter/>
    </div>
    </>
  )
}

export default Services