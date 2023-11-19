/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type ChangeEvent } from 'react'
import nnpclogo from '../Asset/nnpc.png'
import TextInput from 'src/Components/TextInput'
import ButtonComponent from 'src/Components/ButtonComponent'
import business from '../Asset/svg-icons/Businessngml.svg'
import email from '../Asset/svg-icons/Emailngml.svg'
import cac from '../Asset/svg-icons/Invoicengml.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

interface MyApiResponse {
  status?: number
  message?: string

}

const CustomerSelfRegistration = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')

  const navigate = useNavigate()

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    alert('fuck you !!!')
    // console.log(event.target, 'kkkkkkk')

    const { name, value } = event.target
    console.log(name, 'lllllllll')
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'businessname') {
      setBusinessName(value)
    }
  }

  const data = {
    companyName: businessName,
    email,
    type: 'CUSTOMER'
  }
  const handleRegister = async () => {
    console.log(email, businessName, 'gggggggghhhhh')
    setLoading(true)
    try {
      const response = await axios.post(
        'https://ngml-be.onrender.com/api/v1/auth/customer-register',
        data
      )
      setLoading(false)
      console.log(response, 'ndndnnndnndndn')

      toast.success(
        `${
          response?.status === 200
            ? 'Registration sucessful'
            : response?.data?.message || 'Unknown error'
        }`,
        {
          position: 'top-right',
          autoClose: 2000000000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false
        }
      )
      // navigate('/loginpage')

      console.log(response, 'response')
    } catch (error) {
      setLoading(false)

      console.log(error, 'gggggggggggg')

    //   toast.error(`${error?.response?.data?.message || error.message}`, {
    //     position: 'top-right',
    //     autoClose: 2000000000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     draggable: false
    //   })
    }
  }
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gradient">

      <section className='flex flex-col items-center px-3 py-8 mt-20 space-y-4 md:px-6 h-fit w-fit md:w-96 bg-white/40 rounded-3xl xl:mt-28'>
        <header className='relative flex flex-col items-center justify-center '>
          <div className="p-3 bg-[#004010] rounded-full absolute -top-14 shadow-lg shadow-[#004010]/30 ">
            <img src={nnpclogo} alt="ngml logo" className='w-6 h-6 ' />
          </div>
          <h2 className='text-lg antialiased font-bold uppercase xl:text-xl text-slate-700'>NGML Business registration</h2>
        </header>
        <div className='flex flex-col items-center justify-center w-full space-y-4'>
          <div className="w-full">
            <TextInput
              width=''
              height='40px'
              type="text"
              label="businessname"
              // value=""
              name="businessname"
              placeholder="Enter Business Name here"
              error={false}
              onChange={handleOnChange}
              icon={<img src={business} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} alt='business' />}
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
              label="cac"
              // value=""
              name="cac"
              placeholder="Enter the CAC number here"
              error={false}
              onChange={handleOnChange}
              icon={<img src={cac} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} alt='cac' />}
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
              label="email"
              // value=""
              name="email"
              placeholder="Enter the Business Email here"
              error={false}
              onChange={handleOnChange}
              icon={<img src={email} className='p-0.5 absolute top-0.5 left-0.5' width={20} height={20} alt='email' />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'
            />
          </div>
          {/* <div className="w-full mt-4"> */}
          <ButtonComponent
            border="none"
            backgroundColor="#00AF50"
            height="36px"
            radius="100px"
            width="100%"
            fontSize='14px'
            marginRight=''
            onClick={() => {
              handleRegister()
            }}
          > Register</ButtonComponent>
          {/* </div> */}
        </div>

      </section>

      <div className="w-full mx-4 mt-auto mb-5 rounded-full bg-white/40 md:mx-0 md:w-4/5 ">

        <footer className='px-2 py-1 text-sm text-center truncate sm:text-xs'> This Portal is a Property of NNPC Gas Marketing Limited</footer>
      </div>
    </main>
  )
}

export default CustomerSelfRegistration
