/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useLayoutEffect, useState } from 'react'
// import unit from '../Asset/svg-icons/Unitngml.svg'
// import designation from '../Asset/svg-icons/Designationngml.svg'
import email from '../Asset/svg-icons/Emailngml.svg'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { GoShield } from 'react-icons/go'
import Search from 'src/Asset/png-icons/Search.png'
import { IoFilterOutline } from 'react-icons/io5'
import { getAllCustomers, type StaffInterface } from 'src/api/api'
// import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useAuthState } from '../Context/AuthContext'
const AllStaffList: React.FC = () => {
  const navigate = useNavigate()
  const [staff, setStaff] = useState<StaffInterface[]>([])
  const [totalStaffCount, setTotalStaffCount] = useState(0)
  const [verifiedStaffCount, setVerifiedStaffCount] = useState(0)
  const [unverifiedStaffCount, setUnverifiedStaffCount] = useState(0)
  const { user } = useAuthState()

  console.log(user, 'useruserjsjs')

  useLayoutEffect(() => {
    if (user?.type !== 'SUPERADMIN') {
      // navigate('/app/staffpage/', { replace: true })
      navigate(`/app/customerpage/${user?._id}`, { replace: true })
    }
  }, [])

  useEffect(() => {
    handleGet()
    const total = staff.length
    const verified = staff.filter((count) => count.verified === 'approved').length
    const unverified = total - verified

    setTotalStaffCount(total)
    setVerifiedStaffCount(verified)
    setUnverifiedStaffCount(unverified)
  }, [staff])
  const handleGet = async (): Promise<void> => {
    try {
      const res = await getAllCustomers()
      setStaff(res?.data.data)
    } catch (error: any) {
      console.log(error)
      // toast.error(`${(Boolean((error?.response?.data?.message))) || (Boolean((error?.response?.data?.error))) || error?.message}`)
    }
  }
  const handleView = (id: string): void => {
    navigate(`/app/staffpage/${id}`)
  }

  // console.log(staff, 'staffstaffstaff')
  return (
    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-2xl'>
      <div className="flex justify-between items-center mb-3 ">
        <span className='text-left capitalize font-medium text-xl text-neutral-500 '>Welcome John</span>
        <div className="inline-flex justify-center items-center space-x-4 ">
          <div className='ring-[1px] rounded-full p-1 ring-white  relative bg-white'>
            <GoShield className='text-neutral-700' size={20} />
            <span className='bg-red-600 rounded-full text-white text-[8px] pt-0.5 px-0.5 absolute -right-1 -top-1 animate-pulse '>12</span>
          </div>
          <div className='ring-[1px] rounded-full p-1 ring-white  relative bg-white'>
            <img src={email} className='text-neutral-700' width={20} height={20} />
            <span className='bg-red-600 rounded-full text-white text-[8px] pt-0.5 px-0.5 absolute -right-1 -top-1 animate-pulse '>40</span>
          </div>
          <div className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-white rounded-3xl text-neutral-600 bg-white">Add New Staff</div>
        </div>
      </div>
      <div className="grid gap-x-3 justify-between items-center sm:grid-cols-2 md:grid-cols-3 mb-2 ">
        <div className="bg-white rounded-xl p-3 flex flex-1 justify-between items-center">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#00AF50] rounded-lg' color='white' />
          <span className='text-sm ml-1'>Total Customer</span>
          <span className='ml-auto text-lg font-semibold'>{totalStaffCount}</span>
        </div>
        <div className="bg-white rounded-xl p-3 flex flex-1 justify-between items-center">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#E7EE87] rounded-lg' color='black' />
          <span className='text-sm ml-1'>Total Verified Customer</span>
          <span className='ml-auto text-lg font-semibold'>{verifiedStaffCount}</span>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center">
            <GoShield size={24} color='#ffb300' className='p-1 bg-[#ffe8cc] rounded-full' />
            <span className='text-sm ml-1'>Un-Verified Customer</span>
          </div>
          <span className='ml-auto text-lg font-semibold'>{unverifiedStaffCount}</span>
        </div>
      </div>
      {/* delete below  */}
      <div>
        <div className='w-full flex-1 bg-white rounded-xl h-full mt-4'>
          <div className="flex justify-between items-center p-4">
            <span className='italics text-xs text-neutral-600'>Showing {totalStaffCount} of {totalStaffCount} Customer Records</span>
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
                      <td className="px-4 py-3 whitespace-nowrap truncate text-sm capitalize">{item.firstname + ' ' + item.lastname}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm capitalize">{item.designation}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm ">{item.email}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate text-sm capitalize">{item.department}</td>
                      <td className="px-2 py-3 whitespace-nowrap truncate ">
                        {item.verified === 'approved'
                          ? (
                            <span className='bg-[#87ee87] py-1 px-2 rounded-xl'>Approved</span>)
                          : (
                            <span className='bg-[#eebe87] py-1 px-2 rounded-xl'>Pending</span>)}
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap truncate  "><span className='bg-neutral-400 py-1 px-2 rounded-xl text-white cursor-pointer hover:bg-slate-600' onClick={() => { handleView(item._id) }}>View</span></td>
                    </tr>)))
                  : (<>
                    <tr className=' mx-2'>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300 ">
                      </td>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300 ">
                      </td>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300">
                        Wait
                      </td>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300 ">
                        Loading....
                      </td>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300">
                      </td>
                      <td className="px-2 py-3 text-sm capitalize animate-pulse w-full m-2 bg-neutral-300 ">
                      </td>
                    </tr>
                  </>)
                }
              </tbody>
            </table>
          </div>
          {/* table end */}

          {/* pagination */}
          <div className='w-full flex justify-end items-center p-4'>
            <div className="inline-flex gap-3">
              <span className='px-2.5 p-0.5 border rounded-full bg-[#E7EE87]/60  font-bold'>1</span>
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
