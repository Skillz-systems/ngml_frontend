import React, { type FC } from 'react'

interface TabInterface {
  name: string
  ref: string
}

export interface TabListInterface {
  name: string
  ref: string
  children?: TabInterface[]
}

interface TabListProps {
  tablist: TabListInterface[]
  onTabChange: (tab: TabListInterface) => void
  activeTab: string
}

const TabList: FC<TabListProps> = ({ tablist, onTabChange, activeTab }) => {
  // console.log(tablist)
  return (
    <div className='w-1/4 flex flex-col items-start justify-start space-y-2 mr-3'>
      {tablist.map((tab, index) => (
        <div key={tab.ref} className="flex flex-col  w-full space-y-2" onClick={() => { onTabChange(tab) }}>
          <div className="flex justify-between items-center gap-x-2 cursor-pointer capitalize">
            <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
              <span className={`px-2 py-1 flex justify-center items-center rounded-full ${tab.ref === activeTab ? 'bg-[#EEED09]/70' : 'bg-transparent'}`}>0{index + 1}</span>
              <span className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>{tab.name}
              </span>
            </div>
            {tab.ref === activeTab
              ? (
                <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>)
              : <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/40 transition-all ease-in-out duration-300' ></span>
            }
          </div>
          {activeTab === tab.ref && (

            tab.children?.map((child, index) => (
              <a key={child.ref + index} className="space-y-2  cursor-pointer no-underline hover:no-underline " href={`#${child.ref}`} >
                <div className="flex justify-between items-center gap-x-2  ml-10">
                  <span className='truncate text-neutral-500 text-base capitalize hover:text-neutral-700'>{child?.name}
                  </span>
                  <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/20' ></span>
                </div>
              </a>))

          )
          }
        </div>
      ))}
    </div>
  )
}

export default TabList
