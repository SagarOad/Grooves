import React from "react";
import Image from "next/image";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
import blog4 from "@/assets/blog4.png";

import { FaArrowRight } from "react-icons/fa6";

const CardsSection = () => {
  return (
    <div className="px-4 md:px-16">
      <div>
        <h2 className="text-4xl md:text-6xl text-center text-white playfair font-medium">
          Experience the Finest Cuisine
        </h2>
        <p className="mt-4 text-base md:text-lg text-white text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white bg-opacity-5 rounded-[35px]">
          <Image
            src={blog1}
            width={1000}
            height={1000}
            className="w-full rounded-t-[35px]"
          />
          <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl text-white font-medium playfair">
                Get your General Access Ticket
              </h2>
              <button className="bg-[#AD8749] inter text-xs md:text-[14px] text-white mt-4 p-3 rounded-3xl">
                100 SR PER GUEST
              </button>
            </div>
            <div className="mt-4 md:mt-0">
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-5 rounded-[35px]">
          <Image
            src={blog2}
            width={1000}
            height={1000}
            className="w-full rounded-t-[35px]"
          />
          <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl text-white font-medium playfair">
                Zama Zuhu
              </h2>
              <button className="bg-[#AD8749] inter text-xs md:text-[14px] text-white mt-4 p-3 rounded-3xl">
                100 SR PER GUEST
              </button>
            </div>
            <div className="mt-4 md:mt-0">
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-5 rounded-[35px]">
          <Image
            src={blog3}
            width={1000}
            height={1000}
            className="w-full rounded-t-[35px]"
          />
          <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl text-white font-medium playfair">
                Khawaja Yanni
              </h2>
              <button className="bg-[#AD8749] inter text-xs md:text-[14px] text-white mt-4 p-3 rounded-3xl">
                100 SR PER GUEST
              </button>
            </div>
            <div className="mt-4 md:mt-0">
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-5 rounded-[35px]">
          <Image
            src={blog4}
            width={1000}
            height={1000}
            className="w-full rounded-t-[35px]"
          />
          <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl text-white font-medium playfair">
                Yamagata
              </h2>
              <button className="bg-[#AD8749] inter text-xs md:text-[14px] text-white mt-4 p-3 rounded-3xl">
                100 SR PER GUEST
              </button>
            </div>
            <div className="mt-4 md:mt-0">
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
