import React, { type ChangeEvent, useRef } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'

const PensionDetails: React.FC = () => {
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
    <div className='border-2 border-slate-400/70 border-dashed rounded-lg w-full p-4 ' id='pension'>
      <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>Pension Details</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
        <CustomSelect
          name='pensionprovider'
          label="pension provider"
          options={[
            { value: 'premium', label: 'premium pension' },
            { value: 'leadway', label: 'leadway pension' },
            { value: 'aso pension', label: 'aso pension' }
          ]}
          onChange={handleSelectChange} ref={selectRef} />
        <CustomInput name='pensionumber' required
          label="pension identification number"
          placeholder="Enter your PIN"
          type="text"
          className=""
          error=""
          onChange={handleChange}
          ref={inputRef} />
      </div>

    </div>
  )
}

export default PensionDetails