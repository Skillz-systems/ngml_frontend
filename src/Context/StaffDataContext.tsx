/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useReducer, type ReactNode, useEffect } from 'react'

import { type UserInterface } from '../api/api'

// interface User {
//   id: number
//   username: string
// }

interface StaffDataState {
  staff: UserInterface | null
}

type StaffDataAction = { type: 'STAFF', payload: UserInterface } | { type: 'REMOVE-STAFF' }
const StaffStateContext = createContext<StaffDataState | undefined>(undefined)
const StaffDispatchContext = createContext<React.Dispatch<StaffDataAction> | undefined>(
  undefined
)

const initialState: StaffDataState = {
  staff: null
}

const staffReducer = (state: StaffDataState, action: StaffDataAction): StaffDataState => {
  switch (action.type) {
    case 'STAFF':
      localStorage.setItem('staff', JSON.stringify(action.payload))
      console.log(action.payload)
      return { staff: action.payload }
    case 'REMOVE-STAFF':
      localStorage.removeItem('staff')
      return { staff: null }
    default:
      return state
  }
}

interface StaffProviderProps {
  children: ReactNode
}

const StaffProvider = ({ children }: StaffProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(staffReducer, initialState)

  useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const storedUser = localStorage.getItem('staff')
    if (storedUser != null) {
      dispatch({ type: 'STAFF', payload: JSON.parse(storedUser) })
    }
  }, [])

  return (
    <StaffStateContext.Provider value={state}>
      <StaffDispatchContext.Provider value={dispatch}>
        {children}
      </StaffDispatchContext.Provider>
    </StaffStateContext.Provider>
  )
}

const useStaffState = (): StaffDataState => {
  const context = useContext(StaffStateContext)
  if (context == null) {
    throw new Error('useStaffState must be used within an StaffProvider')
  }
  return context
}

const useStaffDispatch = (): React.Dispatch<StaffDataAction> => {
  const context = useContext(StaffDispatchContext)
  if (context == null) {
    throw new Error('useStaffDispatch must be used within an StaffProvider')
  }
  return context
}

export { StaffProvider, useStaffState, useStaffDispatch }
