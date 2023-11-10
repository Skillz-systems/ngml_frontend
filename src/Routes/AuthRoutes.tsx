import StaffLoginPage from '../pages/StaffLoginPage'
import SignupStaff from 'src/pages/authentication/staff/SignupStaff'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/app/StaffloginPage',
    component: StaffLoginPage
  },
  {
    title: 'signupstaff',
    path: '/app/signupstaff',
    component: SignupStaff
  }
]
