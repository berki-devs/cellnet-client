import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'
import type { TypeSubscriberFormState } from '@/types/subscriber.types'

export function useCreateSubscriber(tariffId: number) {
	const queryClient = useQueryClient()

	const { mutate: createSubscriber } = useMutation({
		mutationKey: ['create subscriber'],
		mutationFn: (data: TypeSubscriberFormState) =>
			subscriberService.createSubscriber(tariffId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['subscribers', tariffId]
			})
			toast.success('Subscriber created successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { createSubscriber }
}
