import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Calendar from 'src/Asset/png-icons/Calendar.png'

const MangerPage: React.FC = () => {
  // State to simulate loading and fetched data
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const currentDate = new Date()

  // To format the date as a string (e.g., "2023-11-18")
  const formattedDate = currentDate.toISOString().split('T')[0]

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/eoi/password@gmail.com`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        setData(response.data)
        console.log('fgfhgdfhg', response)
      } catch (error: any) {
        setError(error)
        console.log('yes', error)
      } finally {
        setIsLoading(false)
      }
    }

    void fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error !== null && error !== undefined) {
    return <div>Error: {(error as Error).message}</div>
  }

  return (
    <div className="w-full h-full p-8 bg-white bg-opacity-50 rounded overflow-hidden flex flex-col justify-start items-start gap-8" style={{ overflowX: 'auto', height: '100vh' }}>
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-12">
          <div className="text-2xl font-semibold text-gray-700">Business Manager</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full justify-between flex gap-10">
        <div className="gap-4">
          <NavItem text="01 EOI Request" />
          <NavItem text="02 DDQ" />
          <NavItem text="03 Sites Visits" />
          <NavItem text="04 Cost Analysis" />
          <NavItem text="05 Agreement" />
          <NavItem text="06 Connect Project" />
          <NavItem text="Manager" />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[20px] border border-gray-300">
          <div className="flex-col gap-8">
            <div className="w-full bg-white p-4">
              <div className="text-xl text-left font-semibold text-gray-700">EOI REQUEST</div>
            </div>

            {isLoading && <div>Loading...</div>}

            {data != null && typeof data === 'object' && (
              <div className="border-t border-b border-gray-300 p-4 flex justify-between items-center" style={{ backgroundColor: '#F6FDEC' }}>
                <div className="flex items-center gap-10">
                  <div className="text-sm font-semibold text-gray-700">Request Received On</div>
                  <div className="text-sm font-normal text-gray-700">{formattedDate}</div>
                </div>
                <div className="p-2 bg-green-100 rounded-full flex items-center" style={{ backgroundColor: '#D2F69E' }}>
                  <div className="text-sm font-semibold text-gray-900">Approved</div>
                </div>
              </div>
            )}

            {isLoading && <div>Loading...</div>}

            {data != null && typeof data === 'object' && (
              <div className="h-94 p-4 bg-gray-100 border-t border-b border-gray-300 flex flex-col gap-4 mb-4">
                <div className="flex items-center gap-10">
                  <div className="text-sm font-semibold text-gray-700">Company Name</div>
                  <div className="text-sm font-bold text-gray-700">{data?.companyName}</div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-sm font-semibold text-gray-700">Company Email</div>
                  <div className="text-sm font-bold text-gray-700">{data?.email}</div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-sm font-semibold text-gray-700">Company Number</div>
                  <div className="text-sm font-bold text-gray-700">{data?.phoneNumber}</div>
                </div>
                <div className="absolute right-10 rounded-full border border-gray-400 p-2">
                  <img src={Calendar} alt="Calendar logo" width="20px" />
                </div>
              </div>
            )}

            {isLoading && <div>Loading...</div>}

            {/* Display content when data is available */}
            {data != null && typeof data === 'object' && (
              <div className="pb-80 bg-white border border-solid border-gray-300 rounded-[20px] mr-3 ml-3 pt-[30px]">
                <div className="text-gray-400 text-16 text-left font-bold pb-4 ml-[30px]">REASON FOR REQUEST</div>
                <div className="text-black text-16 text-left font-medium ml-[30px] mr[40px]">
                  {data.reason}
                </div>
              </div>
            )}

            {data != null && typeof data === 'object' && (
              <div style={{ backgroundColor: '#F6FDEC' }} className="w-full h-full mt-4 px-12 pt-8 pb-8 bg-white border-t border-solid border-gray-300 flex justify-between items-center">
                <div className="flex justify-start items-center gap-10">
                  <div className="text-gray-700 text-14 font-bold leading-14 break-words">Approved By</div>
                  <div className="text-gray-700 text-14 font-normal leading-14 break-words">John Okolie</div>
                </div>
                <div className="flex justify-start items-center gap-10">
                  <div className="text-gray-700 text-14 font-bold leading-14 break-words">Approved On</div>
                  <div className="text-gray-700 text-14 font-normal leading-14 break-words">{formattedDate}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const NavItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div style={{ whiteSpace: 'nowrap' }} className="text-left">
      <div className="font-semibold text-gray-600 text-left text-16 pb-2 pr-[50px]">{text}</div>
    </div>
  )
}

export default MangerPage
