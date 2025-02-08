import type { RouteProps } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { Companies } from '@/screens/companies/Companies'
import { Subscribers } from '@/screens/subscribers/Subscribers'
import { Tariffs } from '@/screens/tariffs/Tariffs'

export const ROUTES: RouteProps[] = [
	{
		element: <Companies />,
		index: true
	},
	{
		path: `${pageConfig.tariffs}/:companyId`,
		element: <Tariffs />
	},
	{
		path: `${pageConfig.subscribers}/:companyId/:tariffId`,
		element: <Subscribers />
	}
]
