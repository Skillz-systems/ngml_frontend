import React, { type ReactNode, type FC } from 'react'

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
    style={{
      backgroundColor,
      border,
      borderRadius: radius,
      height,
      width,
      fontSize,
      color,
      cursor: 'pointer'
    }}
     >
      {children}
    </button>
  )
}

export default ButtonComponent
