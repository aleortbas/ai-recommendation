import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { BsNewspaper } from 'react-icons/bs';
import { HiMusicalNote } from 'react-icons/hi2';
import { IoMdAdd } from 'react-icons/io';
import Image from 'next/image';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';
import { IoCarSportSharp, IoNewspaper } from 'react-icons/io5';
import { GiWatch } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';

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


<div id="animation-carousel" className="relative w-full" data-carousel="static">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-200 ease-linear" data-carousel-item>
            {/* <Image src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            <Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>

        <div className="hidden duration-200 ease-linear" data-carousel-item>
{/*             <Image src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
<Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>

        <div className="hidden duration-200 ease-linear" data-carousel-item="active">
{/*             <Image src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
<Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>

        <div className="hidden duration-200 ease-linear" data-carousel-item>
{/*             <Image src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
<Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>

        <div className="hidden duration-200 ease-linear" data-carousel-item>
{/*             <Image src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
<Image
        src="/rb_3796.png"
        width={1000}
        height={760}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    </>
  );
}
