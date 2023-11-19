import React, { type ChangeEvent, useState } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
const StaffInformation: React.FC = () => {
  const { user } = useAuthState()
  const [values, setValues] = useState({})

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
        <div className='border-2 border-slate-400 border-dashed rounded-xl w-full p-4 ' id='personal'>
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
              className=''
              error=''
              value={(user != null) ? user.firstname : ''}
              onChange={handleChange}
            />
            <CustomInput name='email' required
              label="email"
              placeholder="Enter your email"
              type="email"
              className=""
              error=""
              value={(user != null) ? user.email : ''}
              onChange={handleChange}
            />
            <CustomInput name='lastname' required
              label="last name"
              placeholder="Enter your last name"
              type="text"
              className=""
              error=""
              value={(user != null) ? user.lastname : ''}
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
            <CustomTextArea
              onChange={handleChange}
              name='address' required
              label="address"
              placeholder="Enter your address"
              className=""
              error="" />
          </div>
        </div>
        {/* personal end */}
        {/* next of kin */}
        <div className='border-2 border-slate-400 border-dashed rounded-xl w-full p-4' id='nextofkin'>
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
              onChange={handleChange} />
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
              onChange={handleChange} />
            <CustomSelect
              name='relationship'
              label="relationship"
              options={[
                { value: 'father', label: 'father' },
                { value: 'mother', label: 'mother' },
                { value: 'sister', label: 'sister' },
                { value: 'brother', label: 'brother' }
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
            <CustomTextArea name='nextofkinaddress' required
              label="address"
              placeholder="Enter your address"
              className=""
              onChange={handleChange}
              error="" />
          </div>

        </div>
        {/* end next of kin */}
        {/* education */}
        <div className='border-2 border-slate-400 border-dashed rounded-xl w-full p-4 ' id='education'>
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
              onChange={handleChange} />
            <CustomInput name='year' required
              label="year earned"
              placeholder="Enter your earned it"
              type="date"
              className=""
              error=""
              onChange={handleChange}
            />
            <CustomInput name='institution' required
              label="institution attended"
              placeholder="Enter your name of institution"
              type="tel"
              className=""
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end education */}
        {/* pension */}
        <div className='border-2 border-slate-400 border-dashed rounded-xl w-full p-4 ' id='pension'>
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
              onChange={handleChange} />
            <CustomInput name='pensionumber' required
              label="pension identification number"
              placeholder="Enter your PIN"
              type="text"
              className=""
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end pension */}
        {/*  tax */}
        <div className='border-2 border-slate-400 border-dashed rounded-xl w-full p-4 ' id='tax'>
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
              onChange={handleChange} />
            <CustomInput name='tin' required
              label="taxpayer identification number"
              placeholder="Enter your TIN"
              type="text"
              className=""
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end tax */}
      </div>
      <div className="flex justify-end flex-1 bg-white w-full  mt-4  rounded-xl">
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
    </form>
  )
}

export default StaffInformation
