import { BrowserRouter, Route, Routes } from 'react-router'

import { LayoutRoutes } from './LayoutRoutes'
import { ROUTES } from './routes.data'

export function Routings() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutRoutes />}>
					{ROUTES.map((route, index) => (
						<Route key={index++} {...route} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
