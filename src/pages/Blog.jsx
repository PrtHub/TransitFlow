import { useNavigate } from "react-router-dom";
import {
  BlogBanner,
  Tech,
  broker,
  business,
  driver,
  manager,
} from "../assets/images";
import { BlogCard, HeroCard } from "../components";

const Blog = () => {
  const navigate = useNavigate();
  const HandleClick = (destination) => {
    window.scrollTo(0, 0);
    navigate(destination);
  };
  return (
    <>
      <div className="w-full h-full">
        <section className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 relative">
          <HeroCard img={BlogBanner} para="Blog" header="Our Latest News" />
        </section>
        <section className="w-full h-full bg-white">
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
              <BlogCard
                img={driver}
                title="Four simple tips for becoming a healthier truck driver"
                date="28"
              />
              <BlogCard
                img={manager}
                title="What Is The Role Of A Logistics Operations Manager"
                date="30"
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
