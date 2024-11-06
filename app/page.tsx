import Link from 'next/link';
import { IoMdAdd } from 'react-icons/io';
import Image from 'next/image';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';
import { IoCarSportSharp, IoNewspaper } from 'react-icons/io5';
import { GiWatch } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';
import Carousel from './ui/dashboard/carousel';

export default function Page() {
  return (
    <>
    <div className='grid justify-items-center text-white bg-inherit'>
      <h1>Explore the Possibilities of</h1>
      <h1>AI with<span className='text-[#fd7e14]'>FlowAI</span></h1>
      <button className='bg-[#8F79FF] flex items-center justify-center rounded-md w-36 h-8'><IoMdAdd /> sapas</button>
    </div> 
    <div className='container grid grid-cols-2 mt-3 m-auto bg-inherit md:w-3/6'>
      <div className='border-solid border-2 border-red-600 w-full text-white'><FaMusic /> Music</div>
      <div className='border-solid border-2 border-red-600 w-full text-white'><IoNewspaper /> News</div>
    </div>
    <div className='container grid grid-cols-3 m-auto bg-inherit md:w-3/6'>
      <div className='border-solid border-2 border-red-600 w-full text-white'><GiWatch /> Watch</div>
      <div className='border-solid border-2 border-red-600 w-full'> <Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      /></div>
      <div className='border-solid border-2 border-red-600 w-full text-white'><IoCarSportSharp /> Cars</div>
    </div>
    <div className='container grid grid-cols-2 m-auto bg-inherit md:w-3/6'>
      <div className='border-solid border-2 border-red-600 w-full  text-white'><MdOutlinePhoneIphone /> Phones</div>
      <div className='border-solid border-2 border-red-600 w-full text-white'><FaComputer /> PC</div>
    </div>
    <div className='grid justify-items-center text-white bg-inherit'>
      <p className='text-[#fd7e14]'>All AI Platform</p>
      <h1>All Possible Generative AI Solutions
      at One Place</h1>
    </div> 
    <Carousel/>
    </>
  );
}
