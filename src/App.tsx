import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import TextInput from './components/TextInput'
import { FiMail } from 'react-icons/fi'
import { FaLock, FaEyeSlash } from 'react-icons/fa'

function App (): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (): void => {
    // Add your form submission logic here, and validate username and password if needed
    if (username.trim() === '') {
      setUsernameError(true)
    } else {
      setUsernameError(false)
    }

    if (password.trim() === '') {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }

  return (
    <div className="p-4">
      <TextInput
        type="text"
        label="Username"
        value={username}
        name="username"
        placeholder="Enter your username"
        error={usernameError}
        onChange={handleUsernameChange}
        icon={<FiMail size={20} />}
        iconRight
      />
      <TextInput
        type="password"
        label="Password"
        value={password}
        name="password"
        placeholder="Enter your password"
        error={passwordError}
        onChange={handlePasswordChange}
        icon={<FaLock size={20} />}
        iconRight={<FaEyeSlash size={20} />}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
        Submit
      </button>
    </div>
  )
}

export default App
