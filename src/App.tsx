import React from 'react'
// import Footer from './Components/Footer'
import SignupStaff from './pages/authentication/staff/SignupStaff'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  return (
    <div className='overflow-hidden'>
      <SignupStaff />
      {/* <Footer /> */}
    </div>
  )
}

export default App
