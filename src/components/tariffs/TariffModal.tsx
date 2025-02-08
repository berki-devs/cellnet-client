import { useState } from 'react'

import { FormDialog } from '../ui/dialog/CreateDialog'

import { useCreateTariff } from './hooks/useCreateTariff'
import { TariffForm } from './TariffForm'

interface Props {
	companyId: number
	title: 'Create Tariff' | 'Update Tariff'
}

export function TariffModal({ companyId }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const { handleSubmit, register, isPending, onSubmit } =
		useCreateTariff(companyId)

	const handleOpenModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<FormDialog
			title='Create Tariff'
			isOpen={isOpen}
			setIsOpen={handleOpenModal}
		>
			<TariffForm
				register={register}
				isPending={isPending}
				onSubmit={handleSubmit(onSubmit)}
				setIsOpen={handleOpenModal}
				title='Create Tariff'
			/>
		</FormDialog>
	)
}
