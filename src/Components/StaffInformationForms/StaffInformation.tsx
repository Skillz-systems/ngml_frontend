/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { type ChangeEvent, useState, type FormEvent } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
import { toast } from 'react-toastify'
import { storeStaff, verifyStaff } from 'src/api/api'
import ResponseModal from '../ResponseComponent/ResponseModal'
import AppModal from '../AppModal'
import { useParams } from 'react-router-dom'
import useDataFetcher from 'src/api/swr'
// import { type StaffInfoInterface } from 'src/api/types'
const StaffInformation: React.FC = () => {
  const { user } = useAuthState()
  const { id } = useParams()
  // const { staff } = useStaffState()
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log(values)
      const res = await storeStaff('staff/submit-data', id, values)
      setLoading(false)
      console.log(res)
      toast.success(`${res?.data?.message}`)
    } catch (error: any) {
      setLoading(false)
      toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`)
      console.error('Error submitting form:', error)
    }
  }
  // const handleApproval = async (): Promise<void> => {
  //   setLoading(true)
  //   console.log('Here')

  //   try {
  //     const res = await updateData('', values, '')
  //     setLoading(false)
  //     console.log(res)
  //     toast.success(`${res?.data?.message}`)
  //   } catch (error: any) {
  //     setLoading(false)
  //     toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`)
  //     console.error('Error submitting form:', error)
  //   }
  // }
  //! old activate
  // useEffect(() => {
  //   // if (user?.type === 'SUPERADMIN') {
  //   //   setDisable(true)
  //   // }
  //   console.log(staff)
  //   if (user?.type === 'SUPERADMIN' && user._id !== staff?._id) {
  //     setDisable(true)
  //   }
  // }, [])

  //! new codes

  const { data } = useDataFetcher({ url: `/staff/${id}` })
  React.useEffect(() => {
    if (user?.type === 'SUPERADMIN' && user._id !== data?.data?._id) setDisable(true)
    // if (user?.type === 'SUPERADMIN' && user._id === data?.data?._id) setDisable(false)
    console.log(data)
  }, [])
  const handleApproval = async (id: any): Promise<void> => {
    console.log('Here')
    setIsOpen(false)
    setLoading(true)
    try {
      const res = await verifyStaff(id)
      console.log(res.data)
      toast.success(`${res?.data?.message}`)
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`)
      console.error(error)
    }
  }

  return (
    <>
      <AppModal
        height="500px"
        width="500px"
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      >
        <ResponseModal
          text='Are you sure you want to approve?'
          subText="Staff would be onboarded into the platform!!"
          type="error"
          action={() => {
            console.log('continue')
            setIsOpen(false)
          }}
          continueAction={() => {
            void handleApproval(id)
          }}
        />
      </AppModal>
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
                value={data?.data?.title ?? ''}
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
                value={data?.data?.firstname ?? ''}
                onChange={handleChange}
              />
              <CustomInput name='email' required
                label="email"
                placeholder="Enter your email"
                type="email"
                className=""
                disabled={true}
                error=""
                value={data?.data?.email ?? ''}
                onChange={handleChange}
              />
              <CustomInput name='lastname' required
                label="last name"
                placeholder="Enter your last name"
                type="text"
                disabled={disable}
                className=""
                error=""
                value={data?.data?.lastname ?? ''}
                onChange={handleChange}
              />
              <CustomInput name='othernames' required
                label="other names"
                placeholder="Enter your other names"
                type="text"
                className=""
                error=""
                value={data?.data?.othernames ?? ''}
                disabled={disable}
                onChange={handleChange}
              />
              <CustomInput name='dateofbirth' required
                label="date of birth"
                placeholder="Enter your last name"
                type="date"
                className=""
                error=""
                value={data?.data?.dateofbirth ?? ''}
                disabled={disable}
                onChange={handleChange}
              />
              <CustomSelect
                name='gender'
                label="gender"
                disabled={disable}
                value={data?.data?.gender ?? ''}
                options={[
                  { value: 'male', label: 'male' },
                  { value: 'female', label: 'female' },
                  { value: 'other', label: 'other' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='nationality'
                label="nationality"
                value={data?.data?.nationality ?? ''}
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
                value={data?.data?.stateoforigin ?? ''}
                disabled={disable}
                options={[
                  { value: 'imo', label: 'imo' },
                  { value: 'edo', label: 'edo' },
                  { value: 'fct', label: 'fct' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='lga' disabled={disable}
                value={data?.data?.lga ?? ''}
                label=" LGA"
                options={[
                  { value: 'fct', label: 'fct' },
                  { value: 'bwari', label: 'bwari' },
                  { value: 'nyanya', label: 'nyanya' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='maritalstatus'
                value={data?.data?.maritalstatus ?? ''}
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
                disabled={disable}
                value={data?.data?.phonenumber ?? ''}
                onChange={handleChange}
              />
              {/* <CustomInput name='email' required
                label="email"
                placeholder="Enter your email"
                type="email"
                className=""
                error=""
                value={data?.data?.email ?? ''}
                disabled={disable}
                onChange={handleChange}
              /> */}
              <CustomTextArea
                onChange={handleChange}
                name='address' required
                value={data?.data?.address ?? ''}
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
                name='nexttitle'
                label="Title"
                disabled={disable}
                value={data?.data?.nexttitle ?? ''}
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
                value={data?.data?.nextfirstname ?? ''}
                disabled={disable}
                onChange={handleChange}
              />
              <CustomInput name='nextlastname' required
                label="last name"
                placeholder="Enter your last name"
                type="text"
                className=""
                error=""
                value={data?.data?.nextlastname ?? ''}
                disabled={disable}
                onChange={handleChange}
              />
              <CustomSelect
                name='nextgender'
                value={data?.data?.nextgender ?? ''}
                label="gender" disabled={disable}
                options={[
                  { value: 'male', label: 'male' },
                  { value: 'female', label: 'female' },
                  { value: 'other', label: 'other' }
                ]}
                onChange={handleChange} />
              <CustomSelect
                name='nextrelationship'
                value={data?.data?.nextrelationship ?? ''}
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
                value={data?.data?.nextphonenumber ?? ''}
                placeholder="Enter your phone number"
                type="tel"
                className="" disabled={disable}
                error=""
                onChange={handleChange}
              />
              <CustomTextArea name='nextofkinaddress' required
                label="address"
                value={data?.data?.nextofkinaddress ?? ''}
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
                value={data?.data?.qualification ?? ''}
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
                value={data?.data?.year ?? ''}
                className="" disabled={disable}
                error=""
                onChange={handleChange}
              />
              <CustomInput name='institution' required
                label="institution attended"
                value={data?.data?.institution ?? ''}
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
                value={data?.data?.pensionprovider ?? ''}
                options={[
                  { value: 'premium', label: 'premium pension' },
                  { value: 'leadway', label: 'leadway pension' },
                  { value: 'aso pension', label: 'aso pension' }
                ]}
                onChange={handleChange} />
              <CustomInput name='pensionumber' required
                label="pension identification number"
                value={data?.data?.pensionumber ?? ''}
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
                value={data?.data?.taxstateofresidence ?? ''}
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
                value={data?.data?.tin ?? ''}
                type="number" disabled={disable}
                className=""
                error=""
                onChange={handleChange}
              />
            </div>

          </div>
          {/* end tax */}
        </div>
        {user?.type !== 'SUPERADMIN' &&
          <>
            <div className="flex justify-end flex-1 w-full mt-4 bg-white rounded-xl">
              <ButtonComponent
                border="1px solid #eee"
                backgroundColor="white"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                color="#49526A"
                onClick={() => { }}
              > wait and Continue</ButtonComponent>
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
              >{loading ? 'Loading...' : 'Submit'}</ButtonComponent>
            </div>
          </>}
      </form>
      {user?.type === 'SUPERADMIN' &&
        <>
          <div className="flex justify-end flex-1 w-full mt-4 bg-white rounded-xl">
            <ButtonComponent
              border="1px solid #eee"
              backgroundColor="white"
              height="38px"
              radius="100px"
              width="170px"
              fontSize='14px'
              marginRight=''
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
              onClick={() => { setIsOpen(true) }}
            > {loading ? 'Approving...' : 'Approve'} </ButtonComponent>
          </div>
        </>}
    </>
  )
}

export default StaffInformation
