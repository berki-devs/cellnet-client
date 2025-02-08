import type { ReactNode } from 'react'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog/dialog'

interface Props {
	title: string
	children: ReactNode
}

export function FormDialog({ title, children }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<form action=''></form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
