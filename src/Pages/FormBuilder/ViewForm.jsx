/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from 'src/config'
import { FormGenerator } from 'cb-react-forms'
import { toolbarItems } from './FormBuilderScreen'
import { toast } from 'react-toastify'

export default function ViewForm () {
  const { id } = useParams()
  const [form, setForm] = useState([])

  const createForm = async (e) => {
    console.log(e)

    const resp = JSON.parse(e)

    console.log(resp, 'respresps', form)

    const data = {
      FormBuilderId: id
    }

    const formFieldAnswers = []

    for (const key in resp) {
      const field = form?.fields?.filter(field => field.fieldId === key)

      let response = resp[`${key}`]

      if (field[0].inputType === 'Dropdown') {
        const fieldOption = field[0]?.selectable?.filter(field => field.optionId === resp[`${key}`])

        console.log(fieldOption, 'fieldOptionfieldOption')
        response = fieldOption[0].value
      } else {
        response = resp[`${key}`]
      }

      formFieldAnswers.push({
        fieldId: field[0].fieldId,
        response,
        fieldKey: field[0].inputType,
        question: field[0].label
      })
    }

    data.formFieldAnswers = formFieldAnswers
    try {
      const response = await axios.post(
        `${BASE_URL}/formbuilder/submit-data`,
        data
      )
      toast.success('Form submitted')
      console.log(response, 'responseI')
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  const getAllFormBuilder = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/formbuilder/form/${id}`)
      console.log(response?.data?.data, 'responseI')
      setForm(response?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllFormBuilder()
  }, [])

  return (
    <div className='gradient'>ViewForm
      {form?.jsonForm !== undefined && <FormGenerator
    formData={JSON.parse(form?.jsonForm)}
    items={toolbarItems} // array of toolbar items
    onSubmit={async (e, c) => {
      console.log(e, c, 'OKOLI')
      await createForm(e)
    }}
  />}

    </div>
  )
}
