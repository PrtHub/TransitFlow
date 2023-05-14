import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Evergreen } from "../assets/images";

const BlogSingleCard = () => {
  return (
    <>
      <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col lg:flex-row justify-between  items-center lg:items-start gap-10 px-7 xl:px-0 py-20">
        <section className="w-full sm:max-w-xl h-full flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col items-start justify-start gap-2">
            <h1 className="header-text">Your Logistics Solutions</h1>
            <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
              feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc.
              Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
              quis, porttitor leo Fusce lectus ex pretium[...]
            </p>
          </div>
          <div className="w-full h-full bg-black-300 p-8">
            <p className="text-white font-Rubik italic text-base font-normal">
              “Digitization within transport and logistics means seamless
              service to our customers, visibility in the supply chain, and
              driving a more efficient business.”
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-start gap-2">
            <h1 className="header-text">
              Safest Logistics Solutions Provider With Integrity
            </h1>
            <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
              attempus.Phasellus at quam hendrerit semper David Warner nunc.
              Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
              quis, porttitor leo Fusce lectus ex pretium[...]
            </p>
            <img src={Evergreen} alt="Ship" className="w-full h-full mt-2" />
            <p className="w-full text-center text-light-gray font-Krub font-medium">
              The Cargo Ship
            </p>
            <p className="para mt-2">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
              attempus.Phasellus at quam hendrerit semper David Warner nunc.
              Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
              quis, porttitor leo Fusce lectus ex pretium.
            </p>
            <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
              feugiat tempus Phasellus atquam.
            </p>
          </div>
          <div className="w-full flex justify-between items-center gap-10 mt-4">
            <div className="flex items-center justify-center gap-2">
              <AiOutlineInstagram className="w-6 h-6  cursor-pointer" />
              <AiFillFacebook className="w-6 h-6  cursor-pointer" />
              <AiOutlineTwitter className="w-6 h-6  cursor-pointer" />
              <AiFillLinkedin className="w-6 h-6  cursor-pointer" />
            </div>
            <div className="">
                <p className="text-light-gray font-medium text-sm">Category : Shipping</p>
            </div>
          </div>
        </section>
        <section className="w-[384px] h-full hidden lg:flex flex-col items-start justify-start gap-20">
          <div className="w-full h-full bg-light-gray-100 p-8 flex flex-col items-start gap-4">
            <h1 className="text-black-200 text-lg font-semibold">Categories</h1>
            <div className="w-full h-full flex items-center justify-between ">
              <h3 className="text-light-gray font-medium text-sm">Shopping</h3>
              <p className="text-black-200 text-base font-medium">(3)</p>
            </div>
            <div className="w-full h-full flex items-center justify-between ">
              <h3 className="text-light-gray font-medium text-sm">Service</h3>
              <p className="text-black-200 text-base font-medium">(5)</p>
            </div>
            <div className="w-full h-full flex items-center justify-between ">
              <h3 className="text-light-gray font-medium text-sm">Transport</h3>
              <p className="text-black-200 text-base font-medium">(2)</p>
            </div>
            <div className="w-full h-full flex items-center justify-between ">
              <h3 className="text-light-gray font-medium text-sm">Warehouse</h3>
              <p className="text-black-200 text-base font-medium">(2)</p>
            </div>
            <div className="w-full h-full flex items-center justify-between ">
              <h3 className="text-light-gray font-medium text-sm">
                Transport industries
              </h3>
              <p className="text-black-200 text-base font-medium">(5)</p>
            </div>
          </div>
          <div className="w-full h-full bg-light-gray-100 p-8 flex flex-col items-start gap-4">
            <h1 className="text-black-200 font-semibold text-lg font-Rubik">
              How can we help you?
            </h1>
            <p className="para">
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
              feugiat tempus Phasellus atquam.
            </p>
            <button className="background px-6 py-3 text-black-200 text-sm font-medium">
              Contact
            </button>
          </div>
          <div className="w-full h-full bg-black-300 p-8 flex flex-col items-start gap-4">
            <h2 className="text-base text-white font-Rubik font-semibold border-l-4 border-l-[#FFB629] px-2">
              Get in Touch
            </h2>
            <div className="flex flex-col items-start font-Rubik font-normal text-white">
              <p>Need help?</p>
              <p>(00) 112 365 489</p>
            </div>
            <div className="flex flex-col items-start font-Rubik font-normal text-white">
              <h2>Email</h2>
              <p>contact@logistics.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogSingleCard;
