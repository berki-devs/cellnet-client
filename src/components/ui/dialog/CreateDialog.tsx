import type { ReactNode } from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog/dialog'

import { Button } from '../button/Button'

interface Props {
	title: string
	children: ReactNode
}

export function FormDialog({ title, children }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='lg' className='text-md'>
					Create
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	)
}
