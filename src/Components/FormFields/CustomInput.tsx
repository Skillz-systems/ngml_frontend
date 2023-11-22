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
  disabled?: boolean
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
  name,
  disabled = false
}) => {
  // const [focused, setFocused] = useState<boolean>(false)
  // const handleFocus = (): void => {
  //   setFocused(true)
  // }
  return (
    <div className={`mb-1 w-full flex flex-col justify-start ${className}`}>
      {label !== null && (
        <label className="block text-sm font-medium text-left text-gray-500 capitalize">
          {label}
          <span className={` text-xl ${required ? 'text-red-600' : 'text-transparent'}`}>*</span>
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        // className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 error-input'
        className={`mt-1 p-2 border disabled:text-gray-400 rounded-md w-full focus:outline-none focus:border-green-500  text-neutral-700 ${((error ?? '').length > 0) ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        // value={value}
        onChange={onChange}
        disabled={disabled}
      // onBlur={handleFocus}
      // eslint-disable-next-line react/no-unknown-property
      // focused={focused.toString()}
      />

      {/* <span className="text-xs text-left text-transparent">{error}</span> */}

      {((error ?? '').length > 0) && (
        <p className="mt-1 text-xs text-left text-red-500">{error}</p>
      )}
    </div>
  )
}

export default CustomInput
