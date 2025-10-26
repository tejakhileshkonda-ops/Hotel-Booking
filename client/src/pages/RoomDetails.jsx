import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { roomsDummyData, facilityIcons, assets } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = roomsDummyData.find((r) => r._id === id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  if (!room) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Room not found.
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-blue-600 hover:underline mb-4"
      >
        <img src={assets.arrowIcon} alt="back" className="w-3 h-3 rotate-180" />
        Back to rooms
      </button>

      {/* Hotel Title & Price */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800">
            {room.hotel.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
            <span>{room.hotel.address}, {room.hotel.city}</span>
          </div>
        </div>
        <div className="text-2xl font-medium text-gray-800 mt-3 md:mt-0">
          ${room.pricePerNight}
          <span className="text-gray-500 text-base font-normal">/night</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {room.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`room-${index}`}
            className="w-full h-48 md:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Experience Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-2">
          Experience Luxury Like Never Before
        </h2>
        <div className="flex justify-center flex-wrap gap-6 mt-4">
          {room.amenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700">
              <img
                src={facilityIcons[item]}
                alt={item}
                className="w-5 h-5"
              />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Bar */}
      <div className="bg-white shadow-md rounded-xl p-4 md:p-6 mt-10 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                if (!checkIn || !checkOut) {
                  alert("Please select check-in and check-out dates.");
                  return;
                }
                navigate(`/booking?roomId=${room._id}`);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium transition duration-300"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
