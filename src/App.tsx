import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes/Index'
import './App.css'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App(): JSX.Element {
  // routes without layouts
  const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {authRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
