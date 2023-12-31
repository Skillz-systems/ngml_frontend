import React from 'react'
import InternalLayout from 'src/Components/Layout/InternalLayout'

/**
 * this is an HOC that renders the Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

// eslint-disable-next-line react/display-name
const ComposeInternalLayouts = (Component: any) => (passThroughProps: any) => (
  <>
    <InternalLayout {...passThroughProps} Component={Component} />
  </>
)

export default ComposeInternalLayouts
