import AcmeLogo from '@/app/ui/acme-logo';

import Link from 'next/link';
import { BsNewspaper } from 'react-icons/bs';
import { HiMusicalNote } from 'react-icons/hi2';
import { IoMdAdd } from 'react-icons/io';
export default function Page() {
  return (
    <>
    <div className='grid justify-items-center text-white bg-inherit'>
      <h1>Explore the Possibilities of</h1>
      <h1>AI with<span className='text-[#fd7e14]'>FlowAI</span></h1>
      <button className='bg-[#8F79FF] flex items-center justify-center rounded-md w-36 h-8'><IoMdAdd /> sapas</button>
    </div> 
    <div className='container grid grid-cols-3 mt-3 m-auto bg-white md:w-3/6'>
      <div className='border-solid border-2 border-red-600 w-fit'><BsNewspaper /> sdfds</div>
      <div className='border-solid border-2 border-red-600 w-fit'><HiMusicalNote /> sdfds</div>
      <div className='border-solid border-2 border-red-600 w-fit'><HiMusicalNote /> sdfds</div>
      <div className='border-solid border-2 border-red-600 w-fit'><HiMusicalNote /> sdfds</div>

    </div>
    </>
  );
}
