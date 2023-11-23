/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect, type FormEvent } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
// import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
import useDataFetcher from 'src/api/swr'
import { useParams } from 'react-router-dom'
import { storeData } from 'src/api/api'
import { toast } from 'react-toastify'
import AppModal from '../AppModal'
import ResponseModal from '../ResponseComponent/ResponseModal'
import { handleChange } from 'src/helpers/functions'
const EducationDetails: React.FC = () => {
  const { id } = useParams()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState({})
  const { user } = useAuthState()
  const [disable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  // const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
  //   setValues({ ...values, [event.target.name]: event.target.value })
  // }

  //* new code
  // const { staff } = useStaffState()

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log(values)
      const res = await storeData('', values)
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

  const { data } = useDataFetcher({ url: `/staff/${id}` })
  useEffect(() => {
    if (user?.type === 'SUPERADMIN' && user._id !== data?.data?._id) setDisable(true)
  }, [])
  return (
    <>
      <AppModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      >
        <ResponseModal
          text='Are you sure you want to approve?'
          subText="Staff would be onboarded into the platform!!"
          type='success'
          action={() => {
            console.log('got here')
            setIsOpen(false)
          }}
          continueAction={() => {
            console.log('continue')
            setIsOpen(false)
          }}
        />
      </AppModal>
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
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
              <CustomInput name='dateofappointment' required
                label="date of birth"
                placeholder="22/11/23"
                type="date"
                className=""
                error=""
                disabled={disable}
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
              <CustomInput name='gradelevel' required
                label="Grade Level"
                placeholder="05"
                type="text"
                className=''
                error=''
                disabled={disable}
                onChange={(e) => { handleChange(e, values, setValues) }}
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
                onChange={(e) => { handleChange(e, values, setValues) }} />
              <CustomSelect
                name='zoneofemployment'
                label="Zone of Employment"
                disabled={disable}
                options={[
                  { value: 'south south zone', label: 'south south zone' },
                  { value: 'north central zone', label: 'north central zone' },
                  { value: 'south east zone', label: 'south east zone' }
                ]}
                onChange={(e) => { handleChange(e, values, setValues) }} />
              <CustomSelect
                name='unitofemployment'
                label="Unit of Employment"
                disabled={disable}
                options={[
                  { value: 'Human Resources', label: 'Human Resources' },
                  { value: 'Manager', label: 'Manager' },
                  { value: 'Director', label: 'Director' }
                ]}
                onChange={(e) => { handleChange(e, values, setValues) }} />
              <CustomSelect
                name='designation'
                label="Designation"
                disabled={disable}
                options={[
                  { value: 'Officer', label: 'Officer' },
                  { value: 'Comrade', label: 'Comrade' },
                  { value: 'Officer', label: 'Officer' }
                ]}
                onChange={(e) => { handleChange(e, values, setValues) }} />
              <CustomSelect
                name='salarygrade'
                label="Salary Grade"
                disabled={disable}
                options={[
                  { value: 'basic', label: 'basic' },
                  { value: 'supervisor', label: 'supervisor' },
                  { value: 'manager', label: 'manager' }
                ]}
                onChange={(e) => { handleChange(e, values, setValues) }} />
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
                onChange={(e) => { handleChange(e, values, setValues) }} />
              <CustomInput name='accountnumber' required
                label="Account Number"
                placeholder="2400306489"
                disabled={disable}
                type="text"
                className=""
                error=''
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1 justify-start mt-4">
              <CustomInput name='nubanname' required
                label="NUBAN Name"
                placeholder="John Aijirioghene Okor"
                type="text"
                className=""
                error=""
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
            </div>

          </div>
          {/* end next of kin */}
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
              >{loading ? 'Submiting...' : 'Submit and Save'}</ButtonComponent>
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
            > Approve </ButtonComponent>
          </div>
        </>}
    </>
  )
}

export default EducationDetails
