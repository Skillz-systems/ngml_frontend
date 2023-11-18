/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useReducer, type ReactNode, useEffect } from 'react'

import { type RegisterInterface } from '../api/axios'

// interface User {
//   id: number
//   username: string
// }

interface AuthState {
  user: RegisterInterface | null
}

type AuthAction = { type: 'CURRENTUSER', payload: RegisterInterface } | { type: 'LOGOUT' }
const AuthStateContext = createContext<AuthState | undefined>(undefined)
const AuthDispatchContext = createContext<React.Dispatch<AuthAction> | undefined>(
  undefined
)

const initialState: AuthState = {
  user: null
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'CURRENTUSER':
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { user: action.payload }
    case 'LOGOUT':
      localStorage.removeItem('user')
      return { user: null }
    default:
      return state
  }
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const storedUser = localStorage.getItem('user')
    if (storedUser != null) {
      dispatch({ type: 'CURRENTUSER', payload: JSON.parse(storedUser) })
    }
  }, [])

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const useAuthState = (): AuthState => {
  const context = useContext(AuthStateContext)
  if (context == null) {
    throw new Error('useAuthState must be used within an AuthProvider')
  }
  return context
}

const useAuthDispatch = (): React.Dispatch<AuthAction> => {
  const context = useContext(AuthDispatchContext)
  if (context == null) {
    throw new Error('useAuthDispatch must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthState, useAuthDispatch }
