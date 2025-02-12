import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'

export function useDeleteSubscriber(tariffId: number) {
	const queryClient = useQueryClient()

	const { mutate: deleteSubscriber } = useMutation({
		mutationKey: ['delete subscriber'],
		mutationFn: (id: number) => subscriberService.deleteSubscriber(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['subscribers', tariffId]
			})
			toast.success('Subscriber deleted successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { deleteSubscriber }
}
