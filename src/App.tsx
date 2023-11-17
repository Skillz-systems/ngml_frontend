import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateAdminRoute, routes } from './Routes/Index'
import './App.css'

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
                      <Component/>
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
                      <Component/>
                  </PrivateAdminRoute>
              }
          /></>

    )
  )

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {authRoutes}
          {PrivateRoutes}
          {CustomerRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
