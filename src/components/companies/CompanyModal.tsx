import { FormDialog } from '../ui/dialog/CreateDialog'

import { CompanyForm } from './CompanyForm'
import { useCreateCompany } from './hooks/useCreateCompany'

interface Props {
	title: 'Create Company' | 'Update Company'
}

export function CompanyModal({ title }: Props) {
	const { handleSubmit, register, isPending, onSubmit } = useCreateCompany()

	return (
		<FormDialog title={title}>
			<CompanyForm
				register={register}
				isPending={isPending}
				onSubmit={handleSubmit(onSubmit)}
				title={title}
			/>
		</FormDialog>
	)
}
