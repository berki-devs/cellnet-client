import { Outlet } from 'react-router'

import { Layout } from '@/components/layout/Layout'

export const LayoutRoutes = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
