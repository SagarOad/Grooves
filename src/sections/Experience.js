"use client";
import React, { useState } from "react";
import Image from "next/image";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Use the imported images instead of static image paths
const images = [
  { id: 1, src: slide1, alt: "Little Krazy" },
  { id: 2, src: slide2, alt: "Hwanim Groves City" },
  { id: 3, src: slide3, alt: "Picnic Market" },
  { id: 4, src: slide4, alt: "Lucaw Groves" },
];
const Experience = () => {
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
    <div>
      <div className="px-4 md:px-24 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="mt-12">
            <h2 className="text-3xl md:text-5xl text-white mt-2 mb-6 md:mb-12 text-left playfair font-medium">
              Curate your experience as you like
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="mt-1 yellow-gradient text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-yellow-400 transition">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="w-full mx-auto">
            <Swiper
              spaceBetween={20} // Adjusted for smaller screens
              slidesPerView={1} // Single slide per view on small screens
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              autoplay={{ delay: 3000 }}
              className="my-10 slider_images"
            >
              <SwiperSlide>
                <div className="relative text-white rounded-lg overflow-hidden">
                  <Image
                    src={slide1}
                    alt="Little Krazy"
                    className="w-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
                    Little Krazy
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-white rounded-lg overflow-hidden">
                  <Image
                    src={slide2}
                    alt="Hwanim Groves City"
                    className="w-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
                    Hwanim Groves City
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-white rounded-lg overflow-hidden">
                  <Image
                    src={slide3}
                    alt="Picnic Market"
                    className="w-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
                    Picnic Market
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-white rounded-lg overflow-hidden">
                  <Image
                    src={slide4}
                    alt="Lucaw"
                    className="w-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-0 p-4 bg-opacity-50 bg-black text-center">
                    Lucaw
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
