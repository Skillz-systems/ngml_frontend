import React from 'react'
import type { ChangeEvent } from 'react'

/**
 * @component TextInput
 * @description
 * The `TextInput` component is a React functional component designed to render an input field with customizable features,
 * including type, label, value, name, placeholder, error handling, and optional icons.
 *
 * @props
 * @property {string} type - Type of the input field. Accepts either `'text'` or `'password'`.
 * @property {string} label - A string representing the label for the input field.
 * @property {string} value - The current value of the input field.
 * @property {string} name - The name attribute of the input field.
 * @property {string} placeholder - The placeholder text for the input field.
 * @property {boolean} error - A boolean indicating whether an error is present in the input field.
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} onChange - A function that handles the change event of the input field.
 * @property {React.ReactNode} icon - A React node representing the left icon of the input field.
 * @property {React.ReactNode} iconRight - A React node representing the right icon of the input field. This is required only when `type` is set to `'password'`.
 * @property {string} [width] - The width of the input field. Defaults to `'100%'` for type `'password'`, otherwise, can be customized.
 * @property {string} [height] - The height of the input field. Defaults to `'2.5rem'` for type `'password'`, otherwise, can be customized.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import type { ChangeEvent } from 'react';
 * import TextInput from './TextInput';
 *
 * const MyForm = () => {
 *   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
 *     // Handle input change logic here
 *   };
 *
 *   return (
 *     <TextInput
 *       type="text"
 *       label="Username"
 *       value=""
 *       name="username"
 *       placeholder="Enter your username"
 *       error={false}
 *       onChange={handleChange}
 *       icon={<YourIconComponent />}
 *       iconRight={<YourRightIconComponent />}
 *       width="300px"
 *       height="40px"
 *     />
 *   );
 * };
 *
 * export default MyForm;
 * ```
 */

interface TextInputProps {
  type: 'text' | 'password'
  label: string
  value: string
  name: string
  placeholder: string
  error: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  width?: string
  height?: string
  children?: string
  iconHeight?: string
  iconWidth?: string
  backgroundColor?: string
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
  iconRight,
  width = '100%',
  height = '2.5rem',
  children,
  iconHeight = '12px',
  iconWidth = '10px',
  backgroundColor
}) => {
  return (
    <div className="mb-2 p-4">
       <div className="relative flex">
        <span
          className="absolute left-2 top-2 bg-green-200 rounded-full p-4  "
          style={{ pointerEvents: 'none', height: iconHeight, width: iconWidth, backgroundColor }}
        >
          {icon}
        </span>
        <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-100 sm:w-[100%] pl-[80px] rounded-[50px] border ${error ? 'border-red-500' : 'border-gray-300'}`}
        style={{ width, height, fontStyle: 'italic', color: '#828DA9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      />
        {type === 'password'
          ? (
            <span
              className="absolute right-7 top-1 p-4"
              style={{ pointerEvents: 'none' }}
            >
              {iconRight}
            </span>
            )
          : null}
       </div>
      {error && (
        <p className="text-red-500 text-sm mt-2" >Input field can&apos; be empty!</p>
      )}
    </div>
  )
}

export default TextInput
