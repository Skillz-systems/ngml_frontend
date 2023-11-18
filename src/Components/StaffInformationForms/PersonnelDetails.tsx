import React, { type ChangeEvent, useState } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
import CustomTextArea from '../FormFields/CustomTextArea'

const PersonnelDetails: React.FC = () => {
  const [values, setValues] = useState({})

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  return (
    <div className='border-2 border-slate-400 border-dashed rounded-lg w-full p-4 ' id='personal'>
      <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>Personal Details</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
        <CustomSelect
          name='title'
          label="Title"
          options={[
            { value: 'mr', label: 'mr' },
            { value: 'mrs', label: 'mrs' },
            { value: 'miss', label: 'miss' }
          ]}
          onChange={handleChange} />
        <CustomInput name='firstname' required
          label="First Name"
          placeholder="Enter your first name"
          type="text"
          className=""
          error=''
          onChange={handleChange}
        />
        <CustomInput name='othernames' required
          label="other names"
          placeholder="Enter your other names"
          type="text"
          className=""
          error=""
          onChange={handleChange}
        />
        <CustomInput name='lastname' required
          label="last name"
          placeholder="Enter your last name"
          type="text"
          className=""
          error=""
          onChange={handleChange}
        />
        <CustomInput name='dateofbirth' required
          label="date of birth"
          placeholder="Enter your last name"
          type="date"
          className=""
          error=""
          onChange={handleChange}
        />
        <CustomSelect
          name='gender'
          label="gender"
          options={[
            { value: 'male', label: 'male' },
            { value: 'female', label: 'female' },
            { value: 'other', label: 'other' }
          ]}
          onChange={handleChange} />
        <CustomSelect
          name='nationality'
          label="nationality"
          options={[
            { value: 'nigerian', label: 'nigerian' },
            { value: 'cameroon', label: 'cameroon' },
            { value: 'ghana', label: 'ghana' }
          ]}
          onChange={handleChange} />
        <CustomSelect
          name='stateoforigin'
          label="state of origin"
          options={[
            { value: 'imo', label: 'imo' },
            { value: 'edo', label: 'edo' },
            { value: 'fct', label: 'fct' }
          ]}
          onChange={handleChange} />
        <CustomSelect
          name='lga'
          label=" LGA"
          options={[
            { value: 'fct', label: 'fct' },
            { value: 'bwari', label: 'bwari' },
            { value: 'nyanya', label: 'nyanya' }
          ]}
          onChange={handleChange} />
        <CustomSelect
          name='maritalstatus'
          label="marital status"
          options={[
            { value: 'married', label: 'married' },
            { value: 'single', label: 'single' },
            { value: 'divorced', label: 'divorced' }
          ]}
          onChange={handleChange} />
        <CustomInput name='phonenumber' required
          label="phone number"
          placeholder="Enter your phone number"
          type="tel"
          className=""
          error=""
          onChange={handleChange}
        />
        <CustomInput name='email' required
          label="email"
          placeholder="Enter your email"
          type="email"
          className=""
          error=""
          onChange={handleChange}
        />
        <CustomTextArea name='address' required
          label="address"
          placeholder="Enter your address"
          className=""
          error="" />
      </div>
    </div>
  )
}

export default PersonnelDetails
