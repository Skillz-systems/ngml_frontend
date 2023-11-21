/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../Asset/avatar.png'
import { SlArrowLeft } from 'react-icons/sl'

import { useAuthState } from 'src/Context/AuthContext'

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-function-return-type
const Sidebar = ({ SideBarLinks }) => {
  const { user } = useAuthState()
  const [name, setName] = useState('John Okafor')
  const [designation, setDesignation] = useState('D.MANAGER')
  const [zone, setZone] = useState('SS. Zone')

  useEffect(() => {
    if (user !== null) {
      // const acc = JSON.parse(localStorage.getItem('user'))
      setName(user.firstname + ' ' + user.lastname)
      setDesignation(user.designation)
      setZone(user.operation + ' Zone')
    }
  }, [])
  const communicationProfileSettings = SideBarLinks.slice(5, SideBarLinks.length)
  return (
    <>
      <div className='fixed top-10 h-screen'
        style={{
          border: '0.5px solid red',
          width: '220px',
          // padding: '18px',
          overflowY: 'auto',
          marginTop: '32px',
          marginLeft: '16px'

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
              <div style={{ marginLeft: '2px' }}>
                <img src={avatar} alt="happyavatar" style={{ width: '45px', height: '45px' }} />
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
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Mulish'
                  }}
                >
                  {name}
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
                      fontSize: '10px',
                      fontWeight: '600',
                      fontFamily: 'Mulish',
                      lineHeight: '20px'
                    }}
                    className='uppercase'
                  >
                    {designation}
                  </div>
                  <div
                    className='uppercase'
                    style={{
                      color: '#828DA9',
                      fontSize: '10px',
                      fontWeight: '600',
                      fontFamily: 'Mulish',
                      lineHeight: '20px'
                    }}
                  >
                    {zone}
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
                    fontSize: '15px',
                    fontFamily: 'Mulish'
                  }}
                >
                  <img src={sideBar.icon} />
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
                <img src={sideBar.icon} />
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
