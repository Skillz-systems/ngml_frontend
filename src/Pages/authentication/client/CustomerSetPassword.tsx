import React, { type ChangeEvent } from 'react'
import nnpclogo from '../../../Asset/nnpc.png'
import TextInput from 'src/Components/TextInput'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import { AiOutlineEye } from 'react-icons/ai'

import ButtonComponent from 'src/Components/ButtonComponent'

const CustomerSetPassword = (): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value)
  }
  const handleClick = (): void => {
    console.log('submit ')
  }
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gradient">

      <section className='flex flex-col items-center px-3 py-8 mt-20 space-y-4 md:px-6 h-fit w-fit md:w-96 bg-white/40 rounded-3xl xl:mt-28'>
        <header className='relative flex flex-col items-center justify-center '>
          <div className="p-3 bg-[#004010] rounded-full absolute -top-14 shadow-lg shadow-[#004010]/30 ">
            <img src={nnpclogo} alt="ngml logo" className='w-6 h-6 ' />
          </div>
          <h2 className='text-lg antialiased font-bold uppercase xl:text-xl text-slate-700'>Set Password</h2>
        </header>
        <form className='w-full space-y-4'>
          <div className="w-full">
            <TextInput
              width=''
              height='40px'
              type="text"
              label="email"
              value=""
              name="email"
              placeholder="Enter the Business Email here"
              error={false}
              onChange={handleOnChange}
              icon={<MdOutlineMarkEmailUnread size={20} className='p-0.5 absolute top-0.5 left-0.5' />}
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
              type="password"
              label="password"
              value=""
              name="password"
              placeholder="Enter a Password"
              error={false}
              onChange={handleOnChange}
              icon={<CiLock size={20} className='p-0.5 absolute top-0.5 left-0.5' />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'
              iconRight={<AiOutlineEye size={20} className='p-0.5 absolute top-1.5 -right-3' />}
            />
          </div>
          <div className="w-full">
            <TextInput
              width=''
              height='40px'
              type="password"
              label="password"
              value=""
              name="password"
              placeholder="Re-enter the Password "
              error={false}
              onChange={handleOnChange}
              icon={<CiLock size={20} className='p-0.5 absolute top-0.5 left-0.5' />}
              iconRight={<AiOutlineEye size={20} className='p-0.5 absolute top-1.5 -right-3' />}
              iconHeight='24px'
              iconWidth='24px'
              backgroundColor='#D2F69E'
              iconStyle='absolute top-2 left-2  rounded-full'
              divStyle='p-0 mb-0'

            />
          </div>

          <div className="w-full mt-4">
            <ButtonComponent
              border="none"
              backgroundColor="#00AF50"
              height="36px"
              radius="100px"
              width=""
              fontSize='16px'
              onClick={() => {
                handleClick()
              }}
            > Proceed</ButtonComponent>
          </div>
        </form>

      </section>

      <div className="w-full mx-4 mt-auto mb-5 rounded-full bg-white/40 md:mx-0 md:w-4/5 ">

        <footer className='px-2 py-1 text-sm text-center truncate sm:text-xs'> This Portal is a Property of NNPC Gas Marketing Limited</footer>
      </div>
    </main>
  )
}

export default CustomerSetPassword
