import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'
import type { TypeSubscriberFormState } from '@/types/subscriber.types'

export function useUpdateSubscriber(tariffId: number) {
	const { register, handleSubmit, reset } = useForm<TypeSubscriberFormState>()
	const queryClient = useQueryClient()

	const { mutate: updateSubscriber, isPending } = useMutation({
		mutationKey: ['update subscriber'],
		mutationFn: ({ id, data }: { id: number; data: TypeSubscriberFormState }) =>
			subscriberService.updateSubscriber(tariffId, id, data),
		onSuccess() {
			reset()
			queryClient.invalidateQueries({
				queryKey: ['subscribers', tariffId]
			})
			toast.success('Subscriber updated successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { register, handleSubmit, updateSubscriber, isPending }
}
