import React from 'react'
import { Box } from '@mui/material'
import Sidebar from '../SideBar/SideBar'
import { SideBarLinks } from 'src/SideBarLinks/SideBarLinks'
// import { SideBarLinks } from 'src/SideBarLinks'

/**
 * this is the Internal Layout components of the app. It renders the passed
 *  components and default Side Bar
 * @function
 * @param {object}  props - layout component.
 * @param   {object} Component Component to be rendered
 * @return {HTMLElement}
 */
// eslint-disable-next-line react/prop-types, @typescript-eslint/explicit-function-return-type
const InternalLayout = ({ Component, title, ...otherProps }: object): HTMLElement => (
    <>
        <Box 
            sx={{
              display: 'flex',
              height: '100vh',
              columnGap: '2px',
              marginTop: '0px',
              width: '100vw'
              // height:'100%'
            }}
        >
            <Box style={{ display: 'flex', width: '100%' }}>
                <Sidebar SideBarLinks={SideBarLinks} />
                <main className="" style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto' }}>
                    <Component {...otherProps} style={{ overflowY: 'auto' }} />
                </main>
            </Box>
        </Box>
    </>
)

export default InternalLayout
