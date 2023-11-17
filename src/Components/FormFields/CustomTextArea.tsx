import React, { type FC, type ChangeEvent } from 'react'

interface TextAreaProps {
  required?: boolean
  label?: string
  placeholder?: string
  className?: string
  error?: string
  value?: string
  name: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea: FC<TextAreaProps> = ({
  required = false,
  label,
  placeholder,
  className,
  error,
  value,
  onChange,
  name
}) => {
  return (
    <div className={`mb-1 w-full ${className}`}>
      {(label != null) && <label className="block text-left text-sm font-medium text-gray-500 capitalize">{label}</label>}
      <textarea
        placeholder={placeholder}
        className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-green-500 ${(error != null) ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      />
      {(error != null) && <p className="text-left text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default CustomTextArea
