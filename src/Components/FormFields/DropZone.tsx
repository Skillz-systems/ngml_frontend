import React, { type ChangeEvent } from 'react'

import { AiOutlineCloudUpload } from 'react-icons/ai'

interface DropZoneInterface {
  title: string
  name: string
  description?: string
  helper?: string
  helper2?: string
  required?: boolean
  documentName: string | null
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const DropZone: React.FC<DropZoneInterface> = ({ onChange, description = 'Drag and drop or browse', name, helper2, helper, documentName, title, required = true }) => {
  return (
    <div>

      <div className="border-2 border-slate-400 border-dashed rounded-2xl w-full py-2 px-3">
        <h4 className='text-left text-gray-600 text-sm capitalize -mb-1 '>{title}</h4>
        <div className="bg-slate-100 rounded-xl relative">

          <label className="flex-1 p-4 flex justify-center items-center mt-2" htmlFor={name}>

            <AiOutlineCloudUpload size={30} className='text-green-600' /> <span className='text-sm font-light text-green-600 ml-3'>
              {documentName ?? description}
            </span>
          </label>
          <input type="file" name={name} id={name} className='' hidden onChange={onChange} required={required} />
        </div>
        <div className="flex flex-col justify-start">

          <span className="text-xs text-left text-slate-600">{helper}</span>
          <span className="text-xs text-left text-slate-600">{helper2}</span>
        </div>
      </div>
    </div>
  )
}

export default DropZone
