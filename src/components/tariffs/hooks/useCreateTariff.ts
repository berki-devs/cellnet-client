import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { tariffService } from '@/services/tariff.service'
import type { TypeTariffFormState } from '@/types/tariff.types'

export function useCreateTariff(companyId: number) {
	const { register, handleSubmit, reset } = useForm<TypeTariffFormState>()
	const queryClient = useQueryClient()

	const { mutate: createTariff, isPending: isPending } = useMutation({
		mutationKey: ['create tariff'],
		mutationFn: (data: TypeTariffFormState) =>
			tariffService.createTariff(companyId, data),
		onSuccess() {
			reset()
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

	const onSubmit: SubmitHandler<TypeTariffFormState> = data =>
		createTariff(data)

	return {
		register,
		handleSubmit,
		onSubmit,
		isPending
	}
}
