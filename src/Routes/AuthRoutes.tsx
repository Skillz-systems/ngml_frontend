import FormBuilderScreen from 'src/Pages/FormBuilder/FormBuilderScreen'
import StaffLoginPage from 'src/Pages/StaffLoginDetails'
import StaffPersonalDetails from 'src/Pages/StaffPersonalDetails'
import CustomerSelfRegistration from 'src/Pages/authentication/client/CustomerSelfRegistration'
import CustomerSetPassword from 'src/Pages/authentication/client/CustomerSetPassword'
import SignupStaff from 'src/Pages/authentication/staff/SignupStaff'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/',
    component: StaffLoginPage
  },
  {
    title: 'Staffpersonaldetails',
    path: '/Staffpersonaldetails',
    component: StaffPersonalDetails
  },
  {
    title: 'customersetpassword',
    path: '/customersetpassword',
    component: CustomerSetPassword
  },
  {
    title: 'signupstaff',
    path: '/signupstaff',
    component: SignupStaff
  },
  {
    title: 'customerselfregistration',
    path: '/customerselfregistration',
    component: CustomerSelfRegistration
  },
  {
    title: 'Form Builde',
    path: '/formbuilder',
    component: FormBuilderScreen
  }
]
