/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { type ChangeEvent, useState, type FormEvent, useEffect } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { type EOIInterface, postEOI, getEOIByCustomerEmail } from 'src/api/api'
import { toast } from 'react-toastify'
import { useAuthState } from 'src/Context/AuthContext'
const EOIForm: React.FC = () => {
  const { user } = useAuthState()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<EOIInterface>({
    email: '',
    phoneNumber: '',
    companyName: '',
    reason: ''
  })

  // const { email } = user

  const email = user?.email ?? ''

  console.log(user, 'useruser')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await postEOI(values)
      setLoading(false)
      console.log(res)

      toast.success(`${res?.data?.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    } catch (error: any) {
      setLoading(false)
      toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      console.error('Error submitting form:', error)
    }
  }

  const fetchUserData = async () => {
    try {
      const res = await getEOIByCustomerEmail(email)
      setValues(res?.data?.data)
      setLoading(false)
      console.log(res, 'dkdkkdk')
      // toast.success(`${res?.data?.message}`, {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light'
      // })
    } catch (error: any) {
      setLoading(false)
      // toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`, {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light'
      // })
      console.error('Error submitting form:', error)
    }
  }

  useEffect(() => {
    // if (email !== '') {
    fetchUserData()
    // }
  }, [email])

  console.log(values, 'sshhshsh')

  return (
    <>
      <div className="">
        <div className="bg-white/40 flex-1 m-5 p-5 overflow-x-hidden rounded-xl">
          <div className="flex justify-between mb-3">
            <h3 className='text-left capitalize font-semibold text-xl text-neutral-500'>Expression of Interest Form</h3>
            <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">Cancel</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='flex-1 bg-white w-full h-full p-3 space-y-8  rounded-xl '>
              <div className='border-2 border-slate-400 border-dashed rounded-lg w-full p-4 ' id='personal'>
                <h3 className='text-left text-lg  text-neutral-400 italic mb-2 '>Complete the form below an submit</h3>
                <div className="grid grid-cols-1 gap-3 justify-start">

                  <CustomInput name='companyName' required
                    label="Company Registered Name"
                    placeholder="Enter company name"
                    type="text"
                    className=""
                    error=""
                    value={values.companyName}
                    onChange={handleChange}
                  />
                  <CustomInput name='email' required
                    label="Company email"
                    placeholder="Enter company's email"
                    type="email"
                    className=""
                    error=""
                    value={values.email}

                    onChange={handleChange}
                  />
                  <CustomInput name='phoneNumber' required
                    label="Company Phone number"
                    placeholder="Enter company contact"
                    type="tel"
                    className=""
                    error=""
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <CustomTextArea name='reason' required={false}
                    label="Reason for request"
                    onChange={handleChange}
                    placeholder="Type here"
                    className=""
                    value={values.reason}
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
              > {loading ? 'Submiting....' : 'Submit Request'}</ButtonComponent>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default EOIForm
