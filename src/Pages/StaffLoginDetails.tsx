/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import TextInput from 'src/Components/TextInput'
import logo from '../../src/Asset/CompanyLogo.png'
import emailIcon from '../../src/Asset/emailIcons.png'
import lockIcon from '../../src/Asset/lockIcons.png'
import eyeIcon from '../../src/Asset/eyeIcons.png'
import ButtonComponent from 'src/Components/ButtonComponent'
import { loginUser, type LoginInterface } from 'src/api/axios'

import { useNavigate } from 'react-router-dom'
import { useAuthDispatch } from '../Context/AuthContext'
import { toast } from 'react-toastify'

const StaffLoginDetails: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<LoginInterface>({
    email: '',
    password: ''
  })
  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleClick = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    // console.log(data)
    // console.log(error)
    console.log(values)
    try {
      const res = await loginUser(values)
      setLoading(false)
      console.log(res, 'resres')
      toast.success(`${res?.data?.message}`)
      authDispatch({ type: 'CURRENTUSER', payload: res.data.data.user })
      navigate('/app/staffpage', { replace: true })
      setValues({
        password: '',
        email: ''
      })
    } catch (error: any) {
      setLoading(false)
      console.log(error, 'dkkddk')
      toast.error(`${error?.response?.data?.message || error?.response?.data?.error || error?.message}`)
      console.error('Error submitting form:', error)
    }
  }
  return (
    <div className='w-[100%] h-screen' style={{ background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div className='sm:w-[100%]' style={{ background: 'rgba(255, 255, 255, 0.50)', width: '600px', padding: 'var(--get-general-numbers-00732, 32px)', borderRadius: 'var(--get-general-numbers-00732, 32px)', position: 'relative' }}>
          <form
          // className='flex flex-col items-center justify-center w-full px-3 py-8 mt-3 space-y-4 md:px-6 h-fit md:w-96 bg-white/40 rounded-3xl'
          onSubmit={handleClick}>

            <div style={{ position: 'absolute', left: '40%', top: '-70px', zIndex: 100000 }}>
              <img src={logo} alt='companylogo' style={{ borderRadius: '100%' }} />
            </div>
            <div style={{ marginTop: '40px' }}>
              <div style={{ textTransform: 'uppercase', color: '#49526A', fontFamily: 'Mulish', fontSize: '24px', fontWeight: '700', lineHeight: '40px', fontStyle: 'normal' }}>NGML Staff Sign In </div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <TextInput
                width='480px'
                height='64px'
                type="text"
                label="Email"
                value={values.email}
                name="email"
                placeholder="Enter your email here"
                error={false}
                onChange={handleOnChange}
                icon={<img src={emailIcon} alt='emaillogo' />}
                iconHeight='50px'
                iconWidth='50px'
                backgroundColor='#D2F69E'
              />
            </div>
            <div>
              <TextInput
                width='480px'
                height='64px'
                type="password"
                label="password"
                value={values.password}
                name="password"
                placeholder="Enter your password"
                error={false}
                onChange={handleOnChange}
                icon={<img src={lockIcon} alt='emaillogo' />}
                iconRight={<img src={eyeIcon} alt='showpassword' />}
                iconHeight='50px'
                iconWidth='50px'
                backgroundColor='#D2F69E'
              />
            </div>
            <div style={{ marginTop: '12px' }}>
              <ButtonComponent
                border="none"
                backgroundColor="#00AF50"
                height="48px"
                radius="40px"
                width="480px"
                fontSize='18px'
                onClick={() => {
                  // handleClick(e)
                }}
              > {loading ? 'Logging in....' : 'Login'}</ButtonComponent>
            </div>
            <div style={{ color: '#49526A', fontFamily: 'Mulish', fontSize: '16px', fontWeight: '500', lineHeight: '40px', fontStyle: 'italic', marginTop: '30px', textDecorationLine: 'underline', cursor: 'pointer' }}>
              <div>Forgot Password?</div>
            </div>
            </form>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <div>
              <div className='w-96 ' style={{ background: 'rgba(255, 255, 255, 0.50)', width: '600px', borderRadius: 'var(--get-general-numbers-00732, 32px)', position: 'relative', height: '76px', padding: 'var(--get-general-numbers-00732, 24px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: 'var(--TEXT-MAIN, #050505)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '400', lineHeight: '100%', padding: '4px' }}>New to the portal, sign in here</div>
                  <div>
                    <ButtonComponent
                      border='2px solid #91918e'
                      backgroundColor="none"
                      height="38px"
                      radius="40px"
                      width='160px'
                      color='black'
                      fontSize='16px'
                      onClick={() => {
                        navigate('/signupstaff')
                      }}
                    > New Sign in</ButtonComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffLoginDetails
