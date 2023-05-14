/* eslint-disable react/prop-types */

const HeroCard = ({ img, header, para, span }) => {
  return (
    <>
      <section className="w-full h-full ">
        <img src={img} alt="about" className="w-full h-full object-cover" />
      </section>
      <section className="w-full  h-full flex flex-col items-start justify-start gap-2 absolute top-36 left-8 sm:top-36 sm:left-8 md:top-40 md:left-5 lg:top-40 lg:left-8 xl:top-44 xl:left-32 2xl:left-80 ">
        <p className="font-Rubik text-white text-xs font-normal border-l-4 border-l-dark-yellow-200 px-2">
          {para}
        </p>
        <h1 className="max-w-xs sm:max-w-2xl font-Rubik text-2xl md:text-3xl lg:text-4xl  text-white font-bold">
          {header} <br /> {span}
        </h1>
      </section>
    </>
  );
};

export default HeroCard;
