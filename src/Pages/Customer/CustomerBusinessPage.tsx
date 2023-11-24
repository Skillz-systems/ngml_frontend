/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { toast } from 'react-toastify'
import { getEOIByCustomerEmail } from 'src/api/api'

const CustomerBusinessPage: React.FC = () => {
  //! DELETE THIS CODE ONLY FOR TESTING PUR{POSES
  const handleClick = async (): Promise<void> => {
    try {
      // const res = await getEOIByCustomerEmail(user.email)
      const res = await getEOIByCustomerEmail('cemah@mailinator.com')

      console.log(res.data)

      toast.success(`${res?.data?.message}`)
    } catch (error: any) {
      console.log(error, 'dkkddk')
      toast.error(`${(Boolean((error?.response?.data?.message))) || (Boolean((error?.response?.data?.error))) || error?.message}`)
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl'>
      <h3 className='text-left capitalize font-semibold text-2xl text-neutral-600' onClick={handleClick}>Customer Business</h3>

      {/* delete below  */}
      <div>
        <div className='w-full flex-1 bg-white rounded-xl h-96 p-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corporis, vitae culpa omnis minus labore molestiae unde? Non unde architecto aliquam sequi error. Pariatur aperiam quasi rerum sint laboriosam est?
        </div>
      </div>

    </div>
  )
}

export default CustomerBusinessPage
