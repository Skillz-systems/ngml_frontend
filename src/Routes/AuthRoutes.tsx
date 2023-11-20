import StaffLoginPage from 'src/Pages/StaffLoginDetails'
import CustomerSetPassword from 'src/Pages/CustomerSetPassword'
import SignupStaff from 'src/Pages/SignupStaff'
import AllFormBuilder from 'src/Pages/FormBuilder/AllFormBuilder'
import ViewForm from 'src/Pages/FormBuilder/ViewForm'
import CustomerSelfRegistration from 'src/Pages/CustomerSelfRegistration'
import TokenVerification from 'src/Pages/TokenVerification'
import CustomerLogin from 'src/Pages/CustomerLogin'
import SucessModal from 'src/Components/ResponseComponent/ResponseModal'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/',
    component: StaffLoginPage
  },
  {
    title: 'stafflogin',
    path: '/staff-login',
    component: StaffLoginPage
  },
  {
    title: 'customersetpassword',
    path: '/customer/reset-password',
    component: CustomerSetPassword
  },
  {
    title: 'signupstaff',
    path: '/signupstaff',
    component: SignupStaff
  },
  {
    title: 'Form Builder',
    path: '/all-formbuilder',
    component: AllFormBuilder
  },
  {
    title: 'Form Builder',
    path: '/view-form/:id',
    component: ViewForm
  },
  {
    title: 'customerselfregistration',
    path: '/customer/register',
    component: CustomerSelfRegistration
  },
  {
    title: 'customerselfregistration',
    path: '/verify-token/:email',
    component: TokenVerification
  },
  {
    title: 'customerselfregistration',
    path: '/customer/login',
    component: CustomerLogin
  },
  {
    title: 'SucessModal',
    path: '/app/sucessmodal',
    component: SucessModal
  }
]
