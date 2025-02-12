import { FormDialog } from '../ui/dialog/CreateDialog'

import { useCreateSubscriber } from './hooks/useCreateSubscriber'
import { SubscriberForm } from './SubscriberForm'

interface Props {
	tariffId: number
	title: 'Create Subscriber' | 'Update Subscriber'
}

export function SubscriberModal({ tariffId, title }: Props) {
	const { handleSubmit, register, isPending, onSubmit } =
		useCreateSubscriber(tariffId)

	return (
		<FormDialog title={title}>
			<SubscriberForm
				register={register}
				isPending={isPending}
				onSubmit={handleSubmit(onSubmit)}
				title={title}
			/>
		</FormDialog>
	)
}
