import React, { type FC } from 'react'
import PersonnelDetails from '../StaffInformationForms/PersonnelDetails'
import NextOfKin from '../StaffInformationForms/NextOfKin'
import EducationDetails from '../StaffInformationForms/EducationDetails'
import PensionDetails from '../StaffInformationForms/PensionDetails'
import TaxDetails from '../StaffInformationForms/TaxDetails'

interface TabPanelProps {
  activeTab: string
  panelName: string
}

const TabPanel: FC<TabPanelProps> = ({ activeTab, panelName }) => {
  return (
    <div className='w-full h-full '>
      {activeTab === 'staffinformation' && (
        <div className='space-y-8'>
          <PersonnelDetails />
          <NextOfKin />
          <EducationDetails />
          <PensionDetails />
          <TaxDetails />
          <div className="mt-6">
          </div>
        </div>
      )}
      {activeTab === 'employment' && (
        <div className="w-full h-96 bg-red-300 rounded-lg">

        </div>)}
      {activeTab === 'uploads' && (
        <div className="w-full h-96 bg-yellow-300 rounded-lg">
        </div>)}
    </div>
  )
}

export default TabPanel
