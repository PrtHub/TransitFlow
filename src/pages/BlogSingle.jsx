import { BlogSingleBanner } from "../assets/images";
import { BlogSingleCard, HeroCard } from "../components";


const BlogSingle = () => {
  return (
    <>
      <section className="w-full h-full ">
        <div className="w-full h-[310px] sm:h-[330px] lg:h-[370px] xl:h-full z-0 flex flex-col items-start justify-start relative">
          <HeroCard
            img={BlogSingleBanner}
            para="Blog"
            header="How technology can help redraw the"
            span="supply chain map"
          />
        </div>
        <div className="w-full h-full">
          <BlogSingleCard/>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
