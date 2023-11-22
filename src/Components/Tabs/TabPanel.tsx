import React, { type FC } from 'react'
import EducationDetails from '../StaffInformationForms/EducationDetails'

import PortalDetails from '../StaffInformationForms/PortalDetails'
import StaffInformation from '../StaffInformationForms/StaffInformation'
import Uploads from '../StaffInformationForms/Uploads'
// import SummaryInformation from '../StaffInformationForms/SummaryInformation'
import StaffsummaryPage from '../Staffsummarypage/StaffsummaryPage'

interface TabPanelProps {
  activeTab: string
  panelName: string
}

const TabPanel: FC<TabPanelProps> = ({ activeTab, panelName }) => {
  return (
    <div style={{ width: '100%' }} className=''>
      {activeTab === 'staffinformation' && (
        <div className='flex-1 w-full'>
          <StaffInformation />
        </div>
      )}
      {activeTab === 'employment' && (
        <div className='flex-1 w-full'>
          <EducationDetails />
        </div>
      )}
      {activeTab === 'uploads' && (
        <div className="flex-1 w-full">
          {/* <StaffDocumentUpload /> */}
          <Uploads />
        </div>)}
      {activeTab === 'portal' && (
        <div className="flex-1 w-full">
          <PortalDetails />
        </div>)}
      {activeTab === 'summary' && (
        <div className="flex-1 w-full">
          {/* <SummaryInformation /> */}
          <StaffsummaryPage />
        </div>)
      }
    </div>
  )
}

export default TabPanel
