import { FormDialog } from '../ui/dialog/CreateDialog'

import { useCreateTariff } from './hooks/useCreateTariff'
import { TariffForm } from './TariffForm'

interface Props {
	companyId: number
	title: 'Create Tariff' | 'Update Tariff'
}

export function TariffModal({ companyId, title }: Props) {
	const { handleSubmit, register, isPending, onSubmit } =
		useCreateTariff(companyId)

	return (
		<FormDialog title={title}>
			<TariffForm
				register={register}
				isPending={isPending}
				onSubmit={handleSubmit(onSubmit)}
				title={title}
			/>
		</FormDialog>
	)
}
