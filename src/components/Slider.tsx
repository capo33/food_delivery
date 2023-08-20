"use client";

import React, { useEffect, useState } from "react";
import { dataSlider } from "@/links/links";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === dataSlider.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {dataSlider[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full flex-1 relative'>
        <Image
          src={dataSlider[currentSlide].image}
          alt=''
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Slider;
