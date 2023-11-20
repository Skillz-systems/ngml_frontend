import React from 'react'
import ButtonComponent from '../ButtonComponent'
import CustomInput from '../FormFields/CustomInput'

const StaffDocumentUpload: React.FC = () => {
  return (
    <>
      <div className="w-full h-[393px] p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-slate-600 text-base font-bold font-['Mulish'] leading-none">DOCUMENT UPLOADS</div>
        <div className="self-stretch h-[130px] p-6 rounded-xl border border-green-600 flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch h-[18px] flex-col justify-start items-start gap-1 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="text-center text-slate-600 text-sm font-medium font-['Mulish']">Passport Photograph</div>
            </div>
          </div>
          <div className="self-stretch p-3 bg-lime-50 rounded-xl border border-gray-200 justify-start items-center gap-4 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-8 h-8 bg-lime-200 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-zinc-950 text-sm font-bold font-['Mulish'] leading-[14px]">Passport_original.jpg</div>
                <div className="text-slate-400 text-xs font-normal font-['Mulish'] leading-3">120kb</div>
              </div>
            </div>
            <div className="w-6 h-6 relative"></div>
          </div>
        </div>
        <div className="self-stretch h-[172px] p-6 rounded-xl border border-gray-300 flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch h-[124px] flex-col justify-start items-start gap-1 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="text-center text-slate-600 text-sm font-medium font-['Mulish']">NYSC Certificate</div>
            </div>
            <div className="self-stretch px-6 py-4 bg-slate-50 rounded-xl border border-gray-300 justify-center items-center gap-2.5 inline-flex">
              <div className="w-8 h-8 bg-slate-50 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
              {/* <div><span className="text-neutral-400 text-base font-normal font-['Mulish'] leading-none tracking-tight">Drag and drop or </span><span className="text-green-600 text-base font-normal font-['Mulish'] leading-none tracking-tight">browse</span></div> */}
              <CustomInput name='accountnumber' required
                label=""
                placeholder="2400306489"
                type="file"
                className=""
                error=''
              // onChange={handleChange}
              />
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-slate-400 text-xs font-medium font-['Mulish']">Scan the copy of your original document (pdf,png,jpg)</div>
              <div className="text-center text-slate-400 text-xs font-medium font-['Mulish']">Maximum file size: 5MB</div>
            </div>
          </div>
        </div>
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
    </>
  )
}

export default StaffDocumentUpload
