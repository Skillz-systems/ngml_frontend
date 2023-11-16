import StaffLoginPage from 'src/Pages/StaffLoginPage'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/app/StaffloginPage',
    component: StaffLoginPage
  },
  {
    title: 'customersetpassword',
    path: '/app/customersetpassword',
    component: CustomerSetPassword
  },
  {
    title: 'signupstaff',
    path: '/app/signupstaff',
    component: SignupStaff
  },
  {
    title: 'customerselfregistration',
    path: '/app/customerselfregistration',
    component: CustomerSelfRegistration
  }
]
