import React, { type FC, type ReactNode } from 'react'

/**
 * Represents a Reusable Footer Component
 * @function
 * @param {ReactNode} children - React props to render wrapped children components.
 * @param {string} backgroundColor - Background color of the footer.
 * @param {string} padding - Padding of the footer.
 * @param {string} maxWidth - Maximum width of the footer.
 * @param {string} fontColor - Text color of the footer.
 * @Description - This component is a reusable React component for creating customizable footers and takes in the above props.
 */
interface FooterProps {
  children: ReactNode
  backgroundColor?: string
  padding?: string
  maxWidth?: string
  fontColor?: string
}

const Footer: FC<FooterProps> = ({
  children,
  backgroundColor = 'bg-sanddollar',
  padding = 'py-2',
  maxWidth = 'max-w-screen-2xl',
  fontColor = 'text-textcolor'
}) => {
  return (
    <footer className={`mt-8 px-4 ${padding} ${maxWidth} font-Mulish font-normal self-stretch mx-auto ${backgroundColor} ${fontColor} rounded-xl shadow-custom text-center text-gray-700`}>
      {children}
    </footer>
  )
}

export default Footer
