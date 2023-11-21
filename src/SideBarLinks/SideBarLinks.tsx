/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Homeicon from '../Asset/png-icons/Home.png'
import Managericon from '../Asset/png-icons/Business.png'
import Stafficon from '../Asset/png-icons/Staff.png'
import Recordsicon from '../Asset/png-icons/Records.png'
import Reporticon from '../Asset/png-icons/Reports.png'
import Communicationicon from '../Asset/png-icons/Communication.png'
import Profileicon from '../Asset/png-icons/Profile.png'
import Settingsicon from '../Asset/png-icons/Settings.png'
import Customericon from '../Asset/png-icons/Customers.png'

export const SideBarLinks = [
  { id: 1, name: 'Home', to: '/app/homepageinfo', icon: Homeicon },
  { id: 2, name: 'Manager', to: '/app/managerpage', icon: Managericon },
  { id: 3, name: 'Staff', to: '/app/staffpage', icon: Stafficon },
  { id: 4, name: 'Records', to: '/app/recordspage', icon: Recordsicon },
  { id: 5, name: 'Report', to: '/app/reportpage', icon: Reporticon },
  { id: 6, name: 'Customers', to: '/app/customerpage', icon: Customericon },
  { id: 7, name: 'Communication', to: '/app/communicationpage', icon: Communicationicon },
  { id: 8, name: 'Profile', to: '/app/profilepage', icon: Profileicon },
  { id: 9, name: 'Settings', to: '/app/settingspage', icon: Settingsicon },
  { id: 10, name: 'Form Builder', to: '/app/formbuilder', icon: Recordsicon }
]
