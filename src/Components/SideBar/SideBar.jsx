/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-function-return-type
const Sidebar = ({ SideBarLinks }) => {
  console.log(SideBarLinks, 'SideBarLinksSideBarLinks')
  return (
    <>
      <div
        style={{
          borderRight: '0.5px solid #ccc',
          width: '325px',
          padding: '18px',
          overflowY: 'auto'
        }}
      >
        <div>
          <div>
            Woman of God
            {/* <img src={Logo} alt="logo" /> */}
          </div>
          <div
            style={{
              display: 'flex',
              border: '1px solid #ccc',
              borderRadius: '8px',
              height: '44px',
              alignItems: 'center',
              justifyContent: 'flex-start',
              columnGap: '10px',
              padding: '10px 14px 10px 14px',
              margin: '40px 0'
            }}
          >
            <div>
           Icon
            </div>
            <input
              placeholder="Search"
              style={{ border: 'none', outline: 'none' }}
            />
          </div>
          <div
            style={{
              background: '#FFFFFF',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {SideBarLinks?.map((sideBar) => (
              <NavLink
                key={sideBar.id}
                to={sideBar.to}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                      ? 'active-nav'
                      : 'inactive-nav'
                }
                style={{
                  height: '40px',
                  display: 'flex',
                  columnGap: '20px',
                  textDecoration: 'none',
                  marginTop: `${
                    sideBar?.name === 'Support' ? '80px' : '10px'
                  }`,
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                {/* <div style={{ width: '20px', height: '20px' }}>
                  {typeof sideBar.icon === 'string'
                    ? (
                    // check if the icon is a string (asset path)
                    <img
                      src={sideBar.icon}
                      alt="icon"
                      style={{ color: '#667085' }}
                    />
                      )
                    : (
                    <sideBar.icon style={{ color: '#667085' }} /> // assuming it's a React component
                      )}
                </div> */}
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'rgba(16, 24, 40, 1)'
                  }}
                >
                  {sideBar.name}
                </span>
              </NavLink>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '14px',
              background: 'rgba(249, 250, 251, 1)',
              padding: '20px 16px 20px 16px',
              borderRadius: '8px',
              marginTop: '20px'
            }}
          >
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(71, 84, 103, 1)',
                marginBottom: '4px'
              }}
            >
              Used Budget
            </div>
            <div>
              {' '}
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(71, 84, 103, 1)'
                }}
              >
                Your team has used 80% of your budget this month.
              </div>
            </div>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}
          >
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(71, 84, 103, 1)'
              }}
            >
              Discuss
            </div>
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: 'rgba(181, 71, 8, 1)'
              }}
            >
              Budget Settings
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
