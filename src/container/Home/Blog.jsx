import { Tech, broker, business } from "../../assets/images";
import { BlogCard } from "../../components";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    navigate("/blog");
  };

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full lg:w-[948px] h-full mx-auto flex flex-col items-center justify-between gap-10 sm:gap-14 py-20 px-7 xl:px-0 ">
          <div className="flex flex-col items-center justify-center gap-2 font-Rubik ">
            <p className="head-text">Our Blog</p>
            <h1 className="header-text">Our Latest News</h1>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-10">
            <BlogCard
              img={business}
              title="Inland freight a worthy solution for your business"
              date="08"
            />
            <BlogCard
              img={Tech}
              title="How technology can help redraw the supply chain map"
              date="12"
            />
            <BlogCard
              img={broker}
              title="Five things you should have ready for your broker"
              date="16"
            />
          </div>
          <div className="font-Krub" onClick={handleNextPage}>
            <button className="bg-black-300 text-base px-8 py-3 text-white">
              More Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
