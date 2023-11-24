/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, type FC, useEffect } from 'react'
import Tabs from 'src/Components/Tabs/Tabs'
import print from 'src/Asset/png-icons/print.png'
import AltDownArrow from 'src/Asset/png-icons/AltDownArrow.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { toast } from 'react-toastify'

const Staffpage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('staffinformation')

  useEffect(() => {

  }, [activeTab])

  const generatePDF = async () => {
    alert('llll')
    const divToCapture = document.getElementById('StaffSummaryDataPrintOut') // Replace 'divId' with your div's ID
    console.log(divToCapture, 'divToCapturedivToCapture')
    // if (divToCapture) {
    //   try {
    //     const canvas = await html2canvas(divToCapture)
    //     const imgData = canvas.toDataURL('image/png')

    //     const pdf = new jsPDF()
    //     const imgHeight = (canvas.height * 208) / canvas.width
    //     pdf.addImage(imgData, 'PNG', 0, 0, 208, imgHeight)
    //     pdf.save('div_snapshot.pdf')
    //   } catch (error) {
    //     console.error('Error generating PDF:', error)
    //   }
    // }
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
      pdf.save('snapshot.pdf')
      toast.success('Successful!!')
    }
  }

  return (
    <div className="m-5 bg-white/40 flex-1 p-4 overflow-x-hidden rounded-xl">
      <div className="flex justify-between">
        <div> <h3 className="text-left capitalize font-semibold text-3xl text-neutral-600">
          Staff page
        </h3></div>

        <div className='flex flex-row gap-[10px]'>
          {' '}
          <div style={{ height: '100%', justifyItems: 'center', alignItems: 'center' }} className="flex justify-center px-4 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">
            Cancel
          </div>

          {activeTab === 'summary' && (
            <div style={{ alignItems: 'center' }} className="items-center gap-4 flex">

              <div className="">

                <div className="w-4 h-4 justify-center items-center inline-flex">

                  <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                  <img
                    className="w-4 h-4 relative flex-col justify-start items-start flex"
                    src={print}
                  />
                </div>
              </div>
              <div
                style={{ whiteSpace: 'nowrap' }}
                className="w-[157px] px-[20px] py-[13px] rounded-[32px] border border-gray-300 justify-center items-center gap-2 flex"
              >
                <div className="w-4 h-4 justify-center items-center flex">
                  {/* <div className="w-4 h-4 relative rounded-[5px] flex-col justify-start items-start flex"></div> */}
                  <img src={AltDownArrow} />
                </div>
                <div style={{ cursor: 'pointer' }} onClick={() => { generatePDF() }} className="text-slate-600 text-xs font-normal font-['Mulish'] leading-3">
                  Download as PDF
                </div>
              </div>
              <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                  ...
                  <div className="w-4 h-4 relative flex-col justify-start items-start flex"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  )
}

export default Staffpage
