import StaffLoginPage from 'src/pages/StaffLoginDetails'
import StaffPersonalDetails from 'src/pages/StaffPersonalDetails'
import CustomerSelfRegistration from 'src/pages/authentication/client/CustomerSelfRegistration'
import CustomerSetPassword from 'src/pages/authentication/client/CustomerSetPassword'
import SignupStaff from 'src/pages/authentication/staff/SignupStaff'

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
