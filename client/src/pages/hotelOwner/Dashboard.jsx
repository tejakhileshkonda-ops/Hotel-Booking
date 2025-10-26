import React from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const { totalBookings, totalRevenue, bookings } = dashboardDummyData

  return (
    <div className='p-6 md:p-10 bg-gray-50 min-h-screen'>
      {/* Header */}
      <h2 className='text-2xl font-semibold mb-1'>Dashboard</h2>
      <p className='text-gray-600 mb-8'>
        Monitor your room listings, track bookings and analyze revenue—all in one place.
        Stay updated with real-time insights to ensure smooth operations.
      </p>

      {/* Summary Cards */}
      <div className='flex flex-wrap gap-5 mb-8'>
        <div className='flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-200 w-60'>
          <img src={assets.totalBookingIcon} alt="bookings" className='w-10 h-10' />
          <div>
            <p className='text-sm text-gray-500'>Total Bookings</p>
            <h3 className='text-xl font-semibold'>{totalBookings}</h3>
          </div>
        </div>

        <div className='flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-200 w-60'>
          <img src={assets.totalRevenueIcon} alt="revenue" className='w-10 h-10' />
          <div>
            <p className='text-sm text-gray-500'>Total Revenue</p>
            <h3 className='text-xl font-semibold'>${totalRevenue}</h3>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-200'>
        <h3 className='text-lg font-semibold mb-4'>Recent Bookings</h3>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='border-b text-gray-600'>
              <th className='py-3'>User Name</th>
              <th className='py-3'>Room Name</th>
              <th className='py-3'>Total Amount</th>
              <th className='py-3'>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='border-b hover:bg-gray-50'>
                <td className='py-3'>{booking.user.username}</td>
                <td className='py-3'>{booking.room.roomType}</td>
                <td className='py-3'>${booking.totalPrice}</td>
                <td className='py-3'>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {booking.isPaid ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
