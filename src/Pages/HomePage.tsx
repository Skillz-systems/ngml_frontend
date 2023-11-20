import React from 'react'

const HomePageInfo: React.FC = () => {
  return (
    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl'>
      <div className="flex justify-between">
        <h3 className='text-left capitalize font-semibold text-3xl text-neutral-600'>Home Page</h3>
        <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">Cancel</p>
      </div>
      {/* delete below  */}
      <div>
        <div className='w-full flex-1 bg-white rounded-xl h-96 p-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corporis, vitae culpa omnis minus labore molestiae unde? Non unde architecto aliquam sequi error. Pariatur aperiam quasi rerum sint laboriosam est?
        </div>
      </div>

    </div>
  )
}

export default HomePageInfo
