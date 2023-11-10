import React, { useRef, type FormEvent } from 'react'
import { HiOutlineUser, HiOutlineMail, HiOutlineLocationMarker, HiOutlineOfficeBuilding, HiOutlineIdentification } from 'react-icons/hi'
const SignupStaff = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const departmentRef = useRef<HTMLSelectElement>(null)
  const locationRef = useRef<HTMLSelectElement>(null)
  const designationRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    const email = emailRef.current?.value
    const firstname = firstNameRef.current?.value
    const lastname = lastNameRef.current?.value
    const department = departmentRef.current?.value
    const location = locationRef.current?.value
    const designation = designationRef.current?.value

    // Call your signup API endpoint with email and password
    console.log({ email, firstname, lastname, location, designation, department })
  }
  return (
    <main className="w-screen h-screen  authentication-background flex flex-col justify-center items-center">

      <header className='flex flex-col items-center justify-center mt-10 lg:mt-20 '>

        <h2 className='font-bold capitalize md:text-xl text-lg'>Staff Re-enrollment Form</h2>
        <h4 className='text-justify text-sm'>we want to comfirm something</h4>
      </header>
      <section>
        <form className='h-fit w-fit md:w-96 bg-white/40 rounded-3xl mt-3 flex flex-col items-center px-3.5 md:px-5 py-8 space-y-3' onSubmit={handleSubmit}>
          <div className="w-full relative group">
            <HiOutlineUser size={24} className='authentication-icons' />
            <input type="text" className='authentication-inputs' placeholder='Enter your first name' required ref={firstNameRef} />
          </div>
          <div className="w-full relative group">
            <HiOutlineUser size={24} className='authentication-icons' />
            <input type="text" className='authentication-inputs' placeholder='Enter your last name' required ref={lastNameRef} />
          </div>
          <div className="w-full relative group">
            <HiOutlineMail size={24} className='authentication-icons' />
            <input type="email" className='authentication-inputs' placeholder='Enter your email' required ref={emailRef} />
          </div>
          <div className="w-full relative group">
            <HiOutlineLocationMarker size={24} className='authentication-icons' />
            <select name="" id="" className='authentication-inputs text-gray-500' placeholder='Choose your area of operation' required ref={locationRef} >
              <option>Choose your area of operation</option>
              <option value="imo">Imo</option>
              <option value="fct">FCT</option>
              <option value="crossriver">Cross River</option>
            </select>
          </div>
          <div className="w-full relative group">
            <HiOutlineOfficeBuilding size={24} className='authentication-icons' />
            <select name="" id="" className='authentication-inputs text-gray-500' placeholder='Enter your email' required ref={departmentRef} >
              <option>Choose your department</option>
              <option value="it">IT</option>
              <option value="admin">Admin</option>
              <option value="customercare">Customer Care</option>
              <option value="legal">Legal</option>
            </select>
          </div>
          <div className="w-full relative group">
            <HiOutlineIdentification size={24} className='authentication-icons' />
            <select name="" id="" className='authentication-inputs text-gray-500' placeholder='Enter your email' required ref={designationRef}>
              <option>Choose your designation</option>
              <option value="officer1">Officer I</option>
              <option value="officer2">Officer II</option>
            </select>
          </div>
          <div className="w-full mt-4">
            <button type="submit" className='bg-[#00AF50] w-full rounded-full  py-1 text-white hover:bg-[#00AF50]/70 duration-300 ease-in-out transition-all outline-none focus:outline-none'>Submit</button>
          </div>
        </form>
      </section>

      <div className="bg-white/40   rounded-full mx-4 w-full md:mx-0 md:w-4/5 mt-auto mb-5 md:mb-10">

        <footer className='px-2 py-1 text-center sm:text-xs text-sm truncate'> This Portal is a Property of NNPC Gas Marketing Limited</footer>
      </div>
    </main>
  )
}
export default SignupStaff
