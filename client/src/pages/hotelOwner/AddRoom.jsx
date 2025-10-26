import React, { useState } from 'react'
import { assets, facilityIcons } from '../../assets/assets'

const AddRoom = () => {
  const [images, setImages] = useState([null, null, null, null])
  const [roomType, setRoomType] = useState('')
  const [price, setPrice] = useState(0)
  const [amenities, setAmenities] = useState([])

  const handleImageChange = (e, index) => {
    const file = e.target.files[0]
    if (file) {
      const newImages = [...images]
      newImages[index] = URL.createObjectURL(file)
      setImages(newImages)
    }
  }

  const handleAmenityChange = (e) => {
    const value = e.target.value
    setAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((a) => a !== value)
        : [...prev, value]
    )
  }

  const handleAddRoom = () => {
    const newRoom = {
      images,
      roomType,
      price,
      amenities,
    }
    console.log('Room Added:', newRoom)
    alert('Room added successfully!')
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-1">Add Room</h2>
      <p className="text-gray-600 mb-8">
        Fill in the details carefully and accurate room details, pricing, and amenities,
        to enhance the user booking experience.
      </p>

      {/* Image Upload */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Images</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <label
              key={index}
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50 cursor-pointer transition"
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
              />
              {image ? (
                <img
                  src={image}
                  alt="Room Upload"
                  className="w-full h-24 object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <img src={assets.uploadArea} alt="upload" className="w-8 h-8 mb-2" />
                  <span className="text-sm text-gray-500">Upload</span>
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Room Type & Price */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Price <span className="text-gray-400 text-sm">/night</span>
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Amenities</h3>
        <div className="grid sm:grid-cols-2 gap-2 text-gray-700">
          {Object.keys(facilityIcons).map((amenity, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={amenity}
                checked={amenities.includes(amenity)}
                onChange={handleAmenityChange}
                className="accent-blue-600"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleAddRoom}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Room
      </button>
    </div>
  )
}

export default AddRoom
