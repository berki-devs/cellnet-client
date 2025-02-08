import type { ReactNode } from 'react'

import { Header } from './header/Header'

interface Props {
	children: ReactNode
}

export function Layout({ children }: Props) {
	return (
		<div>
			<Header />
			<div className='p-4 w-full'>{children}</div>
		</div>
	)
}
