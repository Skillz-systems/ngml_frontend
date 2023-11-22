import React from 'react'
import type { FC } from 'react'

const Footer: FC = () => (
  <footer
      className="mt-8 px-4 sm:px-8 lg:px-16 py-2 font-Mulish self-stretch mx-auto text-textcolor rounded-[50px] shadow-custom text-center text-gray-700"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        fontSize: '10px',
        lineHeight: '10px',
        letterSpacing: '0.8px',
        position: 'fixed',
        bottom: 50,
        left: 0,
        right: 0,
        zIndex: 9999 // Ensure it appears on top of other content
      }}
    >
      This Portal is a Property of NNPC Gas Marketing Limited
    </footer>
)

export default Footer

export {}
