import ComposeInternalLayouts from 'src/components/Hoc/ComposeInternalLayout'
import StaffLoginPage from 'src/Pages/StaffLoginPage'

console.log(ComposeInternalLayouts(), 'hhhhhh')

export const PrivateRoutes = [
  {
    title: 'Home',
    path: '/app/home',
    component: ComposeInternalLayouts(StaffLoginPage),
    exact: true
  }

]
