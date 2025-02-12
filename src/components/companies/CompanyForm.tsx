import type { UseFormRegister } from 'react-hook-form'

import { Button } from '../ui/button/Button'
import { DialogClose } from '../ui/dialog/dialog'
import { Input } from '../ui/input/Input'

import type { TypeCompanyFormState } from '@/types/company.types'

interface Props {
	isPending: boolean
	onSubmit: () => void
	register: UseFormRegister<TypeCompanyFormState>
	title: string
}

export function CompanyForm({ onSubmit, register, isPending, title }: Props) {
	return (
		<>
			<form onSubmit={onSubmit}>
				<Input
					type='text'
					placeholder='Type company name'
					{...register('companyName', { required: true })}
				/>
				<div className='flex items-center justify-between mt-5 w-full'>
					<DialogClose asChild>
						<Button
							type='reset'
							variant='secondary'
							size='lg'
							disabled={isPending}
						>
							Cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button type='submit' size='lg' disabled={isPending}>
							{title}
						</Button>
					</DialogClose>
				</div>
			</form>
		</>
	)
}
