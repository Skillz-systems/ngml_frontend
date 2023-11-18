import React, { type FC, type ChangeEvent } from 'react'

/**
 * Props for the CustomInput component.
 */
interface InputProps {
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
  // const [focused, setFocused] = useState<boolean>(false)
  // const handleFocus = (): void => {
  //   setFocused(true)
  // }
  return (
    <div className={`mb-1 w-full flex flex-col justify-start ${className}`}>
      {label !== null && (
        <label className="block text-left text-sm font-medium text-gray-500 capitalize">
          {label}
          <span className={` text-xl ${required ? 'text-red-600' : 'text-transparent'}`}>*</span>
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        // className='mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-green-500 border-gray-300 error-input'
        className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-green-500 ${((error ?? '').length > 0) ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        value={value}
        onChange={onChange}
      // onBlur={handleFocus}
      // eslint-disable-next-line react/no-unknown-property
      // focused={focused.toString()}
      />

      {/* <span className="text-left text-transparent text-xs">{error}</span> */}

      {((error ?? '').length > 0) && (
        <p className="text-left text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}

export default CustomInput
