import React, { type FC, type ChangeEvent } from 'react'

interface TextAreaProps {
  required?: boolean
  label?: string
  placeholder?: string
  className?: string
  error?: string
  value?: string
  name: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea: FC<TextAreaProps> = ({
  required = true,
  label,
  placeholder,
  className,
  error,
  value,
  onChange,
  name,
  disabled = false
}) => {
  return (
    <div className={`mb-1 w-full ${className}`}>
      {(label != null) && <label className="block text-sm font-medium text-left text-gray-500 capitalize">{label}
        <span className={` text-xl ${required ? 'text-red-600' : 'text-transparent'}`}>*</span></label>}
      <textarea
        placeholder={placeholder}
        className={`mt-1 p-2 border rounded-md w-full focus:outline-none disabled:text-gray-400 focus:border-green-500 ${((error ?? '').length > 0) ? 'border-red-500' : 'border-gray-300'
          }`}
        defaultValue={value}
        required={required}
        // value={value}
        onChange={onChange}
        name={name} disabled={disabled}
      />
      {((error ?? '').length > 0) && (
        <p className="mt-1 text-xs text-left text-red-500">{error}</p>
      )}
    </div>
  )
}

export default CustomTextArea
