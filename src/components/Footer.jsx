import { IoCallOutline } from "react-icons/io5";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Logo } from "../assets/icons";


const Footer = () => {
  return (
    <>
      <Footer className="w-full h-full bg-black-300">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col items-start  gap-10 sm:gap-14 py-10 px-7 xl:px-0">
          <section className="flex items-start justify-start ">
            <img src={Logo} alt="" />
          </section>
          <section className="w-full flex justify-between items-start flex-col md:flex-row gap-10">
            <div className="max-w-[300px] flex flex-col items-start justify-start gap-4">
              <p className="font-Krub text-[#E8E8E8] text-base">
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </p>
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
            </div>

            <ul className="flex flex-col items-start justify-start text-white text-base gap-4 font-Krub">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Project</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <ul className="flex flex-col items-start justify-start text-white text-base gap-4 font-Krub">
              <li>Style Guide</li>
              <li>Chalenging</li>
              <li>Licenses</li>
              <li>Protected</li>
              <li>Not Found</li>
            </ul>

            <div className="flex flex-col items-start gap-4">
              <input
                type="email"
                placeholder="Email here"
                className="w-[310px] md:w-[200px] lg:w-[310px] px-3 py-4 bg-transparent border-[1px] border-[#4E5683] outline-none text-white placeholder:text-white"
              />
              <div className="flex items-center justify-between gap-2">
                <button className="background py-4 px-6 md:px-2 md:py-2 lg:px-6 lg:py-4 font-Krub font-medium md:text-xs lg:text-base">
                  Send Now
                </button>
                <div className="text-white flex items-center gap-4 md:gap-2 lg:gap-4">
                <AiOutlineInstagram className="w-6 h-6 md:4 md:h-4 lg:w-6 lg:h-6 cursor-pointer" />
                <AiFillFacebook className="w-6 h-6 md:4 md:h-4 lg:w-6 lg:h-6  cursor-pointer" />
                <AiOutlineTwitter className="w-6 h-6 md:4 md:h-4 lg:w-6 lg:h-6cursor-pointer" />
                <AiFillLinkedin className="w-6 h-6 md:4 md:h-4 lg:w-6 lg:h-6 cursor-pointer" />
                </div>
              </div>
            </div>
          </section>
     
          <section className="w-full flex flex-col-reverse md:flex-row border-t-[1px] border-t-[#4E5683]  items-center justify-between gap-5 font-Krub pt-10">
            <p className="text-white font-medium text-sm">Copyright ©TransitFlow 2023</p>
            <ul className="flex items-center justify-center gap-5 text-[#8388A7] text-sm">
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>Password</li>
            </ul>
          </section>
        </div>
      </Footer>
    </>
  );
};

export default Footer;
