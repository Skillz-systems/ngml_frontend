/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { AuthRoutes } from './AuthRoutes'
import { CustomerRoutes } from './CustomerRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const PrivateAdminRoute = ({ children }: { children: any }) => {
  return <> {children} </>
}

export const routes = {
  AuthRoutes,
  PrivateRoutes,
  CustomerRoutes,
  PrivateAdminRoute
}
