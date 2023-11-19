import React from 'react'
import Tabs from 'src/Components/Tabs/Tabs'

const Staffpage: React.FC = () => {
  return (

    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl'>
      <div className="flex justify-between">
        <h3 className='text-left capitalize font-semibold text-3xl text-neutral-600'>Staff page</h3>
        <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">Cancel</p>
      </div>
      <Tabs />
    </div>

  )
}

export default Staffpage
