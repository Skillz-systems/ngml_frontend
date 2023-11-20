import React, { type FC } from 'react'
import Tabs from 'src/Components/Tabs/Tabs'

interface ActiveTabProps {
  activeTabs: string
  panelNames: string
}

const Staffpage: FC<ActiveTabProps> = ({ activeTabs, panelNames }) => {
  return (
    <div className='p-5' style={{ overflowX: 'auto', height: '100vh' }}>
      <div className='bg-white/40 w-full h-full p-5 overflow-x-hidden rounded-lg'>
        {activeTabs === 'summary'
          ? <div className="w-[1112px] h-8 justify-between items-end inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="w-8 h-8 bg-slate-200 rounded-2xl justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
              <div className="text-center text-slate-600 text-[32px] font-semibold font-['Mulish'] leading-loose">John Ayodele</div>
            </div>
            <div className="justify-end items-center gap-4 flex">
              <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                  <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
              <div className="w-[157px] px-4 py-[13px] rounded-[32px] border border-gray-300 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative rounded-[5px] flex-col justify-start items-start flex"></div>
                </div>
                <div className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">Download as PDF</div>
              </div>
              <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                  <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
            </div>
          </div>
          : <div className="flex justify-between">
            <h3 className='text-left capitalize font-semibold text-3xl text-neutral-600'>Staff page</h3>
            <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">Cancel</p>
          </div>
        }
        <Tabs />
      </div>
    </div>
  )
}

export default Staffpage
