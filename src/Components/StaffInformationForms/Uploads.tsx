/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { GrDocumentImage, GrDocumentNotes } from 'react-icons/gr'

import DropZone from '../FormFields/DropZone'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'
import { storeStaff } from 'src/api/api'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import useDataFetcher from 'src/api/swr'
import { handleDownload } from 'src/helpers/functions'

interface FormValues {
  passport: string | Blob
  nysc: string | Blob
}

const initialFormValues: FormValues = {
  passport: '',
  nysc: ''
}

const Uploads: React.FC = () => {
  const { id } = useParams()
  const [documentNames, setDocumentNames] = useState<Record<string, string | any>>({})
  const { user } = useAuthState()
  const [values, setValues] = useState<FormValues>(initialFormValues)
  const [loading, setLoading] = useState(false)
  const handleDropZoneChange = (name: string, documentName: string | any): void => {
    setDocumentNames((prevDocumentNames) => ({
      ...prevDocumentNames,
      [name]: documentName
    }))
  }
  // const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const selectedFile = event.target.files?.[0]
  //   handleDropZoneChange('passport', selectedFile?.name)
  //   setValues({ ...values, [event.target.name]: selectedFile })
  // }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)

    const data = new FormData()

    data.append('passport', values.passport)
    data.append('nysc', values.nysc)

    try {
      const res = await storeStaff('staff/submit-data', id, data)
      setLoading(false)
      console.log(res.data)
      toast.success(`${res?.data?.message}`)
    } catch (error: any) {
      setLoading(false)
      toast.error(`${(Boolean((error?.response?.data?.message))) || error?.message}`)
      console.log(error)
    }
  }

  const { data } = useDataFetcher({ url: `/staff/${id}` })
  return (
    <div>
      <div className='flex-1 w-full p-4 space-y-8 bg-white rounded-xl'>
        <h3 className='-mb-2 text-lg font-medium text-left uppercase text-neutral-500'>Document Uploads</h3>

        {user?.type === 'SUPERADMIN'
          ? (
            <>
              {/* admin */}
              <div className="w-full px-3 py-2 border-2 border-dashed border-slate-400 rounded-2xl">
                <h4 className='-mb-1 text-sm text-left text-gray-600 capitalize '>passport </h4>
                <div className="flex items-center justify-between p-2 my-2 space-x-2 bg-slate-100 rounded-xl">
                  <span ><GrDocumentImage size={24} className='text-green-600 cursor-pointer' onClick={() => { handleDownload(data?.data?.passport, 'passport') }} /></span>
                  <span className="mr-auto text-sm font-semibold text-neutral-600">passport.jpg</span>
                  <ButtonComponent
                    border='1px solid #ff8787'
                    backgroundColor="#ff8787"
                    height="30px"
                    radius="40px"
                    width="80px"
                    fontSize='14px'
                    marginRight=''
                    color="#fff"
                    onClick={() => {

                    }}
                  > Reject</ButtonComponent>
                </div>
              </div>
              <div className="w-full px-3 py-2 border-2 border-dashed border-slate-400 rounded-2xl">
                <h4 className='-mb-1 text-sm text-left text-gray-600 capitalize '>NYSC certificate </h4>
                <div className="flex items-center justify-between p-2 my-2 space-x-2 bg-slate-100 rounded-xl">
                  <span ><GrDocumentNotes size={24} className='text-green-600 cursor-pointer' onClick={() => { handleDownload(data?.data?.nysc, 'nysc') }} /></span>
                  <span className="mr-auto text-sm font-semibold text-neutral-600">nysc-certificate.jpg</span>
                  <ButtonComponent
                    border='1px solid #ff8787'
                    backgroundColor="#ff8787"
                    height="30px"
                    radius="40px"
                    width="80px"
                    fontSize='14px'
                    marginRight=''
                    color="#fff"
                    onClick={() => {

                    }}
                  > Reject</ButtonComponent>
                </div>
              </div>

              {/* <span className="flex justify-end mt-4 bg-blue-500"> */}
              <ButtonComponent
                border="none"
                backgroundColor="#00AF50"
                height="38px"
                radius="100px"
                width="170px"
                fontSize='14px'
                marginRight=''
                marginLeft='auto'
                onClick={() => {

                }}
              > Approve</ButtonComponent>

              {/* </span> */}
              {/* admin */}
            </>)
          : (
            <form onSubmit={handleSubmit} className='space-y-4'>

              <DropZone name='passport' helper2='Maximum file size: 5MB' helper='Scan the copy of your original document (pdf,png,jpg)' onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleDropZoneChange('passport', event.target.files?.[0]?.name)
                setValues({ ...values, [event.target.name]: event.target.files?.[0] })
              }} documentName={documentNames.passport} title='Passport Photograph' />

              <DropZone name='nysc' helper2='Maximum file size: 5MB' helper='Scan the copy of your original document (pdf,png,jpg)' onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleDropZoneChange('nysc', event.target.files?.[0]?.name)
                setValues({ ...values, [event.target.name]: event.target.files?.[0] })
              }} documentName={documentNames.nysc} title='NYSC Certificate' />

              <div className="flex justify-end flex-1 w-full mt-4 rounded-xl">
                {/* <ButtonComponent
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
                > Save and close</ButtonComponent> */}
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
                > {loading ? 'Uploading...' : 'Save And Continue '}</ButtonComponent>
              </div>
            </form>)}
      </div>
    </div>
  )
}

export default Uploads
