import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { tariffService } from '@/services/tariff.service'
import type { ITariffResponse, TypeTariffFormState } from '@/types/tariff.types'

export function useUpdateTariff(companyId: number, id: number) {
	const { register, handleSubmit, reset } = useForm<TypeTariffFormState>()
	const queryClient = useQueryClient()

	const { mutate: updateTariff, isPending: isPending } = useMutation({
		mutationKey: ['update tariff'],
		mutationFn: (data: ITariffResponse) =>
			tariffService.updateTariff(companyId, id, data),
		onSuccess() {
			reset()
			queryClient.invalidateQueries({
				queryKey: ['companies']
			})
			toast.success('Tariff updated successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return {
		register,
		handleSubmit,
		updateTariff,
		isPending
	}
}
