"use client";
import React, { useState } from "react";
import Image from "next/image";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Use the imported images instead of static image paths
const images = [
  { id: 1, src: slide1, alt: "Little Krazy" },
  { id: 2, src: slide2, alt: "Hwanim Groves City" },
  { id: 3, src: slide3, alt: "Picnic Market" },
  { id: 4, src: slide4, alt: "Lucaw Groves" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full  mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="my-10 slider_images "
      >
        <SwiperSlide>
          <div className="relative text-white rounded-lg overflow-hidden">
            <Image
              src={slide1}
              alt="Little Krazy"
              className="w-full  object-cover opacity-70"
            />
            <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
              Little Krazy
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  text-white rounded-lg overflow-hidden">
          <Image
              src={slide2}
              alt="Little Krazy"
              className="w-full  object-cover opacity-70"
            />
            <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
              Hawanim Groves City
            </div>
          </div>
          {/* <h2>sa</h2> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  text-white rounded-lg overflow-hidden">
          <Image
              src={slide3}
              alt="Little Krazy"
              className="w-full  object-cover opacity-70"
            />
            <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
              Picnic Market
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  text-white rounded-lg overflow-hidden">
          <Image
              src={slide4}
              alt="Little Krazy"
              className="w-full  object-cover opacity-70"
            />
            <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
              Lucaw
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
