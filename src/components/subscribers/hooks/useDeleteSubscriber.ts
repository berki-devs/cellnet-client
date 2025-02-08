import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'

export function useDeleteSubscriber(id: number, tariffId: number) {
	const queryClient = useQueryClient()

	const { mutate: deleteSubscriber } = useMutation({
		mutationKey: ['delete subscriber'],
		mutationFn: () => subscriberService.deleteSubscriber(id),
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
