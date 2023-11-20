import React, { useState, type FC } from 'react'
import Tabs from 'src/Components/Tabs/Tabs'
import print from 'src/Asset/png-icons/print.png'
import AltDownArrow from 'src/Asset/png-icons/AltDownArrow.png'

const Staffpage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('staffinformation')

  return (
    <div className="m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl">
      <div className="flex justify-between">
        <h3 className="text-left capitalize font-semibold text-3xl text-neutral-600">
          Staff page
        </h3>
        <div>
          {' '}
          <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">
            Cancel
          </p>
          {activeTab === 'summary' && (
            <div className="justify-end items-center gap-4 flex mr-[-300px]">
              <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                  {/* <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div> */}
                  <img
                    className="w-4 h-4 relative flex-col justify-start items-start flex"
                    src={print}
                  />
                </div>
              </div>
              <div
                style={{ whiteSpace: 'nowrap' }}
                className="w-[157px] px-[20px] py-[13px] rounded-[32px] border border-gray-300 justify-center items-center gap-2 flex"
              >
                <div className="w-4 h-4 justify-center items-center flex">
                  {/* <div className="w-4 h-4 relative rounded-[5px] flex-col justify-start items-start flex"></div> */}
                  <img src={AltDownArrow} />
                </div>
                <div className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">
                  Download as PDF
                </div>
              </div>
              <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                  ...
                  <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  )
}

export default Staffpage
