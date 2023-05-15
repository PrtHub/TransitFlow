import { useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/icons";

const Navbar = () => {
  const location = useLocation();
  const [openPage, setOpenPage] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const loactionPath = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <nav className="w-full h-full ">
        <div className="w-full xl:w-[1200px] h-full mx-auto flex items-center justify-between  px-7 xl:px-0 gap-9 font-Krub">
          {/* desktop */}
          <ul className=" h-full hidden md:flex items-center gap-8 text-white font-semibold text-sm lg:text-base">
            <li>
              <Link
                to="/"
                className={` ${
                  loactionPath("/") &&
                  "border-b-2 border-b-white pb-[29px] lg:pb-[27px]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={` ${
                  loactionPath("/aboutus") &&
                  "border-b-2 border-b-white pb-[29px] lg:pb-[27px]"
                }`}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <a
                className="flex items-center justify-center gap-1 cursor-pointer"
                onClick={() => setOpenPage(!openPage)}
              >
                Page
                <AiOutlineDown className="w-3 h-3" />
              </a>
              {openPage && (
                <ul className="absolute top-6 w-24 h-fit bg-[#091242] bg-opacity-25 mt-7 p-3 flex flex-col  gap-2">
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/projects"
                className={` ${
                  loactionPath("/projects") &&
                  "border-b-2 border-b-white pb-[29px] lg:pb-[27px]"
                }`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={` ${
                  loactionPath("/contact") &&
                  "border-b-2 border-b-white pb-[29px] lg:pb-[27px]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* mobile-menu */}
          <section className="flex md:hidden items-center gap-2">
            {toggleMenu ? (
              <AiOutlineClose
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <AiOutlineMenu
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="bg-black-300 fixed top-0 left-0 w-full h-fit">
                <AiOutlineClose
                  className="w-6 h-6 text-white cursor-pointer absolute top-5 right-5"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="z-10 text-white flex flex-col items-center justify-center gap-8 p-8">
                  <li className="text-lg font-medium">
                    <Link to="/" className={`${loactionPath("/") && "text-light-gray"} `}>
                      Home
                    </Link>
                  </li>
                  <li  className="text-lg font-medium">
                    <Link
                      to="/aboutus"
                      className={`${loactionPath("/aboutus") && "text-light-gray"}`}
                    >
                      About
                    </Link>
                  </li>
                  <li  className="text-lg font-medium">
                    <Link
                      to="/services"
                      className={`${loactionPath("/services") && "text-light-gray"}`}
                    >
                      Services
                    </Link>
                  </li>
                  <li  className="text-lg font-medium">
                    <Link
                      to="/blog"
                      className={`${loactionPath("/blog") && "text-light-gray"}`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li  className="text-lg font-medium">
                    <Link
                      to="/projects"
                      className={`${loactionPath("/projects") && "text-light-gray"}`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li  className="text-lg font-medium">
                    <Link
                      to="/team"
                      className={`${loactionPath("/team") && "text-light-gray"}`}
                    >
                      Team
                    </Link>
                  </li>
                  <li className="text-lg font-medium">
                    <Link
                      to="/pricing"
                      className={`${loactionPath("/pricing") && "text-light-gray"}`}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="text-lg font-medium">
                    <Link
                      to="/contact"
                      className={`${loactionPath("/contact") && "text-light-gray"}`}
                    >
                      Contact
                    </Link>
                  </li>
                  <div className="flex items-center justify-center gap-4">
                    <AiOutlineInstagram className="w-6 h-6 text-white cursor-pointer" />
                    <AiFillFacebook className="w-6 h-6 text-white cursor-pointer" />
                    <AiOutlineTwitter className="w-6 h-6 text-white cursor-pointer" />
                    <AiFillLinkedin className="w-6 h-6 text-white cursor-pointer" />
                  </div>
                </ul>
              </div>
            )}
            <div className="flex items-center justify-center w-40 h-11 ">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </section>

          <section className=" h-full hidden sm:flex items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-2">
              <AiOutlineInstagram className="w-5 h-5 text-white" />
              <AiFillFacebook className="w-5 h-5 text-white" />
              <AiOutlineTwitter className="w-5 h-5 text-white" />
              <AiFillLinkedin className="w-5 h-5 text-white" />
            </div>
            <div className="h-full">
              <button className="bg-white h-full px-3 lg:px-5 text-[#23212A] outline-none border-none text-sm lg:text-base">
                Request quote
              </button>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
