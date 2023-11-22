import React, { type ChangeEvent, useState, useEffect } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
// import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useStaffState } from 'src/Context/StaffDataContext'
import { useAuthState } from 'src/Context/AuthContext'
const PortalDetails: React.FC = () => {
  // const { user } = useAuthState()
  const [values, setValues] = useState({})
  const { user } = useAuthState()
  const { staff } = useStaffState()
  const [disable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if (user?.type === 'SUPERADMIN') {
    //   setDisable(true)
    // }
    if (user?.type === 'SUPERADMIN' && user._id !== staff?._id) {
      setDisable(true)
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()
    console.log(values)
    setLoading(false)
  }

  return (
    <>
      <div className='flex-1 bg-white w-full p-4 space-y-8  rounded-xl'>
        <form onSubmit={handleSubmit} className='border-2 border-green-400 border-dashed rounded-xl w-full p-4' id='nextofkin'>
          <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>PORTAL LOGIN DETAILS</h3>

          <div className="grid grid-cols-1 justify-start mt-4">
            <CustomSelect
              name='bank'
              label="Access Control"
              disabled={!disable}
              options={[
                { value: 'staff', label: 'staff' },
                { value: 'superadmin', label: 'super admin' },
                { value: 'md', label: 'Managing Director' }
              ]}
              onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
            <CustomInput name='email' required
              label="Email"
              disabled
              placeholder="example@axmple.com"
              type="text"
              className=""
              error=""
              onChange={handleChange}
            />
            <CustomInput name='password' required
              label="password"
              placeholder="change your password"
              disabled={disable}
              type="password"
              className=""
              error=''
              onChange={handleChange}
            />
          </div>
          {user?.type !== 'SUPERADMIN' &&
            <>
              <div className="flex justify-end flex-1 w-full mt-2 bg-white rounded-xl">
                {/* <ButtonComponent
                  border="1px solid #eee"
                  backgroundColor="white"
                  height="38px"
                  radius="100px"
                  width="170px"
                  fontSize='14px'
                  marginRight=''
                  color="#49526A"
                  onClick={() => { }}
                > wait and Continue</ButtonComponent> */}
                <ButtonComponent
                  border="none"
                  backgroundColor="#00AF50"
                  height="38px"
                  radius="100px"
                  width="170px"
                  fontSize='14px'
                  marginRight=''
                  marginLeft=''
                  onClick={() => {
                  }}
                >{loading ? 'Loading...' : 'Submit'}</ButtonComponent>
              </div>
            </>}

        </form>
        {user?.type === 'SUPERADMIN' &&
          <>
            <div className="flex justify-end flex-1 w-full mt-4 rounded-xl">
              <ButtonComponent
                border="1px solid #eee"
                backgroundColor="white"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                marginLeft=''
                color="#49526A"
                onClick={() => { }}
              > Reject and Continue</ButtonComponent>
              <ButtonComponent
                border="none"
                backgroundColor="#00AF50"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                marginLeft=''
                onClick={() => {
                }}
              > Approve </ButtonComponent>
            </div>
          </>}
      </div>
    </>
  )
}

export default PortalDetails
