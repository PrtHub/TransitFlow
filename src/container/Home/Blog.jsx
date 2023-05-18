import { Tech, broker, business } from "../../assets/images";
import { BlogCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';


const Blog = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    scroll.scrollToTop({
     duration: 500,
      smooth: true
    });
    navigate("/blog");
  };
  const HandleClick = (destination) => {
    scroll.scrollToTop({
     duration: 500,
      smooth: true
    });
    navigate(destination);
  };
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full lg:w-[948px] h-full mx-auto flex flex-col items-center justify-between gap-10 sm:gap-14 py-20 px-7 xl:px-0 ">
          <section className="flex flex-col items-center justify-center gap-2 font-Rubik ">
            <p className="head-text">Our Blog</p>
            <h1 className="header-text">Our Latest News</h1>
          </section>
          <section className="w-full h-full flex flex-col items-center justify-center gap-10">
            <BlogCard
              img={business}
              title="Inland freight a worthy solution for your business"
              date="08"
            />
            <BlogCard
              destination="/blog-single"
              img={Tech}
              title="How technology can help redraw the supply chain map"
              date="12"
              onClick={HandleClick}
            />
            <BlogCard
              img={broker}
              title="Five things you should have ready for your broker"
              date="16"
            />
          </section>
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
