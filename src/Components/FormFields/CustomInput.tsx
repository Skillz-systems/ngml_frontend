import React, { type FC, type ChangeEvent, type Ref } from 'react'

/**
 * Props for the CustomInput component.
 */
interface InputProps {
  /**
   * Ref to attach to the underlying input element.
   */
  ref: Ref<HTMLInputElement>
  /**
   * Specifies whether the field is required.
   */
  required?: boolean
  /**
   * Label for the input field.
   */
  label?: string
  /**
   * Placeholder text for the input field.
   */
  placeholder?: string
  /**
   * Type of the input field.
   */
  type?: string
  /**
   * Name attribute for the input field.
   */
  name: string
  /**
   * Additional class names for styling.
   */
  className?: string
  /**
   * Error message to display.
   */
  error?: string
  /**
   * Current value of the input field.
   */
  value?: string
  /**
   * Function to handle onChange event.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

/**
 * CustomInput component for rendering a styled input field.
 * @param {InputProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const CustomInput: FC<InputProps> = ({
  required = true,
  label,
  placeholder,
  type = 'text',
  className,
  error,
  value,
  onChange,
  name
}) => {
  return (
    <div className={`mb-1 w-full ${className}`}>
      {label !== null && (
        <label className="block text-left text-sm font-medium text-gray-500 capitalize">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-green-500 ${error !== null ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        value={value}
        onChange={onChange}
      />
      {error !== null && (
        <p className="text-left text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}

export default CustomInput
