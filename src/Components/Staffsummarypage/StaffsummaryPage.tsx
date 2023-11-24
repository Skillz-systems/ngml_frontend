import React from 'react'
import CompanyLogo from 'src/Asset/CompanyLogo.png'
import guy from 'src/Asset/guy.jpeg'
import qrcode from 'src/Asset/bi_qr-code.png'

const StaffsummaryPage: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 md:p-8">
      <div className="w-16 h-16 rounded-full justify-center items-center inline-flex mt-6">
        <img className="w-16 rounded-full h-16" src={CompanyLogo} />
      </div>
      <div className="flex-col justify-center items-center mt-4 md:mt-8">
        <div className="text-zinc-800 text-2xl font-bold font-['Mulish']">NNPC Gas Marketing Limited</div>
        <div className="text-zinc-800 text-base font-bold font-['Mulish']">STAFF PRINTOUT</div>
      </div>
      <div className='p-4 md:p-8'>
        <div className="w-full border border-gray-100 mt-4 rounded-[10px]">
          <div className='mr-3 ml-3'>
            <div className='w-full border bg-green-600 rounded-[10px] p-[10px] text-left mt-4'>
              <div className='text-white text-xl'>Personal Information</div>
            </div>
            <div className="flex item-center justify-between mt-3">
              <div className=''>
                <img src={guy} alt="Guy Picture" className='w-[130px]' />
              </div>
              <div className='ml-[-80px]'>
                <div className='pr-[110px] py-[5px] rounded-[3px] text-left bg-gray-100'>TITLE:</div>
                <div className='pr-[110px] text-left'>LAST NAME:</div>
                <div className='pr-[110px] py-[5px] rounded-[3px] bg-gray-100 text-left'>FIRST NAME:</div>
                <div className='pr-[110px] text-left'>OTHER NAMES:</div>
                <div className='pr-[110px] py-[5px] rounded-[3px] bg-gray-100 text-left'>PHONE NUMBERS:</div>
                <div className='pr-[110px] text-left'>EMAIL ADDRESS:</div>
              </div>
              <div>
                <div className='pr-[110px] font-bold text-left'>MR:</div>
                <div className='pr-[110px] py-[5px] rounded-[3px] bg-gray-100 font-bold text-left'>ABRAHAM:</div>
                <div className='pr-[110px] text-left font-bold'>BAKO:</div>
                <div className='pr-[110px] py-[5px] rounded-[3px] bg-gray-100 text-left font-bold'>CLEMENT:</div>
                <div className='pr-[110px] text-left font-bold'>08034304803:</div>
                <div className='pr-[110px] py-[5px] rounded-[3px] bg-gray-100 text-left font-bold'>username@gmail.com:</div>
              </div>
              <div>
                <img src={qrcode} alt="QR Code" className='w-[180px]' />
              </div>
            </div>
          </div>
          <div className='mr-3 ml-3'>
            <div className='w-full border bg-green-600 rounded-[10px] p-[10px] text-left mt-4'>
              <div className='text-white text-xl'>Other Personal Information</div>
            </div>
            <div className="flex item-center justify-between mt-3">
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>Verification Number</div>
                  <div className='font-bold'>9375829948</div>
                </div>
                <div>
                  <div className=''>DOB</div>
                  <div className='font-bold'>1985-01-01</div>
                </div>
                <div>
                  <div className=''>State</div>
                  <div className='font-bold'>Abia</div>
                </div>
                <div>
                  <div className=''>Address</div>
                  <div className='font-bold'>N/A</div>
                </div>
              </div>
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>PSN</div>
                  <div className='font-bold'>1665201239428</div>
                </div>
                <div>
                  <div className=''>BVN DOB</div>
                  <div className='font-bold'>1983-01-01</div>
                </div>
                <div>
                  <div className=''>LGA</div>
                  <div className='font-bold'>Abia South</div>
                </div>
              </div>
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>Date of Biometric Capture</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Marital Staus</div>
                  <div className='font-bold'>Single</div>
                </div>
                <div>
                  <div className=''>City</div>
                  <div className='font-bold'>Aba</div>
                </div>
              </div>
              <div className='space-y-4 text-left px-20'>
                <div>
                  <div className=''>Captured By</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Gender</div>
                  <div className='font-bold'>Male</div>
                </div>
                <div>
                  <div className=''>Nationality</div>
                  <div className='font-bold'>Nigerian</div>
                </div>
              </div>
            </div>
          </div>
          <div className='mr-3 ml-3'>
            <div className='w-full border bg-green-600 rounded-[10px] p-[10px] text-left mt-4'>
              <div className='text-white text-xl'>Employee Work Information</div>
            </div>
            <div className="flex item-center justify-between mt-3">
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>Designation</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Employment Status</div>
                  <div className='font-bold'>MINISTRY OF FINANCE</div>
                </div>
                <div>
                  <div className=''>PFA</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Secret File</div>
                  <div className='font-bold'>N/A</div>
                </div>
              </div>
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>Union Membership</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Date of First Appointment</div>
                  <div className='font-bold'>2019-01-01</div>
                </div>
                <div>
                  <div className=''>CADRE</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Date of Confirmation</div>
                  <div className='font-bold'>0000-00-00</div>
                </div>
              </div>
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>MDA</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Date of Retirement</div>
                  <div className='font-bold'>01/01/2045, 12:00 AM</div>
                </div>
                <div>
                  <div className=''>Pension Number</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Date of Present Appt</div>
                  <div className='font-bold'>0000-00-00</div>
                </div>
              </div>
              <div className='space-y-4 text-left'>
                <div>
                  <div className=''>Department</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Salary Grade Level/Step</div>
                  <div className='font-bold'>15/6</div>
                </div>
                <div>
                  <div className=''>National Identity Number</div>
                  <div className='font-bold'>N/A</div>
                </div>
              </div>
            </div>
            <div className="flex item-center justify-between mt-3 gap-6">
              <div className='space-y-4 text-left w-full'>
                <div className='w-full border bg-green-600 rounded-[10px] p-[10px] text-left mt-4'>
                  <div className='text-white text-xl'>Education Information</div>
                </div>
                <div>
                  <div className=''>Qualification Type</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Institution Attended</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Grade</div>
                  <div className='font-bold'>N/A</div>
                </div>
                <div>
                  <div className=''>Year of Graduation</div>
                  <div className='font-bold'>0000-00-00</div>
                </div>
              </div>
              <div className='space-y-4 text-left w-full'>
                <div className='w-full border bg-green-600 rounded-[10px] p-[10px] text-left mt-4'>
                  <div className='text-white text-xl'>Account Details Supplied By Ministry</div>
                </div>
                <div>
                  <div className=''>Account Name</div>
                  <div className='font-bold'>ABENGOWE CLEMENT CHUKWUEMEKA</div>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <div className=''>Account Number</div>
                    <div className='font-bold'>0091003515</div>
                  </div>
                  <div className='pr-[20px]'>
                    <div>BVN</div>
                    <div className='font-bold'>123456789032</div>
                  </div>
                </div>
                <div>
                  <div className=''>Name Returned on Bank Account Validation</div>
                  <div className='font-bold'>ROSELY CLARA OBIORA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-2'>Powered By John Okor</div>
    </div>
  )
}

export default StaffsummaryPage
