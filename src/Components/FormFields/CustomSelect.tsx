import React, { type FC, type ChangeEvent, type Ref } from 'react'

/**
 * Props for the CustomSelect component.
 */
interface SelectProps {
  /**
   * Ref to attach to the underlying select element.
   */
  ref: Ref<HTMLSelectElement>
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
}

/**
 * CustomSelect component for rendering a styled select input.
 * @param {SelectProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const CustomSelect: FC<SelectProps> = ({
  required = false,
  label,
  options,
  className,
  error,
  value,
  onChange,
  name
}) => {
  return (
    <div className={`mb-1 w-full  ${className}`}>
      {label !== null && (
        <label className="block text-sm font-medium text-gray-500 text-left capitalize">
          {label}
        </label>
      )}
      <select
        className={`mt-1 p-2 border rounded-md focus:outline-none focus:border-green-500 w-full uppercase ${error != null ? 'border-red-500' : 'border-gray-300'
          }`}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="uppercase">
            {option.label}
          </option>
        ))}
      </select>
      {error != null && (
        <p className="text-left text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}

export default CustomSelect
