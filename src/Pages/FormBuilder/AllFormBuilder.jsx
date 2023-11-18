/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from 'src/config'

const AllFormBuilder = () => {
  const [allForms, setAllForms] = useState([])

  const navigate = useNavigate()

  const getAllFormBuilder = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/formbuilder/all`)
      console.log(response?.data?.data, 'responseI')
      setAllForms(response?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllFormBuilder()
  }, [])

  return <div className='gradient' style={{ paddingTop: '100px', padding: '0 10rem' }}>AllFormBuilder
  {/* {allForms?.map(form => <>
  <div className='flex'>
    <div>{form.title}</div> <div>{form.createdAt}</div>
  </div>
  </>)} */}

  <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">S/N</th>
                  <th scope="col" className="px-6 py-4">TITLE</th>
                  <th scope="col" className="px-6 py-4">CREATED</th>
                  <th scope="col" className="px-6 py-4">UPDATED</th>
                </tr>
              </thead>
              <tbody>

                {allForms?.map((form, index) => <>

  <tr onClick={(e) => { navigate(`/view-form/${form._id}`) }}
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4">{form.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">{form.createdAt}</td>
                  <td className="whitespace-nowrap px-6 py-4">{form.updatedAt}</td>
                </tr>
  </>)}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default AllFormBuilder
