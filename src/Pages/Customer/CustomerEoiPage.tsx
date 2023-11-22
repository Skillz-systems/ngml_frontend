import React, { useState, useEffect } from 'react'
import TabsCustomer from 'src/Components/CustomerTabs/TabsCustomer'
import LeftArrow from 'src/Asset/png-icons/LeftArrow.png'
import { useNavigate, useParams } from 'react-router-dom'
import useDataFetcher from 'src/api/swr'

const CustomerEoiPage: React.FC = () => {
  const { id } = useParams()

  const { data, error } = useDataFetcher({ url: `/customer/eoi/${id}` })

  console.log(error, 'errorerror')

  const [activeTab, setActiveTab] = useState<string>('staffinformation')
  const navigate = useNavigate()
  useEffect(() => {

  }, [activeTab])
  return (
    <div className="m-5 bg-white flex-1 p-5 rounded-xl">
      <div className="w-full h-8 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-8 h-8 bg-slate-200 rounded-2xl justify-center items-center gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              {/* <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div> */}
              <img onClick={() => { navigate(-1) }} src={LeftArrow} />
            </div>
          </div>
          <div className="text-center text-slate-600 text-[32px] font-semibold font-['Mulish'] leading-loose">{data?.data?.companyName}</div>
        </div>
        <div className="justify-end items-center gap-4 flex">
          <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="p-1 bg-green-600 rounded-3xl flex-col justify-end items-center gap-2.5 flex">
              <div className="text-white text-[10px] font-medium font-['Mulish'] leading-[10px] tracking-tight">04</div>
            </div>
            <div className="w-4 h-4 justify-center items-center inline-flex">
              <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
            </div>
          </div>
          <div className="w-[191px] px-8 py-[13px] bg-orange-100 rounded border border-gray-200 justify-center items-center gap-2.5 flex">
            <div className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">EOI Awaiting Approval</div>
          </div>
        </div>
      </div>
      <TabsCustomer setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  )
}
export default CustomerEoiPage
