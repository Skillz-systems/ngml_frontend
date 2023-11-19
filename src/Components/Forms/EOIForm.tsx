import React, { type ChangeEvent, useState } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'

const EOIForm: React.FC = () => {
  const [values, setValues] = useState({})

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()
    console.log(values)
  }
  
  return (
    <>
      <div className="m-5">
        <div className="bg-white/40 w-full h-full p-5 overflow-x-hidden rounded-xl">
          <div className="flex justify-between mb-3">
            <h3 className='text-left capitalize font-semibold text-xl text-neutral-500'>Expression of Interest Form</h3>
            <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">Cancel</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='flex-1 bg-white w-full h-full p-3 space-y-8  rounded-xl '>
              <div className='border-2 border-slate-400 border-dashed rounded-lg w-full p-4 ' id='personal'>
                <h3 className='text-left text-lg  text-neutral-400 italic mb-2 '>Complete the form below an submit</h3>
                <div className="grid grid-cols-1 gap-3 justify-start">

                  <CustomInput name='companyname' required
                    label="Company Registered Name"
                    placeholder="Enter company name"
                    type="text"
                    className=""
                    error=""
                    onChange={handleChange}
                  />
                  <CustomInput name='companyemail' required
                    label="Company email"
                    placeholder="Enter company's email"
                    type="email"
                    className=""
                    error=""

                    onChange={handleChange}
                  />
                  <CustomInput name='companycontact' required
                    label="Company Phone number"
                    placeholder="Enter company contact"
                    type="tel"
                    className=""
                    error=""
                    onChange={handleChange}
                  />
                  <CustomTextArea name='reason' required={false}
                    label="Reason for request"
                    onChange={handleChange}
                    placeholder="Type here"
                    className=""
                    error="" />
                </div>
              </div>
            </div>
            <div className="flex justify-end flex-1 bg-white w-full mt-4  rounded-xl">

              <ButtonComponent
                border="none"
                backgroundColor="#00AF50"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                onClick={() => {

                }}
              > Submit Request</ButtonComponent>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default EOIForm
