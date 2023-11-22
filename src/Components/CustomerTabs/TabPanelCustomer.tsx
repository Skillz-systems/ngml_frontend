import React, { type FC } from 'react'
// import PersonnelDetails from '../StaffInformationForms/PersonnelDetails'
// import NextOfKin from '../StaffInformationForms/NextOfKin'
// import EducationDetails from '../StaffInformationForms/EducationDetails'
// import PensionDetails from '../StaffInformationForms/PensionDetails'
// import TaxDetails from '../StaffInformationForms/TaxDetails'
import CustomerEoi from '../Customereoi/CustomerEoi'
// import PortalDetailPage from '../Portaldetail/PortalDetailPage'
import StaffsummaryPage from '../Staffsummarypage/StaffsummaryPage'
import StaffEmploymentDetails from '../Staffemploymentdetails/StaffEmploymentDetails'
// import StaffDocumentUpload from '../Staffdocumentupload/StaffDocumentUpload'
import Uploads from '../StaffInformationForms/Uploads'

interface TabPanelProps {
  activeTab: string
  panelName: string
}

const TabPanelCustomer: FC<TabPanelProps> = ({ activeTab, panelName }) => {
  return (
    <div style={{ border: '1px', width: '100%' }} className=''>
      {activeTab === 'overview' && (
        <div className='flex-1 w-full'>
          <CustomerEoi />
        </div>
      )}
      {activeTab === 'customers' && (
        <div className='flex-1 w-full'>
          <StaffEmploymentDetails />
        </div>
      )}
      {activeTab === 'customerdetails' && (
        <div className="flex-1 w-full">
          {/* <StaffDocumentUpload /> */}
          <Uploads />
        </div>)}
      {activeTab === 'eoirequest' && (
        <div className="flex-1 w-full">
          <CustomerEoi />
        </div>)}
      {activeTab === 'ddq' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
      {activeTab === 'sitevisit' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
      {activeTab === 'costanalysis' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
      {activeTab === 'agreement' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
      {activeTab === 'connectproject' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
      {activeTab === 'customermanager' && (
        <div className="flex-1 w-full">
          <StaffsummaryPage />
        </div>)
      }
    </div>
  )
}

export default TabPanelCustomer
