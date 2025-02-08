import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'
import type { TypeSubscriberFormState } from '@/types/subscriber.types'

export function useUpdateSubscriber(id: number, tariffId: number) {
	const queryClient = useQueryClient()

	const { mutate: updateSubscriber } = useMutation({
		mutationKey: ['update subscriber'],
		mutationFn: (data: TypeSubscriberFormState) =>
			subscriberService.updateSubscriber(tariffId, id, data),
		onSuccess() {
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

	return { updateSubscriber }
}
