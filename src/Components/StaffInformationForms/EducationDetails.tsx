import React, { type ChangeEvent, useRef } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'

const EducationDetails: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Handle input change
    console.log('Input value:', event.target.value)
  }

  const selectRef = useRef(null)
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    // Handle the select change
    console.log('Input value:', event.target.value)
  }
  return (
    <div className='border-2 border-slate-400/70 border-dashed rounded-lg w-full p-4 ' id='education'>
      <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>Education Details</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
        <CustomSelect
          name='qualification'
          label="qualification attained"
          options={[
            { value: 'bsc', label: 'bsc' },
            { value: 'msc', label: 'msc' },
            { value: 'phd', label: 'phd' }
          ]}
          onChange={handleSelectChange} ref={selectRef} />
        <CustomInput name='year' required
          label="year earned"
          placeholder="Enter your earned it"
          type="date"
          className=""
          error=""
          onChange={handleChange}
          ref={inputRef} />
        <CustomInput name='institution' required
          label="institution attended"
          placeholder="Enter your name of institution"
          type="tel"
          className=""
          error=""
          onChange={handleChange}
          ref={inputRef} />
      </div>

    </div>
  )
}

export default EducationDetails
