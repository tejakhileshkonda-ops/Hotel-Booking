import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 bg-white shadow-sm'>
      {sidebarLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          end={item.path === "/owner"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md transition-colors duration-200 ${
              isActive ? 'bg-gray-200 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <img src={item.icon} alt={item.name} className='w-5 h-5' />
          <span className='hidden md:inline'>{item.name}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar

