import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { tariffService } from '@/services/tariff.service'
import type { ITariffResponse } from '@/types/tariff.types'

export function useUpdateTariff(companyId: number, id: number) {
	const queryClient = useQueryClient()

	const { mutate: updateTariff } = useMutation({
		mutationKey: ['update tariff'],
		mutationFn: (data: ITariffResponse) =>
			tariffService.updateTariff(companyId, id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['companies']
			})
			toast.success('Company created successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { updateTariff }
}
