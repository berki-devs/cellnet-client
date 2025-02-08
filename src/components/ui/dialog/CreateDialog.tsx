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
	isOpen: boolean
	setIsOpen: () => void
	title: string
	children: ReactNode
}

export function FormDialog({ isOpen, setIsOpen, title, children }: Props) {
	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<Button size='lg' className='text-md' onClick={setIsOpen}>
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
