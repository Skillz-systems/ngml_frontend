import ComposeInternalLayouts from 'src/components/Hoc/ComposeInternalLayout'
import CommunicationPage from 'src/Pages/CommunicationPage'
import HomePageInfo from 'src/Pages/HomePage'
import Managerpage from 'src/Pages/MangerPage'
import ProfilePage from 'src/Pages/ProfilePage'
import RecordsPage from 'src/Pages/RecordsPage'
import ReportPage from 'src/Pages/ReportsPage'
import SettingsPage from 'src/Pages/SettingsPage'
import Staffpage from 'src/Pages/StaffPage'

export const PrivateRoutes = [
  {
    title: 'Home',
    path: '/app/homepageinfo',
    component: ComposeInternalLayouts(HomePageInfo),
    exact: true
  },
  {
    title: 'Manager',
    path: '/app/managerpage',
    component: ComposeInternalLayouts(Managerpage),
    exact: true
  },
  {
    title: 'Staff',
    path: '/app/staffpage',
    component: ComposeInternalLayouts(Staffpage),
    exact: true
  },
  {
    title: 'Records',
    path: '/app/recordspage',
    component: ComposeInternalLayouts(RecordsPage),
    exact: true
  },
  {
    title: 'Report',
    path: '/app/reportpage',
    component: ComposeInternalLayouts(ReportPage),
    exact: true
  },
  {
    title: 'Communication',
    path: '/app/communicationpage',
    component: ComposeInternalLayouts(CommunicationPage),
    exact: true
  },
  {
    title: 'Profile',
    path: '/app/profilepage',
    component: ComposeInternalLayouts(ProfilePage),
    exact: true
  },
  {
    title: 'Settings',
    path: '/app/settingspage',
    component: ComposeInternalLayouts(SettingsPage),
    exact: true
  }

]
