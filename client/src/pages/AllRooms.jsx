import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons, cities } from '../assets/assets'
import StarRating from '../components/StarRating'

const AllRooms = () => {
  const navigate = useNavigate()

  // Filter states
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [maxPrice, setMaxPrice] = useState(500)

  // Handle amenity toggle
  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    )
  }

  // Filter logic
  const filteredRooms = roomsDummyData.filter((room) => {
    const inCity = selectedCity ? room.hotel.city === selectedCity : true
    const hasAmenities = selectedAmenities.every((a) => room.amenities.includes(a))
    const inPriceRange = room.pricePerNight <= maxPrice
    return inCity && hasAmenities && inPriceRange
  })

  const clearFilters = () => {
    setSelectedCity('')
    setSelectedAmenities([])
    setMaxPrice(500)
  }

  return (
    <div className="flex flex-col lg:flex-row pt-20 px-6 md:px-16 lg:px-24 xl:px-32 gap-8 bg-gray-50 min-h-screen">
      
      {/* Left: Room Listings */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Header */}
        <div className="mb-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-prose">
            Explore luxurious accommodations tailored for comfort, style, and unforgettable experiences.
          </p>
        </div>

        {/* Room Cards */}
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
            >
              {/* Image */}
              <div
                className="md:w-1/3 w-full h-56 md:h-auto overflow-hidden"
                onClick={() => {
                  navigate(`/rooms/${room._id}`)
                  window.scrollTo(0, 0)
                }}
              >
                <img
                  src={room.images[0]}
                  alt="hotel-img"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Details */}
              <div className="md:w-2/3 w-full flex flex-col justify-between p-5 md:p-7">
                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    {room.hotel.city}, {room.hotel.state || ''}, {room.hotel.country || ''}
                  </p>
                  <h2
                    onClick={() => {
                      navigate(`/rooms/${room._id}`)
                      window.scrollTo(0, 0)
                    }}
                    className="text-gray-800 text-2xl font-semibold font-playfair hover:text-blue-600 transition-colors"
                  >
                    {room.hotel.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-2">
                    <StarRating />
                    <p className="text-gray-500 text-sm">200+ reviews</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
                    <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                    <span>{room.hotel.address}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 mb-3">
                    {room.amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-full"
                      >
                        <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
                        <p className="text-xs text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mt-auto">
                  <p className="text-xl font-semibold text-gray-800">
                    ${room.pricePerNight}
                    <span className="text-gray-500 text-sm"> /night</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 bg-white p-10 rounded-xl text-center shadow-sm border border-gray-100">
            No rooms match your filters. Try adjusting your search.
          </div>
        )}
      </div>

      {/* Right: Filters Sidebar */}
      <div className="w-full lg:w-80 bg-white border border-gray-200 p-6 rounded-2xl shadow-md self-start sticky top-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        </div>

        {/* City Filter */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-1 block">City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Max Price: <span className="font-semibold">${maxPrice}</span>
          </label>
          <input
            type="range"
            min="100"
            max="500"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$100</span>
            <span>$500</span>
          </div>
        </div>

        {/* Amenities Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Amenities</p>
          <div className="flex flex-col gap-2">
            {Object.keys(facilityIcons).map((amenity) => (
              <label
                key={amenity}
                className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1 transition"
              >
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="accent-blue-600"
                />
                <img src={facilityIcons[amenity]} alt={amenity} className="w-4 h-4" />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllRooms
