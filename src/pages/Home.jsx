import { port } from "../assets/images"
import {About, Blog, Choose, Contact, Hero, Project, Service, Team, Testimonial } from "../container/Home"


const Home = () => {
  return (
    <>
    <div className="w-full h-full">
      <Hero/>
      <Service/>
      <About/>
      <Project/>
      <Testimonial/>
      <Choose/>
      <Team/>
      <Contact/>
      <Blog/>
      <section className="w-full h-full">
         <img src={port} alt="port" className="w-full h-full object-contain" />
      </section>
    </div>
    </>
  )
}

export default Home