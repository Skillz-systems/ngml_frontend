import React from 'react'
import { FaHome, FaBriefcase, FaUser, FaCog } from 'react-icons/fa'

export const CustomerSideBarLinks = [
  { id: 1, name: 'Home', to: '/app/homepageinfo', icon: <FaHome /> },
  { id: 2, name: 'Business', to: '/app/businesspage', icon: <FaBriefcase /> },
  { id: 3, name: 'Profile', to: '/app/profilepage', icon: <FaUser /> },
  { id: 4, name: 'Settings', to: '/app/settingspage', icon: <FaCog /> }
]
