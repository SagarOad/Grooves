import React from "react";
import Image from "next/image";
import videoThumbnail from "../assets/mainBanner.png"; // Adjust the path if needed

const MoreInfo = () => {
  return (
    <div className=" py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title and Description */}
        <div>
          <h2 className="text-6xl playfair font-medium">
            Mall Of: Endless Possibilities
          </h2>
          <p className="mt-4 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Image and Play Button */}
        <div className="relative mt-8 inline-block">
          <Image
            src={videoThumbnail}
            alt="Video Thumbnail"
            className="rounded-lg"
            width={1300}
            height={450}
          />
          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L15 13.586a1 1 0 01-1.414 1.414L5.707 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Ticket Section */}
        <div className="mt-12 bg-white text-left bg-opacity-5 px-12 pt-12 pb-20 rounded-[35px]">
          <h2 className="  mb-4">25 SR/GUEST</h2>
          <h2 className="text-4xl font-medium playfair text-left">
            Get your General Access Ticket
          </h2>
          <p className="mt-4 text-md text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Attractions Section */}
        <div className="mt-12">
          <h2 className="text-5xl w-[100%] lg:w-[60%] mt-2 mb-12 text-left playfair font-medium">
            Book General Access ticket and enjoy the attractions for free
          </h2>
          <div className=" flex justify-start items-center">
            <button className="mt-1 yellow-gradient text-white px-10 w-[300px] py-4 rounded-full text-lg font-medium hover:bg-yellow-400 transition">
              Book reservation now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
