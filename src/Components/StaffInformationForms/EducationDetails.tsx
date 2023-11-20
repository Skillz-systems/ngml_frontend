import React, { useState, type ChangeEvent } from 'react'

import ButtonComponent from '../ButtonComponent'
import CustomInput from '../FormFields/CustomInput'
// import { useAuthState } from 'src/Context/AuthContext'
import CustomSelect from '../FormFields/CustomSelect'

const EducationDetails: React.FC = () => {
  // const { user } = useAuthState()
  const [values, setValues] = useState({})

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  // const handleSubmit = (e: { preventDefault: () => void }): void => {
  //   e.preventDefault()
  //   console.log(values)
  // }

  return (
    <div className="">
      {/* Education */}
      <div>
        <div className='flex-1 w-full p-4 space-y-8 bg-white rounded-3xl'>
          <div className="w-full px-3 py-2 border-2 border-dashed border-slate-400 rounded-2xl">
            <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Education</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CustomInput name='employeeNumber' required
                label="Employee Number"
                placeholder="Enter detail"
                type="text"
                className=''
                error=''
                value=''
                onChange={handleChange}
              />
              <CustomInput name='dateOfAppointment' required
                label="date Of Appointment"
                placeholder="Enter your detail"
                type="date"
                className=''
                error=''
                value=''
                onChange={handleChange}
              />
              <CustomInput name='gradeLevel' required
                label="grade Level"
                placeholder="Enter your detail"
                type="text"
                className=''
                error=''
                value=''
                onChange={handleChange}
              />
              <CustomSelect
                name='departmentOfAppointment'
                label="department OF Appointment"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='zoneOfEmployment'
                label="Zone of Employment"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='zoneOfEmployment'
                label="Unit of Employment"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='zoneOfEmployment'
                label="Designation"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='zoneOfEmployment'
                label="Salary Grade"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
            </div>
          </div>
          <div className="w-full px-3 py-2 border-2 border-dashed border-slate-400 rounded-2xl">
            <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>SALARY BANK DETAILS</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CustomSelect
                name='zoneOfEmployment'
                label="Bank Name"
                options={[
                  { value: 'it', label: 'it' },
                  { value: 'finance', label: 'finance' },
                  { value: 'admin', label: 'admin' }
                ]}
                onChange={handleChange} />
              <CustomInput name='employeeNumber' required
                label="Account Number"
                placeholder="Enter detail"
                type="text"
                className=''
                error=''
                value=''
                onChange={handleChange}
              />
              <CustomInput name='gradeLevel' required
                label="NUBAN Name"
                placeholder="Enter your detail"
                type="text"
                className=''
                error=''
                value=''
                onChange={handleChange}
              />
            </div>
          </div>

          {/* salary */}
          <div className="flex justify-end flex-1 w-full mt-4 rounded-xl">
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
          </div>
        </div>
      </div>
      {/* End Education */}
      {/* Salary */}
    </div>
  )
}

export default EducationDetails
