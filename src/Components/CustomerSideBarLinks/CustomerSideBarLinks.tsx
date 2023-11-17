import React from 'react'
import { FaHome, FaBriefcase, FaUser, FaCog } from 'react-icons/fa'

export const CustomerSideBarLinks = [
  { id: 1, name: 'Home', to: '/customer/customerhomepage', icon: <FaHome /> },
  { id: 2, name: 'Business', to: '/customer/customerbusinesspage', icon: <FaBriefcase /> },
  { id: 3, name: 'Profile', to: '/customer/customerprofilepage', icon: <FaUser /> },
  { id: 4, name: 'Settings', to: '/customer/customersettingspage', icon: <FaCog /> }
]
