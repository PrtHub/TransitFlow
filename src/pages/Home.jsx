import {About, Blog, Choose, Contact, Footer, Hero, Project, Service, Team, Testimonial } from "../container"


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
      <Footer/>
    </div>
    </>
  )
}

export default Home