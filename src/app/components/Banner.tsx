import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r  to-red-950 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/banner.jpeg"
          alt="burger banner"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-white">
        <h2 className="text-white sm:text-4xl font-semibold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          The Best Burgers in Town!
        </p>

        <button
          type="button"
          className="bg-yellow-600 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-800 transition duration-300"
        >
          Exciting Deals on Weekends!
        </button>

        
      </div>
    </div>
  );
}
