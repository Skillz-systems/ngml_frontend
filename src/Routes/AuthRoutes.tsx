import CustomerSelfRevistration from '../pages/authentication/client/CustomerSelfRevistration'
import StaffLoginPage from '../pages/StaffLoginPage'
import SignupStaff from '../pages/authentication/staff/SignupStaff'

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
  },
  {
    title: 'customerselfregistration',
    path: '/app/customerselfregistration',
    component: CustomerSelfRevistration
  }
]
