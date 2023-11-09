import React from 'react'
import type { ChangeEvent } from 'react'

interface TextInputProps {
  type: 'text' | 'password'
  label: string
  value: string
  name: string
  placeholder: string
  error: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
  iconRight: React.ReactNode
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  onChange,
  icon,
  iconRight
}) => {
  return (
    <div className="mb-4 p-2 bg-primary rounded-lg shadow-custom">
       <div className="px-6 py-2 bg-xanthic shadow-custom">
       <div className="relative">
        <span
          className="absolute left-3 top-1 bg-green-200 rounded-full p-2"
          style={{ pointerEvents: 'none' }}
        >
          {icon}
        </span>
        {type === 'password'
          ? (
            <span
              className="absolute right-3 top-1 bg-green-200 rounded-full p-2"
              style={{ pointerEvents: 'none' }}
            >
              {iconRight}
            </span>
            )
          : null}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-100 py-2 px-3 pl-[55px] rounded-[50px] border ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
       </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2" >Input field can&apos; be empty!</p>
      )}
    </div>
  )
}

export default TextInput
