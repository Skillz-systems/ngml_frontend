import React from 'react'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { routes } from './Routes/Index'
// import './App.css'

function App (): JSX.Element {
  // routes without layouts
  // const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
  //   <Route key={path} path={path} element={<Component />} />
  // ))

  return (
    <div className="">
     {/* <BrowserRouter>
        <Routes>
          {authRoutes}
        </Routes>
      </BrowserRouter> */}
      <ForgotPasswordPage />
    </div>
  )
}

export default App
