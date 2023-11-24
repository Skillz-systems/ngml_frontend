// import React from 'react'

// export default function NavBar(): JSX.Element {
//   return <div style={{ height: '50px', background: 'red' }}>NavBar</div>
// }
import React from 'react'
import CompanyLogo from 'src/Asset/CompanyLogo.png'
import Search from 'src/Asset/png-icons/Search.png'
import Notification from 'src/Asset/png-icons/Notifications.png'
import Logout from 'src/Asset/png-icons/Logout.png'
import { GoShield } from 'react-icons/go'

interface NavbarProps {
  className?: string // You can add any additional props you might need
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-between p-3 bg-white fixed w-screen  ${className}`}
    >
      {/* Logo */}
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img className="w-full h-full" src={CompanyLogo} alt="Company Logo" />
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-4 mt-2 mr-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="h-8 pl-8 md:pl-6 lg:pl-[40rem] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 italic"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {/* Search Logo */}
            <div className="w-4 h-4 rounded-full">
              <img src={Search} alt="Search Logo" />
            </div>
          </div>
        </div>

        <div className="ring-[1px] rounded-full p-1 ring-white  relative bg-white">
          <GoShield className="text-neutral-700" size={20} />
          <span className="bg-red-600 rounded-full text-white text-[8px] pt-0.5 px-0.5 absolute -right-1 -top-1 animate-pulse ">
            12
          </span>
        </div>

        {/* Bell Icon */}
        <div className="w-8 h-8 p-2 rounded-full border border-gray-300 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full">
            <img src={Notification} alt="Notification Logo" />
          </div>
        </div>

        {/* Switch Off Button */}
        <div className="w-8 h-8 p-2 rounded-full border border-gray-300 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full">
            <img src={Logout} alt="Logout Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
