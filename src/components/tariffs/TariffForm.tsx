import type { UseFormRegister } from 'react-hook-form'

import { Button } from '../ui/button/Button'
import { Input } from '../ui/input/Input'

import type { TypeTariffFormState } from '@/types/tariff.types'

interface Props {
	setIsOpen: () => void
	isPending: boolean
	onSubmit: () => void
	register: UseFormRegister<TypeTariffFormState>
	title: string
}

export function TariffForm({
	setIsOpen,
	onSubmit,
	register,
	isPending,
	title
}: Props) {
	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='grid gap-4'>
					<Input
						type='text'
						placeholder='Type company name'
						{...register('name', { required: true })}
					/>
					<Input
						type='number'
						min='0'
						placeholder='Type price'
						{...register('price', { required: true })}
					/>
				</div>
				<div className='flex items-center justify-between mt-5 w-full'>
					<Button
						type='reset'
						variant='secondary'
						size='lg'
						disabled={isPending}
						onClick={setIsOpen}
					>
						Cancel
					</Button>
					<Button
						type='submit'
						size='lg'
						disabled={isPending}
						onClick={setIsOpen}
					>
						{title}
					</Button>
				</div>
			</form>
		</>
	)
}
