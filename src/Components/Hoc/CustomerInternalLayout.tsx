import React from 'react'
import CustomerLayout from '../Layout/CustomerLayout'

/**
 * this is an HOC that renders the Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

// eslint-disable-next-line react/display-name
const CustomerInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <CustomerLayout {...passThroughProps} Component={Component} />
  </>
)

export default CustomerInternalLayout
