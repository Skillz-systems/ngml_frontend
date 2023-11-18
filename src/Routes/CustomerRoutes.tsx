import CustomerInternalLayout from 'src/Components/Hoc/CustomerInternalLayout'
import CustomerBusinessPage from 'src/Pages/Customer/CustomerBusinessPage'
import CustomerHome from 'src/Pages/Customer/CustomerHomePage'
import CustomerProfilePage from 'src/Pages/Customer/CustomerProfilePage'
import CustomerSettingsPage from 'src/Pages/Customer/CustomerSettingsPage'

export const CustomerRoutes = [
  {
    title: 'Customer Home page',
    path: '/customer/customerhomepage',
    component: CustomerInternalLayout(CustomerHome),
    exact: true
  },
  {
    title: 'Customer Business Page',
    path: '/customer/customerbusinesspage',
    component: CustomerInternalLayout(CustomerBusinessPage),
    exact: true
  },
  {
    title: 'Customer Profile page',
    path: '/customer/customerprofilepage',
    component: CustomerInternalLayout(CustomerProfilePage),
    exact: true
  },
  {
    title: 'Customer Settings page',
    path: '/customer/customersettingspage',
    component: CustomerInternalLayout(CustomerSettingsPage),
    exact: true
  }
]
