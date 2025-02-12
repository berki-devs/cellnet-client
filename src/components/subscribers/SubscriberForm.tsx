import type { UseFormRegister } from 'react-hook-form'

import { Button } from '../ui/button/Button'
import { DialogClose } from '../ui/dialog/dialog'
import { Input } from '../ui/input/Input'

import type { TypeSubscriberFormState } from '@/types/subscriber.types'

interface Props {
	isPending: boolean
	onSubmit: () => void
	register: UseFormRegister<TypeSubscriberFormState>
	title: string
}

export function SubscriberForm({
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
						placeholder='First name'
						{...register('firstName', { required: true })}
					/>
					<Input
						type='text'
						placeholder='Last name'
						{...register('lastName', { required: true })}
					/>
					<Input
						type='tel'
						placeholder='Phone number'
						{...register('phoneNumber', { required: true })}
					/>
					<Input
						type='number'
						placeholder='Balance'
						{...register('balance', { required: false })}
					/>
				</div>
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
