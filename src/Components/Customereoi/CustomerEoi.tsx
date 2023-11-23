import React from 'react'
import { useParams } from 'react-router-dom'
import useDataFetcher from 'src/api/swr'
import moment from 'moment'

const CustomerEoi: React.FC = () => {
  const { id } = useParams()

  const { data, error } = useDataFetcher({ url: `/customer/eoi/${id}` })
  console.log(error)
  console.log(data)

  return (
    <div className="w-full h-full p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch h-full bg-white rounded-xl border border-gray-200 flex-col justify-start items-start flex">
        <div className="self-stretch h-16 px-3 py-2.5 justify-between items-center inline-flex">
          <div className="text-slate-600 text-xl font-bold font-['Mulish'] leading-tight">EOI REQUEST</div>
          <div className="p-2 opacity-0 rounded-[32px] border justify-end items-center gap-2 flex">
            <div className="w-4 h-4 justify-center items-center flex">
              <div className="w-4 h-4 p-[0.83px] justify-center items-center inline-flex"></div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 py-2.5 bg-lime-50 border-t border-b border-gray-200 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-slate-400 text-xs font-bold font-['Mulish'] leading-3">Request Received On: </div>
            <div className="text-slate-400 text-xs font-normal font-['Mulish'] leading-3">{data?.data?.createdAt == null ? moment(data?.data?.createdAt).format('Do, MMM, YYYY; hh:mm:ssA') : '09th, Nov, 2023; 09:23:44AM'}</div>
          </div>
          <div className="p-2 bg-slate-200 rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-zinc-950 text-xs font-medium font-['Mulish'] leading-3 tracking-tight">New</div>
          </div>
        </div>
        <div className="self-stretch h-[94px] px-3 py-5 bg-slate-50 border-b border-gray-200 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="h-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-slate-400 text-sm font-semibold font-['Mulish'] leading-[14px]">Company Name:&nbsp; </div>
            </div>
            <div className="text-slate-600 text-sm font-bold font-['Mulish'] leading-[14px]">{data?.data?.companyName ?? 'Dangote Cement LTD.'}.</div>
          </div>
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="h-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-slate-400 text-sm font-semibold font-['Mulish'] leading-[14px]">Company Email:&nbsp; </div>
            </div>
            <div className="text-slate-600 text-sm font-bold font-['Mulish'] leading-[14px]">{data?.data?.email ?? 'info@dangotecement.org'}</div>
          </div>
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="h-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-slate-400 text-sm font-semibold font-['Mulish'] leading-[14px]">Company Number</div>
            </div>
            <div className="text-slate-600 text-sm font-bold font-['Mulish'] leading-[14px]">0901 000 0001</div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 p-3 bg-white justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 self-stretch p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch text-slate-400 text-base font-bold font-['Mulish'] leading-tight tracking-tight">REASON FOR REQUEST</div>
            <div className="self-stretch text-zinc-950 text-base font-medium font-['Mulish'] leading-tight tracking-tight">{data?.data?.reason ?? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}.</div>
          </div>
        </div>
        <div className="self-stretch px-3 py-2 border-0 justify-end items-center gap-2.5 inline-flex">
          <button className="w-[164px] px-8 border-0 py-[13px] bg-green-600 rounded-[32px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-xs font-normal font-['Mulish'] leading-3">Approve Request</div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default CustomerEoi
