import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { domAnimation, LazyMotion } from 'framer-motion'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }: { children: React.ReactNode }) {
	const [client] = useState(new QueryClient())

	return (
		<QueryClientProvider client={client}>
			<LazyMotion features={domAnimation}>
				<main className='min-h-screen'>
					<div className='p-4 w-full'>{children}</div>
				</main>
			</LazyMotion>
			<Toaster position='top-center' />
		</QueryClientProvider>
	)
}
