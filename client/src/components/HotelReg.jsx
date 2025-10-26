import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl w-full max-md:mx-2 overflow-hidden relative">
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 hidden md:block object-cover"
        />

        {/* Right Form */}
        <div className="relative flex flex-col items-center md:w-1/2 w-full p-8 md:p-10">
          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />

          {/* Title */}
          <p className="text-2xl font-semibold mt-6 mb-6 text-gray-800">
            Register Your Hotel
          </p>

          {/* Inputs */}
          <div className="flex flex-col gap-4 w-full">
            {/* Hotel Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hotel Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select City</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
