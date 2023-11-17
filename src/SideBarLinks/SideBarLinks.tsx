import React from 'react'
import { FaHome, FaUser, FaFolder, FaChartBar, FaEnvelope, FaUserCircle, FaCog } from 'react-icons/fa'

export const SideBarLinks = [
  { id: 1, name: 'Home', to: '/app/homepageinfo', icon: <FaHome /> },
  { id: 2, name: 'Manager', to: '/app/managerpage', icon: <FaUser /> },
  { id: 3, name: 'Staff', to: '/app/staffpage', icon: <FaUser /> },
  { id: 4, name: 'Records', to: '/app/recordspage', icon: <FaFolder /> },
  { id: 5, name: 'Report', to: '/app/reportpage', icon: <FaChartBar /> },
  { id: 6, name: 'Communication', to: '/app/communicationpage', icon: <FaEnvelope /> },
  { id: 7, name: 'Profile', to: '/app/profilepage', icon: <FaUserCircle /> },
  { id: 8, name: 'Settings', to: '/app/settingspage', icon: <FaCog /> }
]
