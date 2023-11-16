import StaffLoginPage from 'src/Pages/StaffLoginDetails'
import StaffPersonalDetails from 'src/Pages/StaffPersonalDetails'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/app/StaffloginPage',
    component: StaffLoginPage
  },
  {
    title: 'Staffpersonaldetails',
    path: '/app/Staffpersonaldetails',
    component: StaffPersonalDetails
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
