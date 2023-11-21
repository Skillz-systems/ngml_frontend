/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
// import { ReactFormBuilder } from 'react-form-builder2'
// import 'react-form-budist/app.css'
import { FormBuilder } from 'cb-react-forms'
// import { FormGenerator } from 'cb-react-forms'

import axios from 'axios'
import { BASE_URL } from 'src/config'
import { toast } from 'react-toastify'

export const toolbarItems = [
  {
    key: 'Header',
    name: 'Header Text',
    icon: 'fa fa-header'
  },
  {
    key: 'Label',
    name: 'Label',
    icon: 'fa fa-font'
  },
  {
    key: 'Paragraph',
    name: 'Paragraph',
    icon: 'fa fa-paragraph'
  },
  {
    key: 'LineBreak',
    name: 'Line Break',
    icon: 'fa fa-arrows-h'
  },
  {
    key: 'Dropdown',
    name: 'Dropdown',
    icon: 'fa fa-caret-square-o-down'
  },
  {
    key: 'Tags',
    name: 'Tags',
    icon: 'fa fa-tags'
  },
  {
    key: 'Checkboxes',
    name: 'Checkboxes',
    icon: 'fa fa-check-square-o'
  },
  {
    key: 'RadioButtons',
    name: 'Multiple Choice',
    icon: 'fa fa-dot-circle-o'
  },
  {
    key: 'TextInput',
    name: 'Text Input',
    icon: 'fa fa-font'
  },
  {
    key: 'NumberInput',
    name: 'Number Input',
    icon: 'fa fa-plus'
  },
  {
    key: 'TextArea',
    name: 'Multi-line Input',
    icon: 'fa fa-text-height'
  },
  {
    key: 'Rating',
    name: 'Rating',
    icon: 'fa fa-star'
  },
  {
    key: 'HyperLink',
    name: 'Web site',
    icon: 'fa fa-link'
  },
  {
    key: 'Range',
    name: 'Range',
    icon: 'fa fa-sliders'
  },
  {
    key: 'Email',
    name: 'Email',
    icon: 'fa fa-at'
  },
  {
    key: 'Date',
    name: 'Date',
    icon: 'fa fa-calendar'
  },
  {
    key: 'Signature',
    name: 'Signature',
    icon: 'fa fa-edit'
  }
]

// NOTE: You can edit the name and the icon (FontAwesome classes) fields but **do not** change the key.

export default function FormBuilderScreen() {
  const [form, setForm] = useState({})
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)

  const createForm = async (e) => {
    if (title === '') {
      setError(true)
      toast.error('Form title is required')
      return
    }
    const formData = JSON.parse(e)

    const newFormData = []

    for (let i = 0; i < formData.length; i++) {
      const data = {
        fieldId: formData[i].id,
        name: formData[i].element,
        label: formData[i]?.label?.blocks[0].text,
        inputType: formData[i]?.element,
        required: formData[i]?.required,
        placeholder: formData[i]?.label?.blocks[0]?.text
      }

      if (formData[i].options !== undefined) {
        const selectable = []

        const options = formData[i]?.options

        for (let i = 0; i < options.length; i++) {
          selectable.push({
            label: options[i].value,
            value: options[i].value,
            optionId: options[i].id
          })
        }

        data.selectable = selectable
      }

      newFormData.push(data)
    }

    const data = {
      fields: [...newFormData],
      jsonForm: e,
      title
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/formbuilder/create-form`,
        data
      )
      toast.success('Form created')
      console.log(response, 'responseI')
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <div className='' style={{ overflowX: 'auto', height: '100vh', width: '100%' }}>
      <div className='flex justify-center mb-10'>
        <input
          placeholder="Enter form title"
          style={{ background: '#FFFFFF', borderRadius: '8px', border: `${error ? '2px' : '1px'} solid ${error ? 'red' : '#ccc'} `, marginTop: '50px', width: '250px', height: '50px', paddingLeft: '10px' }}
          onChange={(e) => {
            setTitle(e.target.value)
            setError(false)
          }}
        />
      </div>
      <FormBuilder
        formData={(e, c) => {
          console.log(e, c, 'JOHNSON')
        }}
        onSubmit={async (e, c) => {
          console.log(e, c, 'OKOLI')
          await createForm(e)
        }} // function
        items={toolbarItems} // array of toolbar items
      />
    </div>
  )
}
