import React from 'react';
import { lusitana } from '@/app/ui/fonts';


export default function Cards() {
  return (
    <>
     <div>
     <a
          href="#"
          className="block max-w-full h-fit p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_in_no_time_-6-igu(1).svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
    </div>
    <div className='flex mt-5'>
        <a
          href="#"
          className="block max-w-[50%] h-fit mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_in_no_time_-6-igu(1).svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          className="block max-w-[50%] h-fit ml-4 p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_in_no_time_-6-igu(1).svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
     </div>
    </>
  );
}
