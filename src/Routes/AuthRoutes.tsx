import StaffLoginPage from 'src/Pages/StaffLoginDetails'
import StaffPersonalDetails from 'src/Pages/StaffPersonalDetails'
import CustomerSelfRegistration from 'src/Pages/CustomerSelfRegistration'
import CustomerSetPassword from 'src/Pages/CustomerSetPassword'
import SignupStaff from 'src/Pages/SignupStaff'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/',
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
