import { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { faq } from "../assets/images";
import { IoCallOutline } from "react-icons/io5";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    {
      id: 1,
      question: "How can I pay for your logistics services?",
      answer:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: 2,
      question: "What payment methods are supported?",
      answer:
        "Our logistics service supports various payment methods, including bank transfers, credit/debit cards, EFT, online payment gateways (such as PayPal and Stripe), and Cash on Delivery (COD) for eligible services.",
    },
    {
      id: 3,
      question: "What options for logistics plans are available?",
      answer:
        "Our logistics service offers standard and express delivery options to cater to different shipment needs, including same-day or next-day delivery for time-sensitive packages.",
    },
    {
      id: 4,
      question: "Can i specify a delivery date when ordering?",
      answer:
        "Yes, you can typically specify a desired delivery date when placing an order with our logistics service to ensure your package arrives on a specific day that suits your needs.",
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-white flex lg:justify-end">
        <div
          className="w-full xl:w-[1500x] h-full flex flex-col-reverse lg:flex-row items-center 
        justify-between gap-20 py-20 px-7 xl:px-0"
        >
          <div className="w-full h-full flex flex-col justify-between items-center gap-10">
            <section className="w-full sm:w-[500px] max-w-[500px] h-full flex flex-col justify-start items-start gap-5 font-Rubik">
              <p className="head-text">FAQ</p>
              <h1 className="header-text">
                Frequently Asked <br />
                Questions
              </h1>
            </section>
            {faqItems.map((item, index) => (
              <section
                key={item.id}
                className="w-full sm:w-[500px] max-w-[500px] h-full flex flex-col gap-2 items-center justify-start"
              >
                <div className="w-full h-full flex justify-between items-center">
                  <h3 className="font-Rubik font-normal text-lg text-black-200 cursor-pointer">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <AiOutlineDown
                      className="text-[#FFB82B] text-lg font-bold cursor-pointer"
                      onClick={() => handleItemClick(index)}
                    />
                  ) : (
                    <AiOutlineRight
                      className="text-black-200 text-lg font-bold  cursor-pointer"
                      onClick={() => handleItemClick(index)}
                    />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-2">
                    <p className="para">
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive.
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="w-full h-full sm:w-[520px] sm:h-[400px] md:w-[620px] md:h-[449px] lg:w-full lg:h-full relative">
            <img src={faq} alt="" className="w-full h-full object-cover" />

            <section className="sm:w-[270px] sm:h-[230px] md:w-[300px] md:h-[250px]  lg:w-[260px] lg:h-[230px] xl:w-[300px] xl:h-[250px] bg-black-300 absolute top-0 bottom-0 -left-20  my-auto p-6 hidden sm:flex items-start justify-center flex-col gap-2">
              <p className=" text-xs text-white font-Rubik font-normal border-l-4 border-l-dark-yellow-200 px-2">
                Let's Talk
              </p>
              <h1 className="text-white sm:text-base xl:text-lg font-Rubik font-medium">
                You need any help? get free consultation
              </h1>
              <div className="flex items-center justify-start gap-2 lg:gap-3">
                <IoCallOutline className="bg-[#273270] bg-opacity-40 rounded-full p-2 w-9 h-9 xl:p-3 xl:w-11 xl:h-11 text-white" />
                <div className="flex flex-col items-start justify-start text-white font-normal text-xs xl:text-sm">
                  <p>Have a question?</p>
                  <p>(00) 112 365 489</p>
                </div>
              </div>
              <button className="background text-[#23212A] text-sm px-4 py-2 mt-2">
                Contact Us
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
