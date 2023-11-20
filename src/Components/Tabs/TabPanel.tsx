import React, { type FC } from 'react'
// import PersonnelDetails from '../StaffInformationForms/PersonnelDetails'
// import NextOfKin from '../StaffInformationForms/NextOfKin'
// import EducationDetails from '../StaffInformationForms/EducationDetails'
// import PensionDetails from '../StaffInformationForms/PensionDetails'
// import TaxDetails from '../StaffInformationForms/TaxDetails'
import StaffInformation from '../StaffInformationForms/StaffInformation'
import StaffsummaryPage from '../Staffsummarypage/StaffsummaryPage'
import PortalDetailPage from '../Portaldetail/PortalDetailPage'
import Uploads from '../StaffInformationForms/Uploads'
import EducationDetails from '../StaffInformationForms/EducationDetails'

interface TabPanelProps {
  activeTab: string
  panelName: string
}

const TabPanel: FC<TabPanelProps> = ({ activeTab, panelName }) => {
  return (
    <div className='w-full h-full '>
      {activeTab === 'staffinformation' && (
        <div className='flex-1  w-full'>
          <StaffInformation />
        </div>
      )}
      {activeTab === 'employment' && (
        <div className="w-full h-ful">
          <EducationDetails />
        </div>)}
      {activeTab === 'uploads' && (
        <div className="w-full h-full">
          <Uploads />
        </div>)}
      {activeTab === 'portal' && (
        <div className="">
          <PortalDetailPage />
        </div>)}
      {activeTab === 'summary' && (
        <div className="">
          <StaffsummaryPage />
        </div>)}
    </div>
  )
}

export default TabPanel
