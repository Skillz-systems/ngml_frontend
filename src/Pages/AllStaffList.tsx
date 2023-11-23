/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useLayoutEffect, useState } from 'react'
// import unit from '../Asset/svg-icons/Unitngml.svg'
// import designation from '../Asset/svg-icons/Designationngml.svg'
import email from '../Asset/svg-icons/Emailngml.svg'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { GoShield } from 'react-icons/go'
import Search from 'src/Asset/png-icons/Search.png'
import { IoFilterOutline } from 'react-icons/io5'
import { getAllStaff, type StaffInterface } from 'src/api/api'
// import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useAuthState } from '../Context/AuthContext'

const AllStaffList: React.FC = () => {
  const navigate = useNavigate()
  const [staff, setStaff] = useState<StaffInterface[]>([])
  const [totalStaffCount, setTotalStaffCount] = useState(0)
  const [verifiedStaffCount, setVerifiedStaffCount] = useState(0)
  const [unverifiedStaffCount, setUnverifiedStaffCount] = useState(0)
  // const [modalIsOpen, setIsOpen] = useState(false)
  const { user } = useAuthState()

  useLayoutEffect(() => {
    if (user?.type !== 'SUPERADMIN') {
      // navigate('/app/staffpage/', { replace: true })
      navigate(`/app/staffpage/${user?._id}`, { replace: true })
    }
  }, [])

  useEffect(() => {
    handleGet()
  }, [])
  useEffect(() => {
    const total = staff.length
    const verified = staff.filter((count) => count.verified === 'approved').length
    const unverified = total - verified
    setTotalStaffCount(total)
    setVerifiedStaffCount(verified)
    setUnverifiedStaffCount(unverified)
  }, [staff])
  const handleGet = async (): Promise<void> => {
    try {
      const res = await getAllStaff()
      setStaff(res?.data.data)
      console.log('get Staff')
      console.log(res?.data.data)
    } catch (error: any) {
      console.log(error)
    }
  }
  const handleView = (id: string): void => {
    navigate(`/app/staffpage/${id}`)
  }

  // const handleApproval = async (id: string): Promise<void> => {
  //   console.log('Here')

  //   try {
  //     const res = await verifyStaff(id)
  //     console.log(res.data)
  //     handleGet()
  //     toast.success(`${res?.data?.message}`)
  //   } catch (error: any) {
  //     toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`)
  //     console.error(error)
  //   }
  // }

  return (
    <div className='flex-1 p-5 m-5 overflow-x-hidden bg-white/40 rounded-2xl'>
      <div className="flex items-center justify-between mb-3 ">
        <span className='text-xl font-medium text-left capitalize text-neutral-500 '>Welcome John</span>
        <div className="inline-flex items-center justify-center space-x-4 ">
          <div className='ring-[1px] rounded-full p-1 ring-white  relative bg-white'>
            <GoShield className='text-neutral-700' size={20} />
            <span className='bg-red-600 rounded-full text-white text-[8px] pt-0.5 px-0.5 absolute -right-1 -top-1 animate-pulse '>12</span>
          </div>
          <div className='ring-[1px] rounded-full p-1 ring-white  relative bg-white'>
            <img src={email} className='text-neutral-700' width={20} height={20} />
            <span className='bg-red-600 rounded-full text-white text-[8px] pt-0.5 px-0.5 absolute -right-1 -top-1 animate-pulse '>40</span>
          </div>
          <div className="px-4 py-1 transition-all duration-300 ease-in-out bg-white border border-white cursor-pointer hover:text-neutral-700 rounded-3xl text-neutral-600">Add New Staff</div>
        </div>
      </div>
      <div className="grid items-center justify-between mb-2 gap-x-3 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="flex items-center justify-between flex-1 p-3 bg-white rounded-xl">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#00AF50] rounded-lg' color='white' />
          <span className='ml-1 text-sm'>Total staff</span>
          <span className='ml-auto text-lg font-semibold'>{totalStaffCount}</span>
        </div>
        <div className="flex items-center justify-between flex-1 p-3 bg-white rounded-xl">
          <HiOutlineUserCircle size={24} className='p-1 bg-[#E7EE87] rounded-lg' color='black' />
          <span className='ml-1 text-sm'>Total Verified Staff</span>
          <span className='ml-auto text-lg font-semibold'>{verifiedStaffCount}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl">
          <div className="flex items-center">
            <GoShield size={24} color='#ffb300' className='p-1 bg-[#ffe8cc] rounded-full' />
            <span className='ml-1 text-sm'>Un-Verified Staff</span>
          </div>
          <span className='ml-auto text-lg font-semibold'>{unverifiedStaffCount}</span>
        </div>
      </div>
      {/* delete below  */}
      <div>
        <div className='flex-1 w-full h-full mt-4 bg-white rounded-xl'>
          <div className="flex items-center justify-between p-4">
            <span className='text-xs italics text-neutral-600'>Showing {totalStaffCount} of {totalStaffCount} Staff Records</span>
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="Search here"
                className="h-8 text-sm pl-3 md:pl-6 lg:pl-[40rem] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 italic"
              />
              <div className="absolute transform -translate-y-1/2 right-2 top-1/2">
                {/* Search Logo */}
                <div className="w-4 h-4 rounded-full"><img src={Search} alt="Search Logo" /></div>
              </div>
            </div>
            <span className="flex h-8 px-3 py-1 ml-2 text-sm transition-all duration-300 ease-in-out border cursor-pointer hover:text-neutral-700 border-neutral-600 rounded-3xl text-neutral-600">
              <span>All Staff</span>
              <IoFilterOutline size={20} color='#434c5e' className='ml-1' />
            </span>
          </div>
          {/* table */}
          <div className="overflow-x-auto ">
            <table className="w-full text-sm text-left table-auto ">
              <thead className="font-medium border-b bg-lime-50 text-neutral-600">
                <tr className=''>
                  <th className="px-2 py-3 uppercase">name</th>
                  <th className="px-2 py-3 uppercase">Rank</th>
                  <th className="px-2 py-3 uppercase">Email</th>
                  <th className="px-2 py-3 uppercase">Department</th>
                  <th className="px-2 py-3 uppercase">Status</th>
                  <th className="px-2 py-3 uppercase">Action</th>

                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {staff.length > 0
                  ? (staff.map((item, index) => (
                    <tr key={index} className=''>
                      <td className="px-2 py-3 text-sm capitalize truncate whitespace-nowrap">{item.firstname + ' ' + item.lastname}</td>
                      <td className="px-2 py-3 text-sm capitalize truncate whitespace-nowrap">{item.designation}</td>
                      <td className="px-2 py-3 text-sm truncate whitespace-nowrap ">{item.email}</td>
                      <td className="px-2 py-3 text-sm capitalize truncate whitespace-nowrap">{item.department}</td>
                      <td className="px-2 py-3 truncate whitespace-nowrap ">
                        {item.verified === 'approved'
                          ? (
                            <span className='bg-[#87ee87] py-1 px-2 rounded-xl'>Approved</span>)
                          : (
                            <span className='bg-[#eebe87] py-1 px-2 rounded-xl cursor-pointer hover:bg-orange-500 hover:text-white'>Pending</span>)}
                      </td>
                      <td className="px-2 py-3 truncate whitespace-nowrap "><span className='px-2 py-1 text-white cursor-pointer bg-neutral-400 rounded-xl hover:bg-slate-600' onClick={() => { handleView(item._id) }}>View</span></td>
                      {/* <AppModal
                        height="499px"
                        width="466px"
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                      >
                        <ResponseModal
                          type="success"
                          action={() => {
                            handleApproval(item._id)
                          }}
                          continueAction={() => {
                            console.log('gothere')
                          }}
                        />
                      </AppModal> */}
                    </tr>)))
                  : (<>
                    <tr className='mx-2 '>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300 ">
                      </td>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300 ">
                      </td>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300">
                        Wait
                      </td>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300 ">
                        Loading....
                      </td>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300">
                      </td>
                      <td className="w-full px-2 py-3 m-2 text-sm capitalize animate-pulse bg-neutral-300 ">
                      </td>
                    </tr>
                  </>)
                }
              </tbody>
            </table>
          </div>
          {/* table end */}

          {/* pagination */}
          <div className='flex items-center justify-end w-full p-4'>
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
