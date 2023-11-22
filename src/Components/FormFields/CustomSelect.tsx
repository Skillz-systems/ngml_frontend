import React, { type FC, type ChangeEvent } from 'react'

/**
 * Props for the CustomSelect component.
 */
interface SelectProps {

  /**
   * Specifies whether the field is required.
   */
  required?: boolean
  /**
   * Label for the select field.
   */
  label?: string
  /**
   * Array of options for the select field.
   */
  options: Array<{ value: string, label: string }>
  /**
   * Additional class names for styling.
   */
  className?: string
  /**
   * Error message to display.
   */
  error?: string
  /**
   * Current value of the select field.
   */
  value?: string
  /**
   * Name attribute for the select field.
   */
  name: string
  /**
   * Function to handle onChange event.
   */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
}

/**
 * CustomSelect component for rendering a styled select input.
 * @param {SelectProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const CustomSelect: FC<SelectProps> = ({
  required = true,
  label,
  options,
  className,
  error,
  value,
  onChange,
  name,
  disabled = false
}) => {
  return (
    <div className={`mb-1 w-full flex flex-col justify-start ${className}`}>
      {label !== null && (
        <label className="block text-sm font-medium text-left text-gray-500 capitalize">
          {label}
          <span className={` text-xl ${required ? 'text-red-600' : 'text-transparent'}`}>*</span>
        </label>
      )}
      <select
        disabled={disabled}
        className={`mt-1 px-2 disabled:text-gray-400 border rounded-md focus:outline-none  text-neutral-700 focus:border-green-500 w-full py-2.5 uppercase ${((error ?? '').length > 0) ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        // value={value}
        onChange={onChange}
        name={name}
        defaultValue={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="uppercase">
            {option.label}
          </option>
        ))}
      </select>
      {((error ?? '').length > 0) && (
        <p className="mt-1 text-xs text-left text-red-500">{error}</p>
      )}
    </div>
  )
}

export default CustomSelect
