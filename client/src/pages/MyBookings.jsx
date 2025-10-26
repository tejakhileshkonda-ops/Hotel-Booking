import React from "react";
import { userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  return (
    <div className="pt-20 pb-16 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-playfair text-3xl md:text-4xl text-gray-800 mb-2">
          My Bookings
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-prose">
          Easily manage your past, current, and upcoming hotel reservations in one place.
          Plan your trips seamlessly with just a few clicks.
        </p>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 text-gray-500 text-sm font-medium border-b border-gray-300 pb-2 mb-4">
        <p>Hotels</p>
        <p className="text-center">Date & Timings</p>
        <p className="text-right">Payment</p>
      </div>

      {/* Bookings List */}
      <div className="flex flex-col gap-5">
        {userBookingsDummyData.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-3 bg-white border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition duration-200"
          >
            {/* Hotel Info */}
            <div className="flex gap-4 items-center">
              <img
                src={booking.room.images[0]}
                alt="room"
                className="w-24 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="text-gray-800 font-semibold text-base md:text-lg">
                  {booking.hotel.name}{" "}
                  <span className="text-sm text-gray-500">
                    ({booking.room.roomType})
                  </span>
                </h2>
                <p className="text-sm text-gray-500">{booking.hotel.address}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Guests: {booking.guests}
                </p>
                <p className="text-sm text-gray-700 font-medium mt-1">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/* Date Info */}
            <div className="flex flex-col justify-center items-center text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-700">Check-In:</span>{" "}
                {new Date(booking.checkInDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p>
                <span className="font-medium text-gray-700">Check-Out:</span>{" "}
                {new Date(booking.checkOutDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Payment Info */}
            <div className="flex flex-col justify-center items-end text-sm">
              {booking.isPaid ? (
                <p className="text-green-600 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span> Paid
                </p>
              ) : (
                <div className="flex flex-col items-end">
                  <p className="text-red-600 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span> Unpaid
                  </p>
                  <button className="text-xs mt-2 border border-gray-400 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-100 transition">
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
