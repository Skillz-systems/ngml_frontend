import React from 'react'
const PortalDetailPage: React.FC = () => {
  return (
    <>
      <div className="w-[892px] h-[294px] p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch h-[262px] p-6 rounded-xl border border-green-600 flex-col justify-start items-start gap-6 flex">
          <div className="text-slate-600 text-base font-bold font-['Mulish'] leading-none">PORTAL LOGIN DETAILS</div>
          <div className="self-stretch h-[179px] flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="text-center text-slate-600 text-sm font-medium font-['Mulish']">Access Level</div>
              </div>
              <div className="self-stretch px-4 py-2 bg-slate-50 rounded-xl border border-green-900 justify-start items-center gap-[9px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-zinc-950 text-sm font-medium font-['Mulish'] leading-[14px]">Entry Level</div>
                </div>
                <div className="rounded-[40px] justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="text-center text-slate-600 text-sm font-medium font-['Mulish']">Login Email</div>
                </div>
                <div className="self-stretch px-4 py-2 bg-slate-50 rounded-xl border border-green-900 justify-start items-center gap-[9px] inline-flex">
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-zinc-950 text-sm font-medium font-['Mulish'] leading-[14px]">okor.john@ngml.gov.ng</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="text-center text-slate-600 text-sm font-medium font-['Mulish']">Password</div>
                </div>
                <div className="self-stretch px-4 py-2 bg-slate-50 rounded-xl border border-green-900 justify-start items-center gap-[9px] inline-flex">
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-zinc-950 text-sm font-medium font-['Mulish'] leading-[14px]">123456789</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-slate-600 text-[10px] font-normal font-['Mulish'] leading-[10px] tracking-tight">The user will be mandated to change the password on entry. </div>
          </div>
        </div>
      </div>
      <div className="w-[892px] h-14 mt-2 p-3 bg-white rounded-xl justify-end items-center gap-4 inline-flex">
        <div className="w-[186px] px-8 py-[13px] rounded-[32px] border border-gray-300 justify-center items-center gap-2.5 flex">
          <div className="text-slate-600 text-sm font-normal font-['Mulish'] leading-[14px]">Save and Close</div>
        </div>
        <div className="w-[186px] px-8 py-[13px] bg-green-600 rounded-[32px] justify-center items-center gap-2.5 flex">
          <div className="text-white text-sm font-normal font-['Mulish'] leading-[14px]">Save and Continue</div>
        </div>
      </div>
    </>
  )
}
export default PortalDetailPage
