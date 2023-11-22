import React, { useState, type FC, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import print from 'src/Asset/png-icons/print.png'
import AltDownArrow from 'src/Asset/png-icons/AltDownArrow.png'
import { type StaffInterface, getStaffById } from 'src/api/api'
import TabList, { type TabListInterface } from 'src/Components/Tabs/TabList'
import TabPanel from 'src/Components/Tabs/TabPanel'
import { useStaffDispatch } from 'src/Context/StaffDataContext'
import { useAuthState } from 'src/Context/AuthContext'

const tablist: TabListInterface[] = [
  {
    name: 'staff information',
    ref: 'staffinformation',
    children: [
      {
        name: 'personal details',
        ref: 'personal'
      },
      {
        name: 'next of kin details',
        ref: 'nextofkin'
      },
      {
        name: 'education details',
        ref: 'education'
      },
      {
        name: 'pension details',
        ref: 'pension'
      },
      {
        name: 'tax details',
        ref: 'tax'
      }
    ]
  },
  {
    name: 'uploads',
    ref: 'uploads'
  },
  {
    name: 'employment details',
    ref: 'employment'
  },
  {
    name: 'portal details',
    ref: 'portal'
  },
  {
    name: 'summary',
    ref: 'summary'
  }

]

const SingleStaff: FC = () => {
  const { user } = useAuthState()
  const staffDispatch = useStaffDispatch()
  const [activeTab, setActiveTab] = useState<string>('staffinformation')
  const { id } = useParams()
  const navigate = useNavigate()
  const [staff, setStaff] = useState<StaffInterface>()
  const [panelName, setPanelName] = useState<string>('staffinformation')

  // const [currentId, setCurrentId] = useState(id)

  // console.log(currentId)
  const handleGet = async (): Promise<void> => {
    try {
      const res = await getStaffById(id)
      console.log(id)
      staffDispatch({ type: 'STAFF', payload: res?.data.data })
      setStaff(res?.data.data)
      console.log(staff)
    } catch (error: any) {
      console.log(error)
    }
  }
  useEffect(() => {
    // if (id === null) {
    //   setCurrentId(user?._id)
    // }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      console.log(id)
      await handleGet()
      console.log(staff)
    }

    void fetchData()
  }, [])

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref)
    setPanelName(tab.name)
  }

  return (
    <div className="flex-1 p-4 m-5 overflow-x-hidden bg-white/40 rounded-xl">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-medium text-left capitalize text-neutral-600">
            {user?.type === 'SUPERADMIN' ? (staff?.firstname + ' ' + staff?.lastname) : ('Staff page')}
          </p>
        </div>

        <div className='flex flex-row gap-[10px]'>
          {' '}
          <p className="px-4 py-1 transition-all duration-300 ease-in-out border border-white cursor-pointer hover:text-neutral-700 rounded-3xl text-neutral-600" onClick={() => { navigate(-1) }}>  {user?.type === 'SUPERADMIN' ? ('Go Back') : ('Cancel')}
          </p>
          {activeTab === 'summary' && (
            <div style={{ alignItems: 'center' }} className="flex items-center gap-4">

              <div className="">

                <div className="inline-flex items-center justify-center w-4 h-4">

                  <div className="relative flex flex-col items-start justify-start w-4 h-4"></div>
                  <img
                    className="relative flex flex-col items-start justify-start w-4 h-4"
                    src={print}
                  />
                </div>
              </div>
              <div
                style={{ whiteSpace: 'nowrap' }}
                className="w-[157px] px-[20px] py-[13px] rounded-[32px] border border-gray-300 justify-center items-center gap-2 flex"
              >
                <span className="flex items-center justify-center w-4 h-4">
                  <img src={AltDownArrow} />
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">
                  Download as PDF
                </span>
              </div>
              <span className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="inline-flex items-center justify-center w-4 h-4">
                  ...
                  <div className="relative flex flex-col items-start justify-start w-4 h-4"></div>
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
      <>
        <div style={{ border: '5px solid green' }} className="flex flex-1 mt-4">
          <TabList tablist={tablist} onTabChange={handleTabChange} activeTab={activeTab} />
          <TabPanel activeTab={activeTab} panelName={panelName} />
        </div>
      </>
    </div>
  )
}

export default SingleStaff
