import React, { type ChangeEvent, useRef } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'

const TaxDetails: React.FC = () => {
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
    <div className='border-2 border-slate-400 border-dashed rounded-lg w-full p-4 ' id='tax'>
      <h3 className='text-left text-lg uppercase font-medium text-neutral-500'>Tax Details</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-start mt-4">
        <CustomSelect
          name='taxstateofresidence'
          label="Tax state of residence"
          options={[
            { value: 'fct', label: 'fct' },
            { value: 'nasarawa', label: 'nasarawa' },
            { value: 'delta', label: 'delta' }
          ]}
          onChange={handleSelectChange} ref={selectRef} />
        <CustomInput name='tin' required
          label="taxpayer identification number"
          placeholder="Enter your TIN"
          type="text"
          className=""
          error=""
          onChange={handleChange}
          ref={inputRef} />
      </div>

    </div>
  )
}

export default TaxDetails
