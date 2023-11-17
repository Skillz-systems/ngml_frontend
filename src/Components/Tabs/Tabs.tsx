import React, { useState, type FC } from 'react'
import TabList, { type TabListInterface } from './TabList'
import TabPanel from './TabPanel'
import ButtonComponent from '../ButtonComponent'

/**
 * This code defines a Tabs component that displays a tabbed interface.
 * It manages the active tab and panel name using the useState hook.
 * The tablist is an array of objects representing each tab.
 * The handleTabChange function is called when a tab is clicked to update the active tab and panel name.
 * The component renders the TabList and TabPanel components, passing the necessary props.
 */

const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('staffinformation')
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
    }

  ]

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref)
    setPanelName(tab.name)
  }
  return (
    <>
      <div className="flex flex-1 mt-4">
        <TabList tablist={tablist} onTabChange={handleTabChange} activeTab={activeTab} />
        <form className="flex flex-col flex-1">

          <div className="flex-1 bg-white w-full p-3  rounded-lg">
            <TabPanel activeTab={activeTab} panelName={panelName} />
          </div>
          <div className="flex justify-end flex-1 bg-white w-full p-4 mt-4  rounded-lg">

            <ButtonComponent
              border="1px solid #eee"
              backgroundColor="white"
              height="38px"
              radius="100px"
              width="200px"
              fontSize='16px'
              color="#49526A"
              onClick={() => {

              }}
            > Save and close</ButtonComponent>
            <ButtonComponent
              border="none"
              backgroundColor="#00AF50"
              height="38px"
              radius="100px"
              width="200px"
              fontSize='16px'
              onClick={() => {

              }}
            > Save and Continue</ButtonComponent>
          </div>
        </form>

      </div>
    </>
  )
}

export default Tabs
