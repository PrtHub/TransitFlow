import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { client1, client2, client3, client4 } from "../../assets/images";

const Contact = () => {
  return (
    <>
      <div className="w-full h-full bg-black-300">
        <div className="w-full xl:w-[1200px] h-full flex flex-col items-center justify-between mx-auto gap-10 sm:gap-14 py-20 px-7 xl:px-0">
          <div className="w-full h-full flex flex-col md:flex-row justify-around items-start gap-10">
            <div className="w-full flex flex-col items-start justify-between gap-5 ">
              <section className="max-w-[353px] flex flex-col items-start justify-start gap-2 text-white">
                <p className="text-xs font-Rubik font-normal border-l-4 border-l-dark-yellow-200 px-2">
                  Contact
                </p>
                <h1 className="font-Rubik text-2xl md:text-xl lg:text-3xl font-semibold">
                  Get in touch with us
                </h1>
                <p className="para">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.{" "}
                </p>
              </section>
              <section className="flex flex-col items-start justify-between font-Krub gap-9">
                <div className="flex items-center justify-start gap-2 lg:gap-3">
                  <AiOutlineMail className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200" />
                  <div className="flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm">
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2 lg:gap-3">
                  <IoCallOutline className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200" />
                  <div className="flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm">
                    <p>Call us</p>
                    <p>(00) 112 365 489</p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2 lg:gap-3">
                  <AiOutlineClockCircle className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200" />
                  <div className="flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm">
                    <p>Mon - Sat 9.00 - 18.00</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </section>
            </div>

            <section className="w-full flex items-center md:items-start flex-col  justify-center gap-8 font-League">
              <form className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal"
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal"
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City*"
                  className="w-full border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal"
                />
              </form>
              <textarea
                name="textarea"
                id="textarea"
                placeholder="Your Message"
                className="w-full h-32 border-[1px] border-[#4E5683] bg-transparent outline-none placeholder:text-white text-white px-5 py-3 font-normal"
              ></textarea>
              <button
                className=" background text-[#23212A] font-Krub font-medium text-base px-5 py-3
                "
              >
                Submit Message{" "}
              </button>
            </section>
          </div>

          <section className="w-full  flex flex-wrap items-end justify-center">
            <img
              src={client1}
              alt=""
              className="w-[299px] h-[230px] object-contain"
            />
            <img
              src={client2}
              alt=""
              className="w-w-[299px] h-[230px] object-contain"
            />
            <img
              src={client3}
              alt=""
              className="w-w-[299px] h-[230px] object-contain "
            />
            <img
              src={client4}
              alt=""
              className="w-w-[299px] h-[230px] object-contain"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
