import React, { type ChangeEvent, useState, useEffect } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
// import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useStaffState } from 'src/Context/StaffDataContext'
import { useAuthState } from 'src/Context/AuthContext'
const StaffEmploymentDetails: React.FC = () => {
  // const { user } = useAuthState()
  const [values, setValues] = useState({})
  const { user } = useAuthState()
  const { staff } = useStaffState()
  const [disable, setDisable] = useState(false)

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
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className='flex-1 bg-white w-full p-4 space-y-8  rounded-xl'>
        {/* personal */}
        <div className='border-2 border-green-400 border-dashed rounded-xl w-full p-4 ' id='personal'>
          <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>EMPLOYMENT DETAILS</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
            <CustomInput name='employmentnumber' required
              label="Employment Number"
              placeholder="..."
              type="text"
              className=''
              error=''
              disabled={disable}
              onChange={handleChange}
            />
            <CustomInput name='dateofappointment' required
              label="date of birth"
              placeholder="22/11/23"
              type="date"
              className=""
              error=""
              disabled={disable}
              onChange={handleChange}
            />
            <CustomInput name='gradelevel' required
              label="Grade Level"
              placeholder="05"
              type="text"
              className=''
              error=''
              disabled={disable}
              onChange={handleChange}
            />
            <CustomSelect
              name='departmentofappointment'
              label="Department of Appointmment"
              disabled={disable}
              options={[
                { value: 'Business Service', label: 'Business Service' },
                { value: 'Hercules', label: 'Hercules' },
                { value: 'commercial', label: 'commercia' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='zoneofemployment'
              label="Zone of Employment"
              disabled={disable}
              options={[
                { value: 'south south zone', label: 'south south zone' },
                { value: 'north central zone', label: 'north central zone' },
                { value: 'south east zone', label: 'south east zone' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='unitofemployment'
              label="Unit of Employment"
              disabled={disable}
              options={[
                { value: 'Human Resources', label: 'Human Resources' },
                { value: 'Manager', label: 'Manager' },
                { value: 'Director', label: 'Director' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='designation'
              label="Designation"
              disabled={disable}
              options={[
                { value: 'Officer', label: 'Officer' },
                { value: 'Comrade', label: 'Comrade' },
                { value: 'Officer', label: 'Officer' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='salarygrade'
              label="Salary Grade"
              disabled={disable}
              options={[
                { value: 'basic', label: 'basic' },
                { value: 'supervisor', label: 'supervisor' },
                { value: 'manager', label: 'manager' }
              ]}
              onChange={handleChange} />
          </div>
        </div>
        {/* personal end */}
        {/* next of kin */}
        <div className='border-2 border-green-400 border-dashed rounded-xl w-full p-4' id='nextofkin'>
          <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>SALARY BANK DETAILS</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
            <CustomSelect
              name='bank'
              label="Bank"
              disabled={disable}
              options={[
                { value: 'zenith bank', label: 'zenith bank' },
                { value: 'uba bank', label: 'uba bank' },
                { value: 'keystone bank', label: 'keystone bank' }
              ]}
              onChange={handleChange} />
            <CustomInput name='accountnumber' required
              label="Account Number"
              placeholder="2400306489"
              disabled={disable}
              type="text"
              className=""
              error=''
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-1 justify-start mt-4">
            <CustomInput name='nubanname' required
              label="NUBAN Name"
              placeholder="John Aijirioghene Okor"
              type="text"
              className=""
              error=""
              onChange={handleChange}
            />
            {/* <CustomTextArea name='nextofkinaddress' required
              label="address"
              placeholder="Enter your address"
              className=""
              onChange={handleChange}
              error="" /> */}
          </div>

        </div>
        {/* end next of kin */}
      </div>
      {/* <div className="flex justify-end flex-1 bg-white w-full  mt-4  rounded-xl">
        <ButtonComponent
          border="1px solid #eee"
          backgroundColor="white"
          height="38px"
          radius="100px"
          width="170px"
          fontSize='14px'
          marginRight=''
          color="#49526A"
          onClick={() => {

          }}
        > Save and close</ButtonComponent>
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
        > Save and Continue</ButtonComponent>
      </div> */}
      <div className="flex justify-end flex-1 w-full mt-4 bg-white rounded-xl">
        {user?.type === 'SUPERADMIN'
          ? (
            <>
              <ButtonComponent
                border="1px solid #eee"
                backgroundColor="white"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                color="#49526A"
                onClick={() => {

                }}
              > Reject and Continue</ButtonComponent>
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
              > Approved</ButtonComponent>
            </>)
          : (
            <>
              <ButtonComponent
                border="1px solid #eee"
                backgroundColor="white"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                color="#49526A"
                onClick={() => {

                }}
              > Save and close</ButtonComponent>
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
              > Save and Continue</ButtonComponent>
            </>)}

      </div>
    </form>
  )
}

export default StaffEmploymentDetails
