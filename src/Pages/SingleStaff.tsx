import React, { type ChangeEvent, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CustomInput from 'src/Components/FormFields/CustomInput'
import CustomSelect from 'src/Components/FormFields/CustomSelect'
import CustomTextArea from 'src/Components/FormFields/CustomTextArea'
import ButtonComponent from 'src/Components/ButtonComponent'
import { getStaffById, type StaffInterface } from 'src/api/api'

const SingleStaff: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [staff, setStaff] = useState<StaffInterface>()
  const [values, setValues] = useState({})

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleGet = async (): Promise<void> => {
    try {
      const res = await getStaffById(id)
      setStaff(res?.data.data)
    } catch (error: any) {
      console.log(error)
      // toast.error(`${(Boolean((error?.response?.data?.message))) || (Boolean((error?.response?.data?.error))) || error?.message}`)
    }
  }
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      console.log(id)
      await handleGet()
      console.log(staff) // This will log the updated staff data after the fetch
    }

    void fetchData()
  }, [id])
  return (
    <div className='m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl'>
      <div className="flex justify-between">
        <h3 className='text-left capitalize font-semibold text-3xl text-neutral-600'>Staff Information</h3>
        <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600" onClick={() => { navigate(-1) }}>Go Back</p>
      </div>
      <div className="flex flex-1 mt-4">
        <div className='w-1/4 flex flex-col items-start justify-start space-y-2 mr-3 '>
          <div className="flex flex-col  w-full space-y-2 ">
            <a href='#personal' className="flex justify-between items-center gap-x-2 cursor-pointer capitalize">
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>Staff Information
                </h4>
              </div>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>
            </a>
            <a href='#education' className="flex justify-between items-center gap-x-2 cursor-pointer capitalize no-underline">
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>Education Details
                </h4>
              </div>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>
            </a>
            <a href='#' className="flex justify-between items-center gap-x-2 cursor-pointer capitalize no-underline">
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>Uploads
                </h4>
              </div>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>
            </a>
            <a href='#pension' className="flex justify-between items-center gap-x-2 cursor-pointer capitalize no-underline">
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>Employment Details
                </h4>
              </div>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>
            </a>
            <a href='#pension' className="flex justify-between items-center gap-x-2 cursor-pointer capitalize no-underline">
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>Pension Details
                </h4>
              </div>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>
            </a>
          </div>
        </div>
        <div className="">
          <form className="" >
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
                    value={(staff != null) ? staff.firstname : ''}
                    onChange={handleChange}
                  />
                  <CustomInput name='email' required
                    label="email"
                    placeholder="Enter your email"
                    type="email"
                    className=""
                    error=""
                    value={(staff != null) ? staff.email : ''}
                    onChange={handleChange}
                  />
                  <CustomInput name='lastname' required
                    label="last name"
                    placeholder="Enter your last name"
                    type="text"
                    className=""
                    error=""
                    value={(staff != null) ? staff.lastname : ''}
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
              > Reject and close</ButtonComponent>
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
              > Approve and Save</ButtonComponent>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SingleStaff
