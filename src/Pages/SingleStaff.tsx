/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, type FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import print from 'src/Asset/png-icons/print.png'
import AltDownArrow from 'src/Asset/png-icons/AltDownArrow.png'
// import { type StaffInterface, getStaffById } from 'src/api/api'

import TabList, { type TabListInterface } from 'src/Components/Tabs/TabList'
import TabPanel from 'src/Components/Tabs/TabPanel'
// import { useStaffDispatch } from 'src/Context/StaffDataContext'
import { useAuthState } from 'src/Context/AuthContext'
import useDataFetcher from 'src/api/swr'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { toast } from 'react-toastify'

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
  const { id } = useParams()
  const { user } = useAuthState()
  const [activeTab, setActiveTab] = useState<string>('staffinformation')
  const [panelName, setPanelName] = useState<string>('staffinformation')
  const navigate = useNavigate()

  const { data } = useDataFetcher({ url: `/staff/${id}` })

  // const staffDispatch = useStaffDispatch()
  // const [staff, setStaff] = useState<StaffInterface>()
  // const handleGet = async (): Promise<void> => {
  //   try {
  //     const res = await getStaffById(id)
  //     console.log(id)
  //     staffDispatch({ type: 'STAFF', payload: res?.data.data })
  //     setStaff(res?.data.data)
  //     console.log(staff)
  //   } catch (error: any) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(id)
  //     await handleGet()
  //     console.log(staff)
  //   }

  //   void fetchData()
  // }, [])
  const generatePageTitle = (user: any, data: any) => (
    user?.type === 'SUPERADMIN'
      ? `${data?.data?.firstname} ${data?.data?.lastname}`
      : 'Staff page'
  )
  const pageTitle = generatePageTitle(user, data)
  console.log(pageTitle)
  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref)
    setPanelName(tab.name)
  }

  const generatePDF = async () => {
    const divToCapture = document.getElementById('StaffSummaryDataPrintOut') // Replace 'divId' with your div's ID

    console.log(divToCapture, 'sjsjsjs')
    if (divToCapture) {
      try {
        const contentElement = divToCapture

        if (contentElement) {
          const canvas = await html2canvas(contentElement) // Capture the content as a canvas
          const imgData = canvas.toDataURL('image/png') // Convert the canvas to base64-encoded image data
          const pdf = new jsPDF() // Create a new PDF document
          const imgWidth = pdf.internal.pageSize.getWidth() // Get the page width
          const imgHeight = pdf.internal.pageSize.getHeight() // Get the page height
          const ratio = Math.min(imgWidth / canvas.width, imgHeight / canvas.height) // Calculate the scaling ratio
          const imgX = (imgWidth - canvas.width * ratio) / 2 // Calculate the horizontal offset
          const imgY = 30 // Adjust the vertical position as needed
          pdf.addImage(imgData, 'PNG', imgX, imgY, canvas.width * ratio, canvas.height * ratio) // Add the image to the PDF
          pdf.save(`${data?.data?.firstname ?? 'staff'}details.pdf`)
        }

        toast.success('Successful!!')
      } catch (error) {
        console.error('Error generating PDF:', error)
      }
    }
  }

  return (
    <div className="flex-1 p-4 m-5 overflow-x-hidden bg-white/40 rounded-xl">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-medium text-left capitalize text-neutral-600">
            {/* {user?.type === 'SUPERADMIN' ? (data?.data?.firstname + ' ' + data?.data?.lastname) : ('Staff page')} */}
            {pageTitle}
          </p>
        </div>

        <div className='flex flex-row gap-[10px]'>
          {' '}
          <p className="px-4 py-1 transition-all duration-300 ease-in-out border border-white cursor-pointer hover:text-neutral-700 rounded-3xl text-neutral-600" onClick={() => { navigate(-1) }}>  {user?.type === 'SUPERADMIN' ? ('Go Back') : ('Cancel')}
          </p>
          {activeTab === 'summary' && (
            <div style={{ alignItems: 'center' }} className="flex items-center gap-3">

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
                <span style={{ cursor: 'pointer' }} onClick={() => { generatePDF() }} className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">
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
        <div className="flex flex-1 mt-4">
          <TabList tablist={tablist} onTabChange={handleTabChange} activeTab={activeTab} />
          <TabPanel activeTab={activeTab} panelName={panelName} />
        </div>
      </>
    </div>
  )
}

export default SingleStaff
