import React, { type ReactNode, type FC } from 'react'

/**
 * Represents the Default Button Component
 * @function
 * @param {string} children - react props to render wrapped children component
 * @param onClick: () => void (required) - Function to execute on button click.
 * @param {string} backgroundColor - Background color of the button .
 * @param {string} width - Width of the button .
 * @param {string} border - Border style of the button .
 * @param {string} radius - Border radius of the button .
 * @param {string} height- Height of the button .
 * @param {string} fontSize - Font size of the button text .
 * @param {string} color -Text color of the button .
 * @Description - this component is a reusable React component for creating customizable buttons and takes in the above props.

 */

interface ButtonComponentProps {
  children: ReactNode
  onClick: () => void
  backgroundColor?: string
  width?: string
  border?: string
  radius?: string
  height?: string
  fontSize?: string
  color?: string

}

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  onClick,
  backgroundColor = 'green',
  width = '100% ',
  border = '1px solid red',
  radius = '10px',
  height = '40px',
  fontSize = '20px',
  color = 'white'

}) => {
  return (
    <button onClick={onClick}
    className='sm:w-[100%]'
    style={{
      backgroundColor,
      border,
      borderRadius: radius,
      height,
      width,
      fontSize,
      color,
      cursor: 'pointer',
      marginRight: '16px',
      fontFamily: 'Mulish'
    }}
     >
      {children}
    </button>
  )
}

export default ButtonComponent
