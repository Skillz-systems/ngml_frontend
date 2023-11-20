import ComposeInternalLayouts from 'src/Components/Hoc/ComposeInternalLayout'
import AllStaffList from 'src/Pages/AllStaffList'
import CommunicationPage from 'src/Pages/CommunicationPage'
import FormBuilderScreen from 'src/Pages/FormBuilder/FormBuilderScreen'
import HomePageInfo from 'src/Pages/HomePage'
import Managerpage from 'src/Pages/MangerPage'
import ProfilePage from 'src/Pages/ProfilePage'
import RecordsPage from 'src/Pages/RecordsPage'
import ReportPage from 'src/Pages/ReportsPage'
import SettingsPage from 'src/Pages/SettingsPage'
import Staffpage from 'src/Pages/StaffPage'
import SingleStaff from 'src/Pages/SingleStaff'

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
    title: 'StaffID',
    path: '/app/staffpage/:id',
    component: ComposeInternalLayouts(SingleStaff),
    exact: true
  },
  {
    title: 'Staff',
    path: '/app/staffpage/current',
    component: ComposeInternalLayouts(Staffpage),
    exact: true
  },
  {
    title: 'AllStaff',
    path: '/app/staffpage',
    component: ComposeInternalLayouts(AllStaffList),
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
  },
  {
    title: 'Form Builder',
    path: '/app/formbuilder',
    component: ComposeInternalLayouts(FormBuilderScreen)
  }
]
