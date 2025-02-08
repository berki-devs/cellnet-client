import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { tariffService } from '@/services/tariff.service'

export function useDeleteTariff(id: number) {
	const queryClient = useQueryClient()

	const { mutate: deleteTariff } = useMutation({
		mutationKey: ['delete tariff'],
		mutationFn: () => tariffService.deleteTariff(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tariffs']
			})
			toast.success('Tariff deleted successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { deleteTariff }
}
