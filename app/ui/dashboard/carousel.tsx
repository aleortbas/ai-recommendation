"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 flex justify-center bg-inherit bg-inherit">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] hover:border-b-[2.5px] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_playlist_re_1oed.svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
      <div className="keen-slider__slide number-slide2 flex justify-center bg-inherit ">
      <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] hover:border-b-[2.5px] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_electric_car_b-7-hl.svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
      <div className="keen-slider__slide number-slide3 flex justify-center bg-inherit">
      <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] hover:border-b-[2.5px] dark:bg-[#15152C] dark:border-[#3C3C77] "
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
      <div className="keen-slider__slide number-slide4 flex justify-center bg-inherit">
      <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] hover:border-b-[2.5px] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_programming_re_kg9v.svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
      <div className="keen-slider__slide number-slide5 flex justify-center bg-inherit">
      <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 hover:border-[#affb1a] hover:border-b-[2.5px] dark:bg-[#15152C] dark:border-[#3C3C77] "
        >
          <div className="mb-2  tracking-tight">
            <img src="ilustrations/undraw_news_re_6uub.svg" height={200} width={200}/>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  );
}
