import React from 'react'
const PortalDetailPage: React.FC = () => {
  return (
    <div className="w-full p-16 bg-white rounded-12 overflow-hidden flex flex-col justify-start items-start gap-24">
      <div className="self-stretch h-262 p-24 rounded-12 border-1 border-dotted border-00AF50 flex flex-col justify-start items-start gap-24">
        <div className="text-16 text-700 text-49526A leading-16 break-words">PORTAL LOGIN DETAILS</div>
        <div className="self-stretch h-179 flex flex-col justify-start items-end gap-16">
          <div className="self-stretch h-70 flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center text-14 text-500 text-49526A break-words">Access Level</div>
            </div>
            <div className="self-stretch p-8 bg-F6F8FA rounded-12 overflow-hidden border-1 border-solid border-005828 flex justify-start items-center gap-9">
              <div className="flex items-center gap-12">
                <div className="text-14 text-500 leading-14 break-words">Entry Level</div>
              </div>
              <div className="rounded-full justify-center items-center gap-10 flex">
                <div className="w-16 h-16 flex justify-center items-center">
                  <div className="w-16 h-16 relative flex flex-col justify-start items-start">
                    <div className="w-10.33 h-5 bg-828DA9"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center text-14 text-500 text-49526A break-words">Login Email</div>
            </div>
            <div className="self-stretch p-8 bg-F6F8FA rounded-12 overflow-hidden border-1 border-solid border-005828 flex justify-start items-center gap-9">
              <div className="flex items-center gap-12">
                <div className="text-14 text-500 leading-14 break-words">okor.john@ngml.gov.ng</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center text-14 text-500 text-49526A break-words">Password</div>
            </div>
            <div className="self-stretch p-8 bg-F6F8FA rounded-12 overflow-hidden border-1 border-solid border-005828 flex justify-start items-center gap-9">
              <div className="flex items-center gap-12">
                <div className="text-14 text-500 leading-14 break-words">123456789</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-10 text-400 leading-10 tracking-0.08 break-words">The user will be mandated to change the password on entry.</div>
      </div>
    </div>
  )
}
export default PortalDetailPage
