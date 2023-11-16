import React, { useState } from 'react'
import TextInput from '../Components/TextInput'
import ButtonComponent from '../Components/ButtonComponent'
import emailIcon from '../Asset/emailIcons.png'
import Footer from '../Components/Footer'
import logo from '../Asset/CompanyLogo.png'
import cancel from '../Asset/cancel.png'

const screenBackground = {
  background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)'
}
const cardBackground = {
  background: 'rgba(255, 255, 255, 0.50)'
}
const heading = {
  color: '#49526A'
}
const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleResetPassword = (): void => {
    // Implement your password reset logic here
    // For demonstration purposes, just checking if email is not empty
    if (email.trim() === '') {
      setEmailError(true)
    } else {
      // Perform password reset logic
      console.log('Reset password logic goes here')
    }
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen" style={screenBackground}>
      <div className="flex items-center justify-center">
        <div className="relative  md:right-[-40rem] right-0 right-[-40rem] top-[7rem] bg-white rounded-full p-4">
          <img src={cancel} alt="Cancel Logo" className="rounded-full w-[20px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full flex-1">
        <div className="pb-[40px] pl-[18px] pr-[18px] rounded-[50px] w-[95%] sm:w-[600px] shadow-lg mb-8 mx-auto" style={cardBackground}>
          <div className="w-32 h-32 relative top-[-70px] mx-auto">
            <img src={logo} alt="Company Logo" className='rounded-full' />
          </div>
          <h2 className="text-[24px] font-Mulish font-bold not-italic leading-[100%] text-center" style={heading}>FORGOT PASSWORD</h2>
          <TextInput
            type="text"
            label="Email"
            value={email}
            name="email"
            placeholder="Enter your email"
            error={emailError}
            onChange={handleEmailChange}
            icon={<img src={emailIcon} alt='emaillogo' />}
            iconRight={null} // No right icon for email
            height="55px"
            width="100%"
            iconHeight='45px'
            iconWidth='46px'
            backgroundColor='#D2F69E'
          />
          <div>
            <p className='italic text-center mb-6 text-[12px] font-Mulish font-normal leading-[100%]'>We will send you an email to enable you create a new password</p>
          </div>
          <div className='pl-[23px] mr-[10px]'>
            <ButtonComponent
              onClick={handleResetPassword}
              backgroundColor="#00AF50"
              width="100%"
              height="51px"
              fontSize="20px"
              color="white"
              radius="50px"
              border="green"
            >
              Submit
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div className='mb-[40px] w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default ForgotPasswordPage

export { }
