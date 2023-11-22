/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import TextInput from 'src/Components/TextInput'
import logo from '../../src/Asset/CompanyLogo.png'
import emailIcon from '../../src/Asset/emailIcons.png'
import lockIcon from '../../src/Asset/lockIcons.png'
import eyeIcon from '../../src/Asset/eyeIcons.png'
import ButtonComponent from 'src/Components/ButtonComponent'
import { loginUser, type LoginInterface } from 'src/api/api'
import { setBearerToken } from 'src/api/axios'

import { useNavigate } from 'react-router-dom'
import { useAuthDispatch } from '../Context/AuthContext'
import { toast } from 'react-toastify'
import Footer from 'src/Components/Footer'

const StaffLoginDetails: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<LoginInterface>({
    email: '',
    password: ''
  })
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleClick = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // console.log(data)
    // console.log(error)
    console.log(values)

    try {
      const res = await loginUser(values)
      setLoading(false)
      console.log(res, 'resres7')
      setBearerToken(res.data.data.token)
      toast.success(`${res?.data?.message}`)
      authDispatch({ type: 'CURRENTUSER', payload: res.data.data.user })
      if (res.data.data.user.type === 'SUPERADMIN') {
        navigate('/app/staffpage', { replace: true })
      } else {
        navigate(`/app/staffpage/${res?.data?.data?.user?._id}`, { replace: true })
      }
      // navigate('/app/homepageinfo')
      setValues({
        password: '',
        email: ''
      })
    } catch (error: any) {
      setLoading(false)
      console.log(error, 'dkkddk')
      toast.error(`${error?.response?.data?.message}`)
    }
  }

  return (
    <div
      className="w-[100%] h-screen"
      style={{
        background:
          'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div>
            <div
              className="sm:w-[100%]"
              style={{
                background: 'rgba(255, 255, 255, 0.50)',
                width: '560px',
                padding: 'var(--get-general-numbers-00732, 32px)',
                borderRadius: 'var(--get-general-numbers-00732, 32px)',
                position: 'relative',
                height: '369px'
              }}
            >
              <form onSubmit={handleClick}>
                <div
                  style={{
                    position: 'absolute',
                    left: '40%',
                    top: '-70px',
                    zIndex: 100000
                  }}
                >
                  <img
                    src={logo}
                    alt="companylogo"
                    style={{ borderRadius: '100%' }}
                  />
                </div>
                <div style={{ marginTop: '20px' }}>
                  <div
                    style={{
                      textTransform: 'uppercase',
                      color: '#49526A',
                      fontFamily: 'Mulish',
                      fontSize: '24px',
                      fontWeight: '700',
                      lineHeight: '40px',
                      fontStyle: 'normal'
                    }}
                  >
                    NGML Staff Sign In
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-4 ">
                  <div>
                    <TextInput
                      width="480px"
                      height="54px"
                      type="text"
                      label="email"
                      value={values.email}
                      name="email"
                      placeholder="Enter your email here"
                      error={false}
                      onChange={handleOnChange}
                      icon={
                        <img
                          src={emailIcon}
                          className="p-0.5 absolute top-0.5 left-0.5"
                          width={24}
                          height={24}
                          alt="business"
                        />
                      }
                      iconHeight="24px"
                      iconWidth="24px"
                      backgroundColor="#D2F69E"
                      iconStyle="absolute top-3 left-2  rounded-full"
                      divStyle="p-0 mb-0 mt-2"
                    />
                  </div>
                  <div>
                    <TextInput
                      width="480px"
                      height="54px"
                      type="password"
                      // label="password"
                      value={values.password}
                      name="password"
                      placeholder="Enter your password"
                      error={false}
                      onChange={handleOnChange}
                      icon={
                        <img
                          src={lockIcon}
                          className="p-0.5 absolute top-0.5 left-0.5"
                          width={24}
                          height={24}
                          alt="lock"
                        />
                      }
                      iconRight={
                        <img
                          src={eyeIcon}
                          className="p-0.5 absolute top-3"
                          alt="showpassword"
                        />
                      }
                      iconHeight="24px"
                      iconWidth="24px"
                      backgroundColor="#D2F69E"
                      iconStyle="absolute top-3 left-2  rounded-full"
                      divStyle="p-0 mb-0"
                    />
                  </div>
                </div>
                <div>
                  <ButtonComponent
                    border="none"
                    backgroundColor="#00AF50"
                    height="48px"
                    radius="40px"
                    width="480px"
                    fontSize="18px"
                    marginRight="80px"
                    onClick={() => {
                      // handleClick(e)
                    }}
                  >
                    {' '}
                    {loading ? 'Logging in....' : 'Login'}
                  </ButtonComponent>
                </div>
                <div
                  style={{
                    color: '#49526A',
                    fontFamily: 'Mulish',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '40px',
                    fontStyle: 'italic',
                    textDecorationLine: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  <div>Forgot Password?</div>
                </div>
              </form>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
              }}
            >
              <div>
                <div
                  className="w-96 "
                  style={{
                    background: 'rgba(255, 255, 255, 0.50)',
                    width: '560px',
                    borderRadius: 'var(--get-general-numbers-00732, 32px)',
                    height: '56px',
                    padding: 'var(--get-general-numbers-00732, 24px)',
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <div
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      columnGap: '80px'
                    }}
                  >
                    <div
                      style={{
                        color: 'var(--TEXT-MAIN, #050505)',
                        fontFamily: 'Mulish',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '100%'
                      }}
                    >
                      New to the portal, sign in here
                    </div>
                    <div>
                      <ButtonComponent
                        border="2px solid #91918e"
                        backgroundColor="rgba(255, 255, 255, 0.50)"
                        height="32px"
                        radius="40px"
                        width="142px"
                        color="#050505"
                        fontSize="14px"
                        marginLeft="26px"
                        onClick={() => {
                          navigate('/signupstaff')
                        }}
                      >
                        {' '}
                        New Sign in
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default StaffLoginDetails
