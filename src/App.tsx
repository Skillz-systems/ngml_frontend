import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateAdminRoute, routes } from './Routes/Index'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './Context/AuthContext'
import { StaffProvider } from './Context/StaffDataContext'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  // routes without layouts
  const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ))

  const PrivateRoutes = routes.PrivateRoutes.map(
    ({ path, component: Component, exact }) => (
      <>
        <Route
          key={path}
          path={path}
          element={
            <PrivateAdminRoute key={path} >
              <Component />
            </PrivateAdminRoute>
          }
        /></>

    )
  )

  const CustomerRoutes = routes.CustomerRoutes.map(
    ({ path, component: Component, exact }) => (
      <>
        <Route
          key={path}
          path={path}
          element={
            <PrivateAdminRoute key={path} >
              <Component />
            </PrivateAdminRoute>
          }
        /></>

    )
  )

  return (

    <div className="App" style={{ border: '1px solid red' }}>
      <ToastContainer />
      <AuthProvider>
        <StaffProvider>
          <BrowserRouter>
            <Routes>
              {authRoutes}
              {PrivateRoutes}
              {CustomerRoutes}
            </Routes>
          </BrowserRouter>
        </StaffProvider>
      </AuthProvider>
      {/* </ToastContainer> */}

    </div>
  )
}

export default App
