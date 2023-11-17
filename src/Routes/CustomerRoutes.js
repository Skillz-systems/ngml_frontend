import ComposeInternalLayouts from 'src/components/Hoc/ComposeInternalLayout'
import CustomerBusinessPage from 'src/Pages/Customer/CustomerBusinessPage'
import CustomerHome from 'src/Pages/Customer/CustomerHomePage'
import CustomerProfilePage from 'src/Pages/Customer/CustomerProfilePage'
import CustomerSettingsPage from 'src/Pages/Customer/CustomerSettingsPage'

export const CustomerRoutes = [
  {
    title: 'Customer Home page',
    path: '/app/customerhomepage',
    component: ComposeInternalLayouts(CustomerHome),
    exact: true
  },
  {
    title: 'Customer Business Page',
    path: '/app/businesspage',
    component: ComposeInternalLayouts(CustomerBusinessPage),
    exact: true
  },
  {
    title: 'Customer Profile page',
    path: '/app/profilepage',
    component: ComposeInternalLayouts(CustomerProfilePage),
    exact: true
  },
  {
    title: 'Customer Settings page',
    path: '/app/settingspage',
    component: ComposeInternalLayouts(CustomerSettingsPage),
    exact: true
  }
]
