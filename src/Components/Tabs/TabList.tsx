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
    <div className='w-1/4 flex flex-col items-start justify-start space-y-2 mr-3 sticky top-0'>
      {tablist.map((tab, index) => (
        <div key={tab.ref} className="flex flex-col  w-full space-y-2 " onClick={() => { onTabChange(tab) }}>
          <div className="flex justify-between items-center gap-x-2 cursor-pointer capitalize">
            <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
              <span className={`px-1.5 py-0.5 rounded-full ${tab.ref === activeTab ? 'bg-[#EEED09]/70' : 'bg-transparent'}`}>0{index + 1}</span>
              <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>{tab.name}
              </h4>
            </div>
            {tab.ref === activeTab
              ? (
                <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>)
              : <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/40 transition-all ease-in-out duration-300' ></span>
            }
          </div>
          {tab.children?.map((child) => (
            <a key={child.ref} className="  space-y-2  cursor-pointer" href={`#${child.ref}`} >
              <div className="flex justify-between items-center gap-x-2  ml-8">
                <h4 className='truncate text-neutral-500 text-base capitalize'>{child?.name}
                </h4>
                <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/20' ></span>
              </div>
            </a>))
          }
        </div>
      ))}
    </div>
  )
}

export default TabList
