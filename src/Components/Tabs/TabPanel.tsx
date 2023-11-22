import React, { type FC } from 'react'
// import PersonnelDetails from '../StaffInformationForms/PersonnelDetails'
// import NextOfKin from '../StaffInformationForms/NextOfKin'
// import EducationDetails from '../StaffInformationForms/EducationDetails'
// import PensionDetails from '../StaffInformationForms/PensionDetails'
// import TaxDetails from '../StaffInformationForms/TaxDetails'
import StaffInformation from '../StaffInformationForms/StaffInformation'
import PortalDetailPage from '../Portaldetail/PortalDetailPage'
import StaffsummaryPage from '../Staffsummarypage/StaffsummaryPage'
import StaffEmploymentDetails from '../Staffemploymentdetails/StaffEmploymentDetails'
// import StaffDocumentUpload from '../Staffdocumentupload/StaffDocumentUpload'
import Uploads from '../StaffInformationForms/Uploads'

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
          <StaffEmploymentDetails />
        </div>
      )}
      {activeTab === 'uploads' && (
        <div className="flex-1 w-full">
          {/* <StaffDocumentUpload /> */}
          <Uploads />
        </div>)}
      {activeTab === 'portal' && (
        <div className="flex-1 w-full">
          <PortalDetailPage />
        </div>)}
      {activeTab === 'summary' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
        }
    </div>
  )
}

export default TabPanel
