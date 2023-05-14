import { useNavigate } from "react-router-dom";
import { Flight, Truck, ship, warehouse } from "../assets/icons";
import { customer, project } from "../assets/images";
import { ServiceCard } from "../components";

const Service = () => {
  const navigate = useNavigate();

  const HandleClick = (destination) => {
    navigate(destination);
  };

  return (
    <>
      <div className="w-full h-full bg-[#F4F4F4]">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col items-center justify-around gap-10 sm:gap-14 py-20 px-7 xl:px-0">
          <section className="flex flex-col justify-center items-center gap-5 font-Rubik">
            <p className="head-text">What We Do</p>
            <h1 className="header-text">Our Logistics Services</h1>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            <ServiceCard
              destination="/services-details"
              img={ship}
              title="Sea Transport Services"
              onClick={HandleClick}
            />
            <ServiceCard img={warehouse} title="Warehousing Services" />
            <ServiceCard img={Flight} title="Air Fright Services" />
            <ServiceCard img={project} title="Project & Exhibition" />
            <ServiceCard img={Truck} title="Local Shipping Services" />
            <ServiceCard img={customer} title="Customer Clearance" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Service;
