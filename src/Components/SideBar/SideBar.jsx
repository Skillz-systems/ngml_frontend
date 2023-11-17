/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../Asset/avatar.png'
import { SlArrowLeft } from 'react-icons/sl'

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-function-return-type
const Sidebar = ({ SideBarLinks }) => {
  const communicationProfileSettings = SideBarLinks.slice(5, 8)
  return (
    <>
      <div
        style={{
          borderRight: '0.5px solid #ccc',
          width: '350px',
          padding: '18px',
          overflowY: 'auto'

        }}
      >
        <div>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              height: '60px',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '22px',
              borderRadius: '30px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '6px'
              }}
            >
              <div style={{ marginLeft: '6px' }}>
                <img src={avatar} alt="happyavatar" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    color: '#050505',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: 'Mulish'
                  }}
                >
                  John Okor
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '6px'
                  }}
                >
                  <div
                    style={{
                      color: '#828DA9',
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: 'Mulish',
                      lineHeight: '20px'
                    }}
                  >
                    D.MANAGER
                  </div>
                  <div
                    style={{
                      color: '#828DA9',
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: 'Mulish',
                      lineHeight: '20px'
                    }}
                  >
                    SS Zone
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#e8eaed',
                  height: '30px',
                  width: '30px',
                  borderRadius: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '6px'
                }}
              >
                <SlArrowLeft style={{ color: '#828DA9' }} />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '14px',
              marginBottom: '10px',
              background: '#FFFFFF'
            }}
           >
             {SideBarLinks.slice(0, 5).map((sideBar) => (
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
                  display: 'flex',
                  columnGap: '16px',
                  textDecoration: 'none',
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: '20px',
                    fontFamily: 'Mulish'
                  }}
                >
                  {sideBar.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'Mulish'
                  }}
                >
                  {sideBar.name}
                </span>
              </NavLink>
             ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '14px',
            marginBottom: '10px',
            background: '#FFFFFF',
            height: '140px',
            width: '100%',
            marginTop: '30px'
          }}
        >
          {communicationProfileSettings.map((sideBar) => (
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
                display: 'flex',
                columnGap: '16px',
                textDecoration: 'none',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '20px',
                  fontFamily: 'Mulish'
                }}
              >
                {sideBar.icon}
              </span>
              <span
                style={{
                  fontFamily: 'Mulish'
                }}
              >
                {sideBar.name}
              </span>
            </NavLink>
          ))}
        </div>

      </div>
    </>
  )
}

export default Sidebar