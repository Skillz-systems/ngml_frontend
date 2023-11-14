import React, { type ComponentType } from 'react'
import Sidebar from '../SideBar/SideBar'
import { SideBarLinks } from 'src/SideBarLinks/SideBarLinks'
import NavBar from '../NavBar'
// import { SideBarLinks } from 'src/SideBarLinks'

/**
 * this is the Internal Layout components of the app. It renders the passed
 *  components and default Side Bar
 * @function
 * @param {object}  props - layout component.
 * @param   {object} Component Component to be rendered
 * @return {HTMLElement}
 */

interface InternalLayoutProps {
  Component: ComponentType<any> // Use React.ComponentType for Component prop
  title: string
  // Define otherProps as per your requirement
  // For example:
  // otherProps: YourType;
}

// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-function-return-type
const InternalLayout: React.FC<InternalLayoutProps> = ({
  Component,
  title,
  ...otherProps
}) => (
  <>
    <NavBar />
    <div
      style={{
        display: 'flex',
        height: '100vh',
        columnGap: '2px',
        marginTop: '0px',
        width: '100vw'
        // height:'100%'
      }}
    >
      <div style={{ display: 'flex', width: '100%' }}>
        <Sidebar SideBarLinks={SideBarLinks} />
        <main
          className=""
          style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto' }}
        >
          <Component {...otherProps} style={{ overflowY: 'auto' }} />
        </main>
      </div>
    </div>
  </>
)

export default InternalLayout
