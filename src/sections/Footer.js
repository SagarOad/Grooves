import React from "react";
import Image from "next/image";
import appStore from "@/assets/appStore.png";
import googlePlay from "@/assets/googlePlay.png";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className=" text-white py-8">
      {/* Container */}
      <div className="mx-auto px-4 md:px-12 lg:px-24">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Section */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-medium playfair">
              Join us for an unforgettable experience
            </h2>
          </div>

          {/* App Download Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center md:items-end">
              <h2 className="text-lg md:text-xl mb-4">
                DOWNLOAD THE GROVES APP
              </h2>
              <div className="flex gap-4">
                <Image
                  className="w-[120px] md:w-[140px]"
                  src={appStore}
                  alt="App Store"
                  width={120}
                  height={120}
                />
                <Image
                  className="w-[120px] md:w-[140px]"
                  src={googlePlay}
                  alt="Google Play"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="text-white py-10">
          <div className="mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-white mb-4">Location</h4>
                <ul className="space-y-2">
                  <li>Al-Hizam Park</li>
                  <li>Al-Semairi, Yanbu Al Bahr 46455</li>
                  <li>Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">WORKING HOURS</h4>
                <ul className="space-y-2">
                  <li>Sun - Thurs: 4:00 PM</li>
                  <li>Careers</li>
                  <li>Press</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">QUEST SERVICE CALL</h4>
                <ul className="space-y-2">
                  <li>cc@thegroves-sa.com</li>
                  <li>920001672</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">
              <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  alt="Logo"
                  className="w-32 md:w-48"
                />
              </div>
              <p className="text-sm md:text-base">&copy; 2077 The Groves. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
