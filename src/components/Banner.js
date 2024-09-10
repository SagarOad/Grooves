"use client";
import { useState } from "react";
import Image from "next/image";
import banner1 from "../assets/mainBanner.png";
import banner2 from "../assets/mainBanner.png";
import banner3 from "../assets/mainBanner.png";

export default function Banner() {
  const images = [banner1, banner2, banner3]; // List of images for the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[calc(84vh-100px)] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[currentSlide]} // Only changing the images
          alt="Main Banner"
          layout="fill" // Ensures the image fills the section
          objectFit="cover" // Ensures the image covers without tiling
          quality={100}
          priority={true}
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-4 md:px-16">
        {/* Left Column (Static Content) */}
        <div className="relative z-20 w-full md:w-1/2 h-full flex items-center">
          <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-5xl playfair lg:text-8xl font-medium leading-tight">
              The new era of luxury
            </h1>
            <p className="mt-4 text-xl inter lg:text-1xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mt-8 yellow-gradient text-white px-10 w-[300px] py-4 rounded-full text-lg font-medium hover:bg-yellow-400 transition">
              Book reservation now
            </button>
          </div>
        </div>

        {/* Right Column (Images) */}
        <div className="hidden md:flex w-1/2 h-full relative z-20">
          {/* No additional content for now */}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === idx ? "bg-white" : "bg-gray-500"
            } transition duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
}
