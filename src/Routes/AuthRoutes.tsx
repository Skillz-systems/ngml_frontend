import FormBuilderScreen from 'src/Pages/FormBuilder/FormBuilderScreen'
import StaffLoginPage from 'src/Pages/StaffLoginDetails'
import CustomerSetPassword from 'src/Pages/CustomerSetPassword'
import SignupStaff from 'src/Pages/SignupStaff'
import AllFormBuilder from 'src/Pages/FormBuilder/AllFormBuilder'
import ViewForm from 'src/Pages/FormBuilder/ViewForm'

export const AuthRoutes = [
  {
    title: 'stafflogin',
    path: '/',
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
    title: 'Form Builder',
    path: '/formbuilder',
    component: FormBuilderScreen
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
  }
]
