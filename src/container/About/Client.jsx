import { client1, client2, client3, client4 } from "../../assets/images";

const Client = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <section className="w-full xl:w-[1200x] h-full flex flex-wrap items-end justify-center py-20 px-7 xl:px-0">
          <img
            src={client1}
            alt="Client-1 logo"
            className="w-[299px] h-[230px] object-contain"
          />
          <img
            src={client2}
            alt="Client-2 logo"
            className="w-w-[299px] h-[230px] object-contain"
          />
          <img
            src={client3}
            alt="Client-3 logo"
            className="w-w-[299px] h-[230px] object-contain "
          />
          <img
            src={client4}
            alt="Client-4 logo"
            className="w-w-[299px] h-[230px] object-contain"
          />
        </section>
      </div>
    </>
  );
};

export default Client;
