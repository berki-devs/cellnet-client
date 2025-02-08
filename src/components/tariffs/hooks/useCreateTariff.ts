import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { tariffService } from '@/services/tariff.service'
import type { TypeTariffFormState } from '@/types/tariff.types'

export function useCreateTariff(companyId: number) {
	const queryClient = useQueryClient()

	const { mutate: createTariff } = useMutation({
		mutationKey: ['create tariff'],
		mutationFn: (data: TypeTariffFormState) =>
			tariffService.createTariff(companyId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tariffs']
			})
			toast.success('Tariff created successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { createTariff }
}
