import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { ContactBanner } from "../assets/images";
import { HeroCard } from "../components";
import { IoCallOutline } from "react-icons/io5";
import { Client, Question } from "../container/About";

const Contact = () => {
  return (
    <>
      <div className="w-full h-full">
        <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
          <HeroCard img={ContactBanner} para="Contact" header="Conatact Us" />
        </section>
        <section className="w-full lg:w-[948px] h-full mx-auto flex flex-col items-center justify-between gap-10 sm:gap-14 py-20 px-7 xl:px-0 ">
          <div className="w-full h-full flex flex-col items-center justify-between gap-5 bg-black-300 py-10 px-5 sm:px-20">
            <section className="flex flex-col items-center justify-center gap-2 text-white">
              <p className="text-xs font-Rubik font-normal border-l-4 border-l-dark-yellow-200 px-2">
                Contact
              </p>
              <h1 className="font-Rubik text-2xl md:text-xl lg:text-3xl font-semibold">
                Get in touch with us
              </h1>
              <p className="max-w-xl text-center font-Krub text-white text-sm sm:text-base">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.{" "}
              </p>
            </section>
            <section className="flex items-start justify-between font-Krub gap-5 sm:gap-10 mt-4">
              <div className="flex flex-col items-center justify-start gap-2 lg:gap-3">
                <AiOutlineMail className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-white" />
                <div className="text-white font-normal text-xs lg:text-sm">
                  <p>contact@logistics.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-2 lg:gap-3">
                <IoCallOutline className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-white" />
                <div className="text-white font-normal text-xs lg:text-sm">
                  <p>(00) 112 365 489</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-2 lg:gap-3">
                <AiOutlineClockCircle className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-white" />
                <div className="text-white font-normal text-xs lg:text-sm">
                  <p>Mon - Sat</p>
                </div>
              </div>
            </section>
            <section className="w-full flex items-center flex-col  justify-center gap-8 font-League">
              <form className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal text-sm sm:text-base "
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal text-sm sm:text-base "
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal text-sm sm:text-base "
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal text-sm sm:text-base "
                />
              </form>
              <textarea
                name="textarea"
                id="textarea"
                placeholder="Your Message"
                className="w-full h-32 border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal text-sm sm:text-base "
              ></textarea>
              <button
                className=" background text-[#23212A] font-Krub font-medium px-5 py-3 text-sm sm:text-base 
                "
              >
                Submit Message{" "}
              </button>
            </section>
          </div>
        </section>
        <Client/>
        <Question/>
      </div>
    </>
  );
};

export default Contact;
