import React from 'react'
import './App.css'
import ButtonComponent from './Components/ButtonComponent'

function App (): JSX.Element {
  const handleClick = (): void => {
    console.log('Button clicked!')
  }

  return (
    <div className="App">
      <div>
        <ButtonComponent
         border="none"
         backgroundColor="#59d14b"
         height = "50px"
         radius = "40px"
         width = "500px"
         onClick={() => {
           handleClick()
         }}
        > Login</ButtonComponent>
      </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <div>
        <ButtonComponent
         border="2px solid #91918e"
         backgroundColor="#f4f78b"
         height = "50px"
         radius = "40px"
         width = "250px"
         color= 'black'
         onClick={() => {
           handleClick()
         }}
        > New Sign in</ButtonComponent>
      </div>
    </div>
  )
}
export default App
