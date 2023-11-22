import React from 'react'
import CompanyLogo from 'src/Asset/CompanyLogo.png'
import guy from 'src/Asset/guy.jpeg'
import qrcode from 'src/Asset/bi_qr-code.png'

const StaffsummaryPage: React.FC = () => {
  return (
    <div className="h-[1409px] bg-white rounded-xl flex-col justify-start items-start">
      <div className="w-[100%] h-[1277px] relative bg-white border-2">
        <div className="flex-col justify-end items-center gap-2 inline-flex">
          <div className="w-16 h-16 rounded-[200px] justify-center items-center inline-flex">
            <img className="w-16 h-16 rounded-full" src={CompanyLogo} alt="Company Logo" />
          </div>
          <div className="flex-col justify-center items-center gap-[4.58px] flex">
            <div className="text-zinc-800 text-2xl font-bold font-['Mulish']">NNPC Gas Marketing Limited</div>
            <div className="text-zinc-800 text-base font-bold font-['Mulish']">STAFF PRINTOUT</div>
          </div>
        </div>
        <div className="p-[15.17px] left-[327.50px] top-[1224.67px] absolute justify-center items-center gap-[15.17px] inline-flex">
          <div className="text-center text-neutral-400 text-base font-medium font-['Red Hat Display'] mt-[130px]">Powered by John Okor</div>
        </div>
        <div style={{ border: '6px solid green' }} className="p-5 rounded-lg border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[500px] justify-between items-start inline-flex">
            <div className="h-10 px-[19px] py-2.5 bg-green-600 rounded justify-start items-center gap-2.5 flex">
              <div className="text-white text-base font-bold font-['Mulish']">Personal Information</div>
            </div>
          </div>
          <div className="justify-between items-start inline-flex">
            <div className="h-[130px] justify-between items-start flex">
              <img className="w-[120px] h-[130px]" src={guy} alt="Guy picture" />
              <div className=" flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className=" pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[100px] text-slate-400 pr-[42px] text-xs font-bold font-['Mulish'] uppercase">Title:</div>
                  </div>
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-slate-400 text-xs pl-[12px] font-bold font-['Mulish']">LAST NAME:</div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className=" pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[100px] text-slate-400 text-xs font-bold font-['Mulish']">FIRST NAME:</div>
                  </div>
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-slate-400 text-xs pl-[12px] font-bold font-['Mulish']">OTHER NAMES:</div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className="pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="text-slate-400 text-xs pl-[12px] font-bold font-['Mulish'] uppercase">PHONE NUMBER: </div>
                  </div>
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-slate-400 text-xs pl-[12px] font-bold font-['Mulish']">EMAIL ADDRESS:</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '100%' }} className="h-[130px] justify-between items-start flex">
              <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-zinc-950 text-xs font-bold font-['Mulish']">Mr.</div>
                  </div>
                  <div className="pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[100px] text-zinc-950 text-xs pr-[42px] font-bold font-['Mulish'] uppercase">Abraham</div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-zinc-950 text-xs font-bold font-['Mulish']">BAKO</div>
                  </div>
                  <div className="w-[234px] pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-950 text-xs font-bold font-['Mulish'] uppercase">CLEMENT</div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-1 flex">
                  <div className="px-1 justify-center items-start gap-2.5 inline-flex">
                    <div className="text-zinc-950 text-xs font-bold font-['Mulish']">0803430480340</div>
                  </div>
                  <div className="w-[234px] pl-1 py-1 bg-slate-50 rounded justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-950 text-xs font-bold font-['Mulish']">username@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="w-[130px] h-[130px] relative">
                <img className="" src={qrcode} alt="qr code" />
              </div>
            </div>
          </div>
          <div className=" px-[19px] py-2.5 bg-green-600 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold font-['Mulish']">Other Personal Information</div>
          </div>
          <div className="px-1 flex-col justify-start items-start gap-[3px] flex">
            <div style={{ columnGap: '20px' }} className="flex justify-start items-start w-[100%]">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Verification No:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">9375829948</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">PSN:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">1665201239428</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Date of Biometric Capture:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Captured By:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">DOB:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">1985-01-01</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">BVN DOB:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-medium font-['Mulish']">1983-01-01</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Marital Status:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Single</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Gender:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Male</div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">State:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Abia</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Lga:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Aba South</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">City:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Aba</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Nationality:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Nigeria</div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Address:</div>
                </div>
                <div className="h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-[19px] py-2.5 bg-green-600 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold font-['Mulish']">Employee Work Information</div>
          </div>
          <div className="px-1 flex-col justify-start items-start gap-[3px] flex">
            <div className=" justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Designation:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Union Membership:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">MDA:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Department:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Employment Status:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">MINISTRY OF FINANCE</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Date of First Appointment:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">2019-01-01</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Date of Retirement:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">1/1/2045, 12:00 AM</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Salary Grade Level / Step:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">15 / 6</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">PFA:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">CADRE:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Pension Number:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">National Identity number:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
            </div>
            <div className=" justify-start items-start gap-10 inline-flex">
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Secret File:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Date of Comfirmation:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">0000-00-00</div>
                </div>
              </div>
              <div className="w-[129px] flex-col justify-start items-start inline-flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Date of Present Appt.:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">0000-00-00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] justify-between items-start inline-flex">
            <div className="h-10 px-[19px] py-2.5 bg-green-600 rounded justify-start items-center gap-2.5 flex">
              <div className="text-white text-base font-bold font-['Mulish']">Education Information</div>
            </div>
            <div className="h-10 px-[19px] py-2.5 bg-green-600 rounded justify-start items-center gap-2.5 flex">
              <div className="text-white text-base font-bold font-['Mulish']">Account Details Supplied By Ministry</div>
            </div>
          </div>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="w-[391px] px-1 flex-col justify-start items-start gap-1 inline-flex">
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Qualification Type:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Institution Attended :</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Grade:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">N/A</div>
                </div>
              </div>
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Year of graduation:</div>
                </div>
                <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">0000-00-00</div>
                </div>
              </div>
            </div>
            <div className="w-[391px] px-1 flex-col justify-start items-start gap-1 inline-flex">
              <div className="h-[53px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Account Name:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">ABENGOWE CLEMENT CHUKWUEMEKA</div>
                </div>
              </div>
              <div className="w-[387px] justify-between items-start inline-flex">
                <div className="w-[129px] flex-col justify-start items-start inline-flex">
                  <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                    <div className="text-slate-400 text-sm font-normal font-['Mulish']">Account Number:</div>
                  </div>
                  <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                    <div className="text-zinc-950 text-sm font-bold font-['Mulish']">0091003515</div>
                  </div>
                </div>
                <div className="w-[129px] flex-col justify-start items-start inline-flex">
                  <div className="w-[129px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                    <div className="text-slate-400 text-sm font-normal font-['Mulish']">BVN:</div>
                  </div>
                  <div className="w-[129px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                    <div className="text-zinc-950 text-sm font-bold font-['Mulish']">123456789032</div>
                  </div>
                </div>
              </div>
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Bank:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">Kuda Bank</div>
                </div>
              </div>
              <div className="h-[47px] flex-col justify-start items-start flex">
                <div className="w-[391px] h-[33px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-slate-400 text-sm font-normal font-['Mulish']">Name Returned On Bank Account Validation:</div>
                </div>
                <div className="w-[391px] h-[22px] justify-start items-center gap-[25px] inline-flex">
                  <div className="text-zinc-950 text-sm font-bold font-['Mulish']">ROSELY CLARA OBIORA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffsummaryPage
