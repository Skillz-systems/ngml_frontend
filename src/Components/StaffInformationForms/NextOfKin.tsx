import React, { type ChangeEvent } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
import CustomTextArea from '../FormFields/CustomTextArea'

const NextOfKin: React.FC = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Handle input change
    console.log('Input value:', event.target.value)
  }
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    // Handle the select change
    console.log('Input value:', event.target.value)
  }
  return (
    <div className='border-2 border-slate-400 border-dashed rounded-lg w-full p-4' id='nextofkin'>
      <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>Next of Kin Details</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
        <CustomSelect
          name='title'
          label="Title"
          options={[
            { value: 'mr', label: 'mr' },
            { value: 'mrs', label: 'mrs' },
            { value: 'miss', label: 'miss' }
          ]}
          onChange={handleSelectChange} />
        <CustomInput name='firstname' required
          label="First Name"
          placeholder="Enter your first name"
          type="text"
          className=""
          error=''
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
        <CustomSelect
          name='gender'
          label="gender"
          options={[
            { value: 'male', label: 'male' },
            { value: 'female', label: 'female' },
            { value: 'other', label: 'other' }
          ]}
          onChange={handleSelectChange} />
        <CustomSelect
          name='relationship'
          label="relationship"
          options={[
            { value: 'father', label: 'father' },
            { value: 'mother', label: 'mother' },
            { value: 'sister', label: 'sister' },
            { value: 'brother', label: 'brother' }
          ]}
          onChange={handleSelectChange} />
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

export default NextOfKin
