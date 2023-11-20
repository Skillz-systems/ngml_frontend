import React, { useState, type ChangeEvent } from 'react'

import DropZone from '../FormFields/DropZone'
import ButtonComponent from '../ButtonComponent'

const Uploads: React.FC = () => {
  const [documentNames, setDocumentNames] = useState<Record<string, string | any>>({})

  const handleDropZoneChange = (name: string, documentName: string | any): void => {
    setDocumentNames((prevDocumentNames) => ({
      ...prevDocumentNames,
      [name]: documentName
    }))
  }
  //! OLD CODE COULD NOT SOLVE THE ISSUE OF MULTIPLE DROPZONES
  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const files = event.target.files

  //   if ((files != null) && files.length > 0) {
  //     const fileName = files[0].name
  //     setSelectedFileName(fileName)
  //   }
  // }
  return (
    <div>
      <div className='flex-1 bg-white w-full p-4 space-y-8  rounded-xl'>
        <h3 className='text-left text-lg uppercase font-medium text-neutral-500 -mb-2'>Document Uploads</h3>
        {/* old code  */}
        {/* <DropZone name='passport' description='Drag and drop or brows' helper2='Maximum file size: 5MB' helper='Scan the copy of your original document (pdf,png,jpg)' onChange={handleFileChange} documentName={selectedFileName} /> */}

        <DropZone name='passport' helper2='Maximum file size: 5MB' helper='Scan the copy of your original document (pdf,png,jpg)' onChange={(event: ChangeEvent<HTMLInputElement>) => { handleDropZoneChange('passport', event.target.files?.[0]?.name) }} documentName={documentNames.passport} title='Passport Photograph' />

        <DropZone name='nysc' helper2='Maximum file size: 5MB' helper='Scan the copy of your original document (pdf,png,jpg)' onChange={(event: ChangeEvent<HTMLInputElement>) => { handleDropZoneChange('nysc', event.target.files?.[0]?.name) }} documentName={documentNames.nysc} title='NYSC Certificate' />

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
      </div>
    </div>
  )
}

export default Uploads
