import React, { type ChangeEvent, useState, useEffect } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
import { useStaffState } from 'src/Context/StaffDataContext'
const StaffInformation: React.FC = () => {
  const { user } = useAuthState()
  const { staff } = useStaffState()
  const [values, setValues] = useState({})
  const [disable, setDisable] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()
    console.log(values)
  }
  useEffect(() => {
    // if (user?.type === 'SUPERADMIN') {
    //   setDisable(true)
    // }
    console.log(staff)
    if (user?.type === 'SUPERADMIN' && user._id !== staff?._id) {
      setDisable(true)
    }
  }, [])

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className='flex-1 w-full p-4 space-y-8 bg-white rounded-xl'>
        {/* personal */}
        <div className='w-full p-4 border-2 border-dashed border-slate-400 rounded-xl ' id='personal'>
          <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Personal Details</h3>
          <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
            <CustomSelect
              name='title'
              label="Title"
              disabled={disable}
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
              disabled={disable}
              value={staff?.firstname ?? ''}
              onChange={handleChange}
            />
            <CustomInput name='email' required
              label="email"
              placeholder="Enter your email"
              type="email"
              className=""
              disabled={disable}
              error=""
              value={(staff != null) ? staff.email : ''}
              onChange={handleChange}
            />
            <CustomInput name='lastname' required
              label="last name"
              placeholder="Enter your last name"
              type="text"
              disabled={disable}
              className=""
              error=""
              value={staff?.lastname ?? ''}
              onChange={handleChange}
            />
            <CustomInput name='othernames' required
              label="other names"
              placeholder="Enter your other names"
              type="text"
              className=""
              error=""
              disabled={disable}
              onChange={handleChange}
            />
            <CustomInput name='dateofbirth' required
              label="date of birth"
              placeholder="Enter your last name"
              type="date"
              className=""
              error=""
              disabled={disable}
              onChange={handleChange}
            />
            <CustomSelect
              name='gender'
              label="gender"
              disabled={disable}
              options={[
                { value: 'male', label: 'male' },
                { value: 'female', label: 'female' },
                { value: 'other', label: 'other' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='nationality'
              label="nationality"
              disabled={disable}
              options={[
                { value: 'nigerian', label: 'nigerian' },
                { value: 'cameroon', label: 'cameroon' },
                { value: 'ghana', label: 'ghana' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='stateoforigin'
              label="state of origin"
              disabled={disable}
              options={[
                { value: 'imo', label: 'imo' },
                { value: 'edo', label: 'edo' },
                { value: 'fct', label: 'fct' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='lga' disabled={disable}
              label=" LGA"
              options={[
                { value: 'fct', label: 'fct' },
                { value: 'bwari', label: 'bwari' },
                { value: 'nyanya', label: 'nyanya' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='maritalstatus'
              label="marital status" disabled={disable}
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
              value={staff?.email ?? ''}
              disabled={disable}
              onChange={handleChange}
            />
            <CustomTextArea
              onChange={handleChange}
              name='address' required
              label="address"
              placeholder="Enter your address"
              className=""
              disabled={disable}
              error="" />
          </div>
        </div>
        {/* personal end */}
        {/* next of kin */}
        <div className='w-full p-4 border-2 border-dashed border-slate-400 rounded-xl' id='nextofkin'>
          <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Next of Kin Details</h3>
          <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
            <CustomSelect
              name='title'
              label="Title"
              disabled={disable}
              options={[
                { value: 'mr', label: 'mr' },
                { value: 'mrs', label: 'mrs' },
                { value: 'miss', label: 'miss' }
              ]}
              onChange={handleChange} />
            <CustomInput name='nextfirstname' required
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              className=""
              error=''
              disabled={disable}
              onChange={handleChange}
            />
            <CustomInput name='nextlastname' required
              label="last name"
              placeholder="Enter your last name"
              type="text"
              className=""
              error=""
              disabled={disable}
              onChange={handleChange}
            />
            <CustomSelect
              name='nextgender'
              label="gender" disabled={disable}
              options={[
                { value: 'male', label: 'male' },
                { value: 'female', label: 'female' },
                { value: 'other', label: 'other' }
              ]}
              onChange={handleChange} />
            <CustomSelect
              name='relationship'
              label="relationship" disabled={disable}
              options={[
                { value: 'father', label: 'father' },
                { value: 'mother', label: 'mother' },
                { value: 'sister', label: 'sister' },
                { value: 'brother', label: 'brother' }
              ]}
              onChange={handleChange} />
            <CustomInput name='nextphonenumber' required
              label="phone number"
              placeholder="Enter your phone number"
              type="tel"
              className="" disabled={disable}
              error=""
              onChange={handleChange}
            />
            <CustomTextArea name='nextofkinaddress' required
              label="address"
              placeholder="Enter your address"
              className="" disabled={disable}
              onChange={handleChange}
              error="" />
          </div>

        </div>
        {/* end next of kin */}
        {/* education */}
        <div className='w-full p-4 border-2 border-dashed border-slate-400 rounded-xl ' id='education'>
          <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Education Details</h3>
          <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
            <CustomSelect
              name='qualification'
              label="qualification attained" disabled={disable}
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
              className="" disabled={disable}
              error=""
              onChange={handleChange}
            />
            <CustomInput name='institution' required
              label="institution attended"
              placeholder="Enter your name of institution"
              type="tel"
              className="" disabled={disable}
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end education */}
        {/* pension */}
        <div className='w-full p-4 border-2 border-dashed border-slate-400 rounded-xl ' id='pension'>
          <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Pension Details</h3>
          <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
            <CustomSelect
              name='pensionprovider' disabled={disable}
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
              className="" disabled={disable}
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end pension */}
        {/*  tax */}
        <div className='w-full p-4 border-2 border-dashed border-slate-400 rounded-xl ' id='tax'>
          <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>Tax Details</h3>
          <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
            <CustomSelect
              name='taxstateofresidence'
              label="Tax state of residence" disabled={disable}
              options={[
                { value: 'fct', label: 'fct' },
                { value: 'nasarawa', label: 'nasarawa' },
                { value: 'delta', label: 'delta' }
              ]}
              onChange={handleChange} />
            <CustomInput name='tin' required
              label="taxpayer identification number"
              placeholder="Enter your TIN"
              type="text" disabled={disable}
              className=""
              error=""
              onChange={handleChange}
            />
          </div>

        </div>
        {/* end tax */}
      </div>
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

export default StaffInformation
