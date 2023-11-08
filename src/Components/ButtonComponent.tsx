import React, { type ReactNode } from 'react'

interface ButtonComponentprops {
  children: ReactNode
  onClick: () => void
  color?: string
  size?: 'small' | 'medium' | 'large'
}

const DynamicButton: React.FC<ButtonComponentprops> = ({
  children,
  onClick,
  color = 'blue',
  size = 'medium'
}) => {
  const buttonSizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  const buttonColorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
    red: 'bg-red-500 hover:bg-red-700 text-white'
  }

  const buttonClasses = `rounded-full focus:outline-none focus:ring-2 focus:ring-${color}-300 
                        ${buttonSizeClasses[size]} ${buttonColorClasses[color]}`

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default DynamicButton
