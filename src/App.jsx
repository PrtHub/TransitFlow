import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  AboutUs,
  Blog,
  BlogSingle,
  Contact,
  Home,
  Pricing,
  ProjectDetails,
  Projects,
  Services,
  ServicesDetails,
  OurTeam,
} from "./pages";
import { Footer, Header, Navbar } from "./components";

const App = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[1920px] mx-auto">
        <Header />
        <div className="relative w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-single" element={<BlogSingle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <div className="w-full h-[78px] absolute top-0 bg-[#091242] bg-opacity-25 z-20">
            <Navbar />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
