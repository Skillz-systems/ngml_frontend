/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, type ChangeEvent, type FormEvent } from 'react'

// import useSWR, { mutate } from 'swr'
// import axios from 'axios'
import { toast } from 'react-toastify'
import name from '../Asset/svg-icons/Namengml.svg'
import email from '../Asset/svg-icons/Emailngml.svg'
import zone from '../Asset/svg-icons/Zonengml.svg'
import unit from '../Asset/svg-icons/Unitngml.svg'
import designation from '../Asset/svg-icons/Designationngml.svg'

import ButtonComponent from 'src/Components/ButtonComponent'
import TextInput from 'src/Components/TextInput'
import { registerUser, type RegisterInterface } from 'src/api/axios'

import { useNavigate } from 'react-router-dom'
import { useAuthDispatch } from '../Context/AuthContext'
// interface FormInteface {
//   firstname: string
//   lastname: string
//   email: string
//   zone: string
//   unit: string
//   designation: string
// }
const SignupStaff = (): JSX.Element => {
  const [values, setValues] = useState<RegisterInterface>({
    firstname: '',
    lastname: '',
    email: '',
    zone: '',
    operation: '',
    designation: '',
    type: 'STAFF'
  })
  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()
  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    try {
      const res = await registerUser(values)
      authDispatch({ type: 'CURRENTUSER', payload: res.data.data.user })
      toast.success(res.data.data.message)
      navigate('/app/staffpage', { replace: true })
      setValues({
        firstname: '',
        lastname: '',
        email: '',
        zone: '',
        operation: '',
        designation: '',
        type: 'STAFF'
      })
    } catch (error: any) {
      toast.error(error.message)
      console.error('Error submitting form:', error)
    }
  }
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gradient">

      <header className='flex flex-col items-center justify-center mt-10 md:mt-20 '>

        <h2 className='text-lg font-bold capitalize md:text-xl'>Staff Re-enrollment Form</h2>
        <h4 className='text-sm text-justify'>we want to comfirm something</h4>
      </header>
      <section >
        <form className='flex flex-col items-center justify-center w-full px-3 py-8 mt-3 space-y-4 md:px-6 h-fit md:w-96 bg-white/40 rounded-3xl' onSubmit={handleSubmit}>

          <div className="w-full">
            <TextInput
              width=''
              height='40px'
              type="text"
              label="firstName"
              value={values.firstname}
              name="firstname"
              placeholder="Enter your First Name"
              error={false}
              onChange={handleOnChange}
              icon={<img src={name} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'
            />
          </div>
          <div className="w-full">
            <TextInput
              width=''
              height='40px'
              type="text"
              label="lastName"
              value={values.lastname}
              name="lastname"
              placeholder="Enter your last Name"
              error={false}
              onChange={handleOnChange}
              icon={<img src={name} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'
            />
          </div>
          <div className="w-full">
            <TextInput
              width=''
              height='39px'
              type="text"
              label="Email"
              value={values.email}
              name="email"
              placeholder="Enter your email here"
              error={false}
              onChange={handleOnChange}
              icon={<img src={email} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'
            />
          </div>
          <input type="text" hidden name='type' value="STAFF" onChange={handleOnChange} />
          <div className="relative w-full group">
            <img src={zone} className='authentication-icons' width={24} height={24} alt='zone' />
            <select name="zone" id="zone" className='text-[#828DA9] border border-gray-300 authentication-select' placeholder='Choose your area of operation' required onChange={handleOnChange} value={values.zone}>
              <option>Choose your area of operation</option>
              <option value="imo">Imo</option>
              <option value="fct">FCT</option>
              <option value="crossriver">Cross River</option>
            </select>
          </div>
          <div className="relative w-full group">
            <img src={unit} className='authentication-icons' width={24} height={24} alt='unit' />
            <select name="operation" id="operation" className='text-[#828DA9] border border-gray-300 authentication-select' placeholder='Enter your email' required onChange={handleOnChange} value={values.operation} >
              <option>Choose your department</option>
              <option value="it">IT</option>
              <option value="admin">Admin</option>
              <option value="customercare">Customer Care</option>
              <option value="legal">Legal</option>
            </select>
          </div>
          <div className="relative w-full group">
            <img src={designation} className='authentication-icons' width={24} height={24} alt='designation' />
            <select name="designation" id="designation" className='text-[#828DA9] border border-gray-300 authentication-select' placeholder='Enter your email' required onChange={handleOnChange} value={values.designation} >
              <option>Choose your designation</option>
              <option value="officer1">Officer I</option>
              <option value="officer2">Officer II</option>
            </select>
          </div>
          {/* <div className="flex justify-center w-full mt-4 bg-yellow-300"> */}
          {/* <button type="submit" className='bg-[#00AF50] w-full rounded-full  py-1 text-white hover:bg-[#00AF50]/70 duration-300 ease-in-out transition-all outline-none focus:outline-none border-none text-center'>Submit</button> */}

          <ButtonComponent
            border="none"
            backgroundColor="#00AF50"
            height="36px"
            radius="100px"
            width="100%"
            fontSize='14px'
            marginRight=''
            onClick={() => {
            }}
          > Submit</ButtonComponent>
          {/* </div> */}
        </form>
      </section>

      <div className="w-full mx-4 mt-5 mb-5 rounded-full bg-white/40 md:mx-0 md:w-4/5 ">

        <footer className='px-2 py-1 text-sm text-center truncate sm:text-xs'> This Portal is a Property of NNPC Gas Marketing Limited</footer>
      </div>
    </main>
  )
}
export default SignupStaff
