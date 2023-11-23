/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect, type FormEvent } from 'react'
import CustomInput from '../FormFields/CustomInput'
import CustomSelect from '../FormFields/CustomSelect'
// import CustomTextArea from '../FormFields/CustomTextArea'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
import useDataFetcher from 'src/api/swr'
import { useParams } from 'react-router-dom'
import { storeStaff, verifyStaff } from 'src/api/api'
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

  const { data } = useDataFetcher({ url: `/staff/${id}` })
  useEffect(() => {
    if (user?.type === 'SUPERADMIN' && user._id !== data?.data?._id) setDisable(true)
  }, [])
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
          <div className='w-full p-4 border-2 border-green-400 border-dashed rounded-xl ' id='personal'>
            <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>EMPLOYMENT DETAILS</h3>
            <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
              <CustomInput name='employmentnumber' required
                label="Employment Number"
                placeholder="..."
                type="text"
                className=''
                error=''
                disabled={disable}
                value={data?.data?.employmentnumber ?? ''}
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
              <CustomInput name='dateofappointment' required
                label="date of birth"
                placeholder="22/11/23"
                type="date"
                className=""
                error=""
                value={data?.data?.dateofappointment ?? ''}
                disabled={disable}
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
              <CustomInput name='gradelevel' required
                label="Grade Level"
                placeholder="05"
                type="text"
                className=''
                error=''
                value={data?.data?.gradelevel ?? ''}
                disabled={disable}
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
              <CustomSelect
                name='departmentofappointment'
                label="Department of Appointmment"
                disabled={disable}
                value={data?.data?.employmentnumber ?? ''}
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
                value={data?.data?.zoneofemployment ?? ''}
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
                value={data?.data?.unitofemployment ?? ''}
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
                value={data?.data?.designation ?? ''}
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
                value={data?.data?.salarygrade ?? ''}
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
          <div className='w-full p-4 border-2 border-green-400 border-dashed rounded-xl' id='nextofkin'>
            <h3 className='text-lg font-medium text-left uppercase text-neutral-500'>SALARY BANK DETAILS</h3>
            <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-2">
              <CustomSelect
                name='bank'
                label="Bank"
                value={data?.data?.bank ?? ''}
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
                value={data?.data?.accountnumber ?? ''}
                disabled={disable}
                type="text"
                className=""
                error=''
                onChange={(e) => { handleChange(e, values, setValues) }}
              />
            </div>
            <div className="grid justify-start grid-cols-1 gap-3 mt-4 md:grid-cols-1">
              <CustomInput name='nubanname' required
                label="NUBAN Name"
                placeholder="Enter NUBAN"
                disabled={disable}
                value={data?.data?.nubanname ?? ''}
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
            > {loading ? 'Approving...' : 'Approve'} </ButtonComponent>
          </div>
        </>}
    </>
  )
}

export default EducationDetails
