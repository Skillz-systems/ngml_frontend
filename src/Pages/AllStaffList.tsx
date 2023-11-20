/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import unit from '../Asset/svg-icons/Unitngml.svg'
// import designation from '../Asset/svg-icons/Designationngml.svg'
import email from '../Asset/svg-icons/Emailngml.svg'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { GoShield } from 'react-icons/go'
import Search from 'src/Asset/png-icons/Search.png'
import { IoFilterOutline } from 'react-icons/io5'
import { getAllStaff, type StaffInterface } from 'src/api/api'
import { toast } from 'react-toastify'
// import { IoMailUnreadOutline } from 'react-icons/io5'
// <IoMailUnreadOutline />
const AllStaffList: React.FC = () => {
  const [staff, setStaff] = useState<StaffInterface[]>([])

  useEffect(() => {
    handleGet()
  }, [])
  const handleGet = async (): Promise<void> => {
    try {
      const res = await getAllStaff()
      console.log(res.data.data)
      setStaff(res?.data.data)
    } catch (error: any) {
      console.log(error)
      toast.error(`${(Boolean((error?.response?.data?.message))) || (Boolean((error?.response?.data?.error))) || error?.message}`)
    }
  }
  return (
    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-2xl'>
      <div className="flex justify-between items-center mb-2 ">
        <span className='text-left capitalize font-medium text-xl text-neutral-500 '>Welcome John</span>
        <div className="inline-flex space-x-4 ">
          <img src={unit} className='after:bg-green-800 after:text-white after:content-["12"]' width={20} height={20} />
          <img src={email} className='after:bg-green-800 after:text-white after:content-["12"]' width={20} height={20} />
          <span className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-600 rounded-3xl text-neutral-600">Add New Staff</span>
        </div>
      </div>
      <div className="grid gap-x-3 justify-between items-center sm:grid-cols-2 md:grid-cols-3 mb-2 ">
        <div className="bg-white rounded-xl p-3 flex flex-1 justify-between items-center">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#00AF50] rounded-lg' color='white' />
          <span className='text-lg ml-1'>Total staff</span>
          <span className='ml-auto text-lg font-semibold'>8,307</span>
        </div>
        <div className="bg-white rounded-xl p-3 flex flex-1 justify-between items-center">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#E7EE87] rounded-lg' color='black' />
          <span className='text-lg ml-1'>Total Verified Staff</span>
          <span className='ml-auto text-lg font-semibold'>6,002</span>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center">
            <GoShield size={24} color='#ffb300' className='p-1 bg-[#ffe8cc] rounded-full' />
            <span className='text-lg ml-1'>Un-Verified Staff</span>
          </div>
          <span className='ml-auto text-lg font-semibold'>2,305</span>
        </div>
      </div>
      {/* delete below  */}
      <div>
        <div className='w-full flex-1 bg-white rounded-xl h-full mt-4'>
          <div className="flex justify-between items-center p-4">
            <span className='italics text-sm text-neutral-600'>Showing 20 of 8307 Staff Records</span>
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="Search here"
                className="h-8 text-sm pl-3 md:pl-6 lg:pl-[40rem] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 italic"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {/* Search Logo */}
                <div className="w-4 h-4 rounded-full"><img src={Search} alt="Search Logo" /></div>
              </div>
            </div>
            <span className="h-8 ml-2 px-3 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-600 rounded-3xl text-neutral-600 text-sm flex">
              <span>All Staff</span>
              <IoFilterOutline size={20} color='#434c5e' className='ml-1' />
            </span>
          </div>
          {/* table */}
          <div className=" overflow-x-auto">
            <table className="w-full table-auto text-sm text-left ">
              <thead className="bg-lime-50 text-neutral-600 font-medium border-b">
                <tr className=''>
                  <th className="py-3 px-2 uppercase">name</th>
                  <th className="py-3 px-2 uppercase">Rank</th>
                  <th className="py-3 px-2 uppercase">Email</th>
                  <th className="py-3 px-2 uppercase">Department</th>
                  <th className="py-3 px-2 uppercase">Status</th>
                  <th className="py-3 px-2 uppercase">Action</th>

                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {staff.length > 0
                  ? (staff.map((item, index) => (
                    <tr key={index} className=''>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm">{item.firstname + ' ' + item.lastname}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm">{item.designation}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm">{item.email}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm">{item.department}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate ">
                        {item.verified
                          ? (
                            <span className='bg-[#87ee87] py-1 px-2 rounded-xl'>Approved</span>)
                          : (
                            <span className='bg-[#eebe87] py-1 px-2 rounded-xl'>Pending</span>)}
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap truncate "><span className='bg-neutral-400 py-1 px-2 rounded-xl text-white'>View</span></td>

                    </tr>)))
                  : (<h4 className='text-center text-2xl'>No User Available</h4>)
                }
              </tbody>
            </table>
          </div>
          {/* table end */}

          {/* pagination */}
          <div className='w-full flex justify-end items-center p-4'>
            <div className="inline-flex gap-3">
              <span className='px-2.5 p-0.5 border rounded-full bg-[#E7EE87]/60'>1</span>
              <span className='px-2.5 p-0.5 border rounded-full'>2</span>
              <span className='px-2.5 p-0.5 border rounded-full'>3</span>
            </div>
          </div>
          {/* end pagination */}
        </div>
      </div>

    </div>
  )
}

export default AllStaffList
