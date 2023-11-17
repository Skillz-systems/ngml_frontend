/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { AuthRoutes } from './AuthRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { CustomerRoutes } from './CustomerRoutes'

export const PrivateAdminRoute = ({ children }: { children: any }) => {
  return <> {children} </>
}

export const routes = {
  AuthRoutes,
  PrivateRoutes,
  CustomerRoutes,
  PrivateAdminRoute
}
