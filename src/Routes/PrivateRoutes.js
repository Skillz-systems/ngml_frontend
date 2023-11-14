import ComposeInternalLayouts from 'src/components/Hoc/ComposeInternalLayout'
import StaffLoginPage from 'src/Pages/StaffLoginPage'

export const PrivateRoutes = [
  {
    title: 'Home',
    path: '/app/home',
    component: ComposeInternalLayouts(StaffLoginPage),
    exact: true
  }

]
