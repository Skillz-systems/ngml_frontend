import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StaffLoginPage from './Pages/StaffLoginPage'

function App (): JSX.Element {
  return (
    <div className="App">
     <Routes>
     <Route path="staffloginpage" element={<StaffLoginPage />} />
     </Routes>
    </div>
  )
}
export default App
