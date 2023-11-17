import ComposeInternalLayouts from 'src/Components/Hoc/ComposeInternalLayout'
import CommunicationPage from 'src/Page/CommunicationPage'
import HomePageInfo from 'src/Page/HomePage'
import Managerpage from 'src/Page/MangerPage'
import ProfilePage from 'src/Page/ProfilePage'
import RecordsPage from 'src/Page/RecordsPage'
import ReportPage from 'src/Page/ReportsPage'
import SettingsPage from 'src/Page/SettingsPage'
import Staffpage from 'src/Page/StaffPage'

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
