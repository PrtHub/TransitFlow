import { AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { Logo } from '../assets/icons'


const Header = () => {
  return (
    <>
     <header className='w-full h-full bg-black-300 hidden md:block'>
      <div className='w-full xl:w-[1200px] h-full mx-auto flex items-center justify-between py-7 px-7 xl:px-0 gap-9'>
        <section className='flex items-center justify-center w-44 h-11 lg:w-48 lg:h-12'>
          <img src={Logo} alt="Logo" className='w-full h-full object-contain' />
        </section>
        <section className='flex  items-center justify-between font-Krub gap-9'>
          <div className='flex items-center justify-start gap-2 lg:gap-3'>
            <AiOutlineClockCircle className='bg-[#273270] rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200'/>
            <div className='flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm'>
               <p>Mon - Sat 9.00 - 18.00</p>
               <p>Sunday Closed</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-2 lg:gap-3'>
            <AiOutlineMail className='bg-[#273270] rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200'/>
            <div className='flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm'>
               <p>Email</p>
               <p>contact@logistics.com</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-2 lg:gap-3'>
            <IoCallOutline className='bg-[#273270] rounded-full p-2 w-9 h-9 lg:p-3 lg:w-11 lg:h-11 text-dark-yellow-200'/>
            <div className='flex flex-col items-start justify-start text-white font-normal text-xs lg:text-sm'>
               <p>Call Us</p>
               <p>(00) 112 365 489</p>
            </div>
          </div>
        </section>
      </div>
      </header> 
    </>
  )
}

export default Header
