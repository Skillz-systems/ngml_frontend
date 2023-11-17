import StaffLoginPage from 'src/Page/StaffLoginDetails'
import StaffPersonalDetails from 'src/Page/StaffPersonalDetails'
import CustomerSelfRegistration from 'src/Page/CustomerSelfRegistration'
import CustomerSetPassword from 'src/Page/CustomerSetPassword'
import SignupStaff from 'src/Page/SignupStaff'

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
