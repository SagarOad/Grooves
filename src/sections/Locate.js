import React from "react";
import map from "@/assets/map.png";
import Image from "next/image";

const Locate = () => {
  return (
    <div>
      <div className="px-4 md:px-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src={map}
            width={1000}
            height={1000}
            className="object-cover w-full max-w-full h-auto"
            alt="Interactive Map"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <div className="mt-12">
            <h2 className="text-lg md:text-xl text-white">
              EXPERIENCE THE GROVES
            </h2>
            <h2 className="text-3xl md:text-5xl text-white mt-2 text-left playfair font-medium">
              Find your place
            </h2>
            <p className="mt-4 text-base md:text-lg w-full md:w-[60%] mb-4 text-white">
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="mt-1 yellow-gradient text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-yellow-400 transition">
                Open the Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locate;
