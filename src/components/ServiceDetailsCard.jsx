import { Ship, threeTrucks } from "../assets/images";
import { ship } from "../assets/icons";
import intro from "../assets/intro.mp4";
import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill, BsArrowRight } from "react-icons/bs";

const ServiceDetailsCard = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const HandleClick = () => {
    setPlayVideo((prevPlay) => !prevPlay)

    if(playVideo) {
        vidRef.current.pause()
    } else {
        vidRef.current.play()
    }
  }

  return (
    <>
      <div className="w-full lg:w-[1200px] h-full mx-auto flex flex-col items-center justify-center gap-10 sm:gap-14 py-10 px-7 xl:px-0 ">
        <section className="w-full  h-full flex flex-col gap-4">
          <div className="w-full h-[309px] sm:h-[409px] md:h-[509px]">
            <img src={Ship} alt="Ship" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src={ship}
                alt="Ship"
                className="w-7 h-7 md:w-8 md:h-8 object-cover"
              />
              <h1 className="font-Rubik font-semibold text-xl md:text-3xl text-black-200 ">
                Sea Transport Services
              </h1>
            </div>
            <p className="para">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
            <p className="para">
              Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
              esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
              fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et
              iusto odio dignissimos ducimus, qui blanditiis praesentium
              voluptatum deleniti atque corrupti, quos dolores et quas molestias
              excepturi sint, obcaecati cupiditate non provident, similique sunt
              in culpa, qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio.
            </p>
          </div>
        </section>
        <section className="w-full h-full flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="w-full sm:max-w-md flex flex-col gap-4 items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="header-text">Benefit of Service</h1>
              <p className="para">
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                santium doloremque laudantium, totam rem quae ab illo inventore
                veritatis.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
                Clearance and compliance service
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
                Saving Time to Deal with commodo iaculis
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
                Automate your business elis tristique
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <BsArrowRight />
              <p className="text-black-200 text-base">
                Saving Time to Deal with commodo iaculis
              </p>
            </div>
          </div>
          <div className="sm:w-[510px] sm:h-[320px] md:w-[620px] md:h-[376px]">
            <img src={threeTrucks} alt="" />
          </div>
        </section>
        <section className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-20">
          <div className="w-full h-full sm:w-[510px] sm:h-[320px] md:w-[620px] md:h-[376px] lg:w-[520px] xl:w-[600px] relative">
            <video
              src={intro}
              ref={vidRef}
              type="video/mp4"
              loop
              controls={false}
              muted
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute inset-0 flex items-center justify-center ">
                <div className="text-white border-2 border-white p-1 rounded-full cursor-pointer" onClick={HandleClick}>
              {playVideo ? (
                <BsPauseFill className="text-black bg-white border-2 border-white rounded-full w-14 h-14 p-3" />
              ) : (
                <BsFillPlayFill className="text-black bg-white border-2 border-white rounded-full w-14 h-14 p-3" />
              )}
                </div>
            </div>
          </div>
          <div className="w-full sm:max-w-md lg:max-w-sm xl:max-w-md flex flex-col gap-4 items-start justify-start">
             <h1 className="header-text">How It Works</h1>
             <p className="para">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium.</p>
             <p className="para">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetailsCard;
