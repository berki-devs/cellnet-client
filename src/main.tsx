import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'
import Providers from './providers/Providers.tsx'
import { Routings } from './routes/Routings.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<Routings />
		</Providers>
	</StrictMode>
)
