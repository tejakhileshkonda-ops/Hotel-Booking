import React, { useState, useEffect } from 'react'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {
  // Load from localStorage if available, else use dummy data
  const savedRooms = JSON.parse(localStorage.getItem('rooms')) || roomsDummyData
  const [rooms, setRooms] = useState(savedRooms)

  // Save updated rooms to localStorage
  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(rooms))
  }, [rooms])

  const toggleAvailability = (index) => {
    const updatedRooms = [...rooms]
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable
    setRooms(updatedRooms)
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-1">Room Listings</h2>
      <p className="text-gray-600 mb-8">
        View, edit, or manage all listed rooms. Keep the information up-to-date
        to provide the best experience for users.
      </p>

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <h3 className="text-lg font-medium mb-4">All Rooms</h3>

        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-2">Image</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Facility</th>
              <th className="py-3 px-2">Price / night</th>
              <th className="py-3 px-2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                {/* Room image */}
                <td className="py-3 px-2">
                  <img
                    src={room.images[0]}
                    alt={room.roomType}
                    className="w-16 h-12 object-cover rounded-md border"
                  />
                </td>

                {/* Room name */}
                <td className="py-3 px-2 font-medium">{room.roomType}</td>

                {/* Facilities */}
                <td className="py-3 px-2 text-gray-700">
                  {room.amenities.join(', ')}
                </td>

                {/* Price */}
                <td className="py-3 px-2">${room.pricePerNight}</td>

                {/* Availability */}
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={room.isAvailable}
                        onChange={() => toggleAvailability(index)}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition">
                        <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                      </div>
                    </label>
                    <span
                      className={`text-sm font-medium ${
                        room.isAvailable ? 'text-green-600' : 'text-red-500'
                      }`}
                    >
                      {room.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom
