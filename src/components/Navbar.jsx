import { useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/icons";

const Navbar = () => {
  const location = useLocation();
  const [openPage, setOpenPage] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const loactionPath = (route) => {
    if(route === location.pathname) {
     return true
    }
   }

  return (
    <>
      <div className="w-full h-full bg-[#091242] bg-opacity-25">
        <div className="w-full xl:w-[1200px] h-[78px] mx-auto flex items-center justify-between  px-7 xl:px-0 gap-9 font-Krub">

          {/* desktop */}
          <ul className=" h-full hidden md:flex items-center gap-8 text-white font-semibold text-sm lg:text-base">
            <li>
              <Link to="/" className={` ${loactionPath("/") && 'border-b-2 border-b-white pb-[29px] lg:pb-[27px]'}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={` ${loactionPath("/about") && 'border-b-2 border-b-white pb-[29px] lg:pb-[27px]'}`}>About</Link>
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
                <ul className="absolute top-6 w-20 h-12 bg-black px-2 py-1 flex flex-col  gap-2">
                  <li>
                    <Link to="/services" >Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/tech">Tech</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/projects" className={` ${loactionPath("/projects") && 'border-b-2 border-b-white pb-[29px] lg:pb-[27px]'}`}>Project</Link>
            </li>
            <li>
              <Link to="/contact" className={` ${loactionPath("/contact") && 'border-b-2 border-b-white pb-[29px] lg:pb-[27px]'}`}>Contact</Link>
            </li>
          </ul>

          {/* mobile-menu */}
          <div className="flex md:hidden items-center gap-2">
          {toggleMenu ? (
          <AiOutlineClose className="w-6 h-6 text-white cursor-pointer" onClick={() => setToggleMenu(false)}/>
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-white cursor-pointer" onClick={() => setToggleMenu(true)}/>
          )}
          { toggleMenu && (
            <ul className="absolute top-[78px] left-0 w-40 z-10 h-fit bg-[#091242] bg-opacity-25  text-white flex flex-col gap-4 items-start p-4 ">
           <li><Link to='/' className={`${loactionPath("/") && ''}`}>Home</Link></li>
           <li><Link to='/about' className={`${loactionPath("/about") && ''}`}>About</Link></li>
           <li><Link to='/services' className={`${loactionPath("/services") && ''}`}>Services</Link></li>
           <li><Link to='/blog' className={`${loactionPath("/blog") && ''}`}>Blog</Link></li>
           <li><Link to='/projects' className={`${loactionPath("/projects") && ''}`}>Projects</Link></li>
           <li><Link to='/tech' className={`${loactionPath("/tech") && ''}`}>Tech</Link></li>
           <li><Link to='/pricing' className={`${loactionPath("/pricing") && ''}`}>Pricing</Link></li>
           <li><Link to='/contact' className={`${loactionPath("/contact") && ''}`}>Contact</Link></li>
           <div className="flex items-center justify-center gap-4">
              <AiOutlineInstagram className="w-5 h-5 text-white" />
              <AiFillFacebook className="w-5 h-5 text-white" />
              <AiOutlineTwitter className="w-5 h-5 text-white" />
              <AiFillLinkedin className="w-5 h-5 text-white" />
            </div>
        </ul>
          )}
            <div className='flex items-center justify-center w-40 h-11 '>
          <img src={Logo} alt="Logo" className='w-full h-full object-contain' />
        </div>
          </div>

          <div className=" h-full hidden sm:flex items-center justify-center gap-8">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
