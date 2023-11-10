import React, { type ChangeEvent } from 'react'
import TextInput from 'src/Components/TextInput'
import logo from '../../src/Asset/CompanyLogo.png'
import emailIcon from '../../src/Asset/emailIcons.png'
import lockIcon from '../../src/Asset/lockIcons.png'
import eyeIcon from '../../src/Asset/eyeIcons.png'
import ButtonComponent from 'src/components/ButtonComponent'

const StaffLoginPage: React.FC = () => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value)
    // alert('kskkskksks')
  }

  const handleClick = (): void => {
    console.log('ypp ')
  }
  return (
    <div className='w-[100%] h-screen' style={{ background: ' linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div className='sm:w-[100%]' style={{ background: 'rgba(255, 255, 255, 0.50)', width: '600px', padding: 'var(--get-general-numbers-00732, 32px)', borderRadius: 'var(--get-general-numbers-00732, 32px)', position: 'relative' }}>

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
                  value=""
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
                value="password"
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
                  handleClick()
                }}
              > Login</ButtonComponent>
            </div>
            <div style={{ color: '#49526A', fontFamily: 'Mulish', fontSize: '16px', fontWeight: '500', lineHeight: '40px', fontStyle: 'italic', marginTop: '30px', textDecorationLine: 'underline', cursor: 'pointer' }}>
              <div>Forgot Password?</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <div>
              <div className='w-96 ' style={{ background: 'rgba(255, 255, 255, 0.50)', width: '600px', borderRadius: 'var(--get-general-numbers-00732, 32px)', position: 'relative', height: '76px', padding: 'var(--get-general-numbers-00732, 24px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: 'var(--TEXT-MAIN, #050505)', fontFamily: 'Mulish', fontSize: '18px', fontWeight: '400', lineHeight: '100%', padding: '4px' }}>New to the portal, sign in here</div>
                  <div>
                    <ButtonComponent
                      border="2px solid #91918e"
                      backgroundColor="none"
                      height="38px"
                      radius="40px"
                      width="160px"
                      color='black'
                      fontSize='16px'
                      onClick={() => {
                        handleClick()
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

export default StaffLoginPage
