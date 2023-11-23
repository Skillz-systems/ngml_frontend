import React, { useState, type ChangeEvent } from 'react'
import { GrDocumentImage, GrDocumentNotes } from 'react-icons/gr'

import DropZone from '../FormFields/DropZone'
import ButtonComponent from '../ButtonComponent'
import { useAuthState } from 'src/Context/AuthContext'

const Uploads: React.FC = () => {
  const [documentNames, setDocumentNames] = useState<Record<string, string | any>>({})
  const { user } = useAuthState()
  const [values, setValues] = useState({})

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

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault()
    console.log(values)
    // setLoading(false)
  }
  return (
    <div>
      <div className='flex-1 bg-white w-full p-4 space-y-8  rounded-xl'>
        <h3 className='text-left text-lg uppercase font-medium text-neutral-500 -mb-2'>Document Uploads</h3>

        {user?.type === 'SUPERADMIN'
          ? (
            <>
              {/* admin */}
              <div className="border-2 border-slate-400 border-dashed rounded-2xl w-full py-2 px-3">
                <h4 className='text-left text-gray-600 text-sm capitalize -mb-1  '>passport </h4>
                <div className="bg-slate-100 rounded-xl my-2 p-2 flex justify-between items-center space-x-2">
                  <span ><GrDocumentImage size={24} className='text-green-600' /></span>
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
              <div className="border-2 border-slate-400 border-dashed rounded-2xl w-full py-2 px-3">
                <h4 className='text-left text-gray-600 text-sm capitalize -mb-1  '>NYSC certificate </h4>
                <div className="bg-slate-100 rounded-xl my-2 p-2 flex justify-between items-center space-x-2">
                  <span ><GrDocumentNotes size={24} className='text-green-600' /></span>
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

              {/* <span className="flex justify-end   mt-4 bg-blue-500"> */}
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

              <div className="flex justify-end flex-1 w-full  mt-4  rounded-xl">
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
            </form>)}
      </div>
    </div>
  )
}

export default Uploads
