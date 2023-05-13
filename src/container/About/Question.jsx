import { useState } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

const Question = () => {

  const[open, setOpen] = useState(false)

  return (
    <>
    <div className="w-full h-full bg-white">
      <div className="w-full xl:w-[1200px] h-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 py-20 px-7 xl:px-0">     
       <div className="flex flex-col justify-start items-start gap-10">
       <div className="flex flex-col justify-start items-start gap-5 font-Rubik">
            <p className="head-text">FAQ</p>
            <h1 className="header-text">Frequently Asked <br />Questions</h1>
          </div>
          <div className="w-full sm:w-[565px] max-w-[565px] h-full flex flex-col gap-2 items-start justify-start">
            <div className="w-full h-full flex justify-between items-center">
            <h3 className='font-Rubik font-normal text-lg text-black-200 cursor-pointer'>How can I pay for your logistics services?</h3>
            {
            open ? 
            ( <AiOutlineDown className='text-[#FFB82B] text-lg font-bold cursor-pointer' onClick={() => setOpen(false)}/>)
            :
           ( 
           <AiOutlineRight className='text-black-200 text-lg font-bold  cursor-pointer' onClick={() => setOpen(true)}/>
           )
            }
            </div>
           { open && (
           <div className='mt-2'>
              <p className='para'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
            </div>
           )}
          </div>

          <div className="w-full sm:w-[565px] max-w-[565px] h-full flex flex-col gap-2 items-start justify-start">
            <div className="w-full h-full flex justify-between items-center">
            <h3 className='font-Rubik font-normal text-lg text-black-200 cursor-pointer'>What payment methods are supported?</h3>
            {
            open ? 
            ( <AiOutlineDown className='text-[#FFB82B] text-lg font-bold cursor-pointer' onClick={() => setOpen(false)}/>)
            :
           ( 
           <AiOutlineRight className='text-black-200 text-lg font-bold  cursor-pointer' onClick={() => setOpen(true)}/>
           )
            }
            </div>
           { open && (
           <div className='mt-2'>
              <p className='para'>Our logistics service supports various payment methods, including bank transfers, credit/debit cards, EFT, online payment gateways (such as PayPal and Stripe), and Cash on Delivery (COD) for eligible services..</p>
            </div>
           )}
          </div>

          <div className="w-full sm:w-[565px] max-w-[565px] h-full flex flex-col gap-2 items-start justify-start">
            <div className="w-full h-full flex justify-between items-center">
            <h3 className='font-Rubik font-normal text-lg text-black-200 cursor-pointer'>What options for logistics plans are available?</h3>
            {
            open ? 
            ( <AiOutlineDown className='text-[#FFB82B] text-lg font-bold cursor-pointer' onClick={() => setOpen(false)}/>)
            :
           ( 
           <AiOutlineRight className='text-black-200 text-lg font-bold  cursor-pointer' onClick={() => setOpen(true)}/>
           )
            }
            </div>
           { open && (
           <div className='mt-2'>
              <p className='para'>Our logistics service offers standard and express delivery options to cater to different shipment needs, including same-day or next-day delivery for time-sensitive packages.</p>
            </div>
           )}
          </div>

          <div className="w-full sm:w-[565px] max-w-[565px] h-full flex flex-col gap-2 items-start justify-start">
            <div className="w-full h-full flex justify-between items-center">
            <h3 className='font-Rubik font-normal text-lg text-black-200 cursor-pointer'>Can i specify a delivery date when ordering?</h3>
            {
            open ? 
            ( <AiOutlineDown className='text-[#FFB82B] text-lg font-bold cursor-pointer' onClick={() => setOpen(false)}/>)
            :
           ( 
           <AiOutlineRight className='text-black-200 text-lg font-bold  cursor-pointer' onClick={() => setOpen(true)}/>
           )
            }
            </div>
           { open && (
           <div className='mt-2'>
              <p className='para'>Yes, you can typically specify a desired delivery date when placing an order with our logistics service to ensure your package arrives on a specific day that suits your needs.</p>
            </div>
           )}
          </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Question