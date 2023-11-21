import React, { useState, type FC } from 'react'
import TabList, { type TabListInterface } from './TabList'
import TabPanel from './TabPanel'
// import ButtonComponent from '../ButtonComponent'

/**
 * This code defines a Tabs component that displays a tabbed interface.
 * It manages the active tab and panel name using the useState hook.
 * The tablist is an array of objects representing each tab.
 * The handleTabChange function is called when a tab is clicked to update the active tab and panel name.
 * The component renders the TabList and TabPanel components, passing the necessary props.
 */

interface TabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const [panelName, setPanelName] = useState<string>('staffinformation')

  const tablist: TabListInterface[] = [
    {
      name: 'staff information',
      ref: 'staffinformation',
      children: [
        {
          name: 'personal details',
          ref: 'personal'
        },
        {
          name: 'next of kin details',
          ref: 'nextofkin'
        },
        {
          name: 'education details',
          ref: 'education'
        },
        {
          name: 'pension details',
          ref: 'pension'
        },
        {
          name: 'tax details',
          ref: 'tax'
        }
      ]
    },
    {
      name: 'uploads',
      ref: 'uploads'
    },
    {
      name: 'employment details',
      ref: 'employment'
    },
    {
      name: 'portal details',
      ref: 'portal'
    },
    {
      name: 'summary',
      ref: 'summary'
    }

  ]

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref)
    setPanelName(tab.name)
  }
  return (
    <>
      <div style={{ border: '5px solid green' }} className="flex flex-1 mt-4">
        <TabList tablist={tablist} onTabChange={handleTabChange} activeTab={activeTab} />

        <TabPanel activeTab={activeTab} panelName={panelName} />
      </div>
    </>
  )
}

export default Tabs
