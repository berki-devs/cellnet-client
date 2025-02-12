import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { companyService } from '@/services/company.service'
import type { TypeCompanyFormState } from '@/types/company.types'

export function useCreateCompany() {
	const { register, handleSubmit, reset } = useForm<TypeCompanyFormState>()
	const queryClient = useQueryClient()

	const { mutate: createCompany, isPending } = useMutation({
		mutationKey: ['create company'],
		mutationFn: (data: TypeCompanyFormState) =>
			companyService.createCompany(data),
		onSuccess() {
			reset()
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

	const onSubmit: SubmitHandler<TypeCompanyFormState> = data =>
		createCompany(data)

	return {
		register,
		onSubmit,
		isPending,
		handleSubmit
	}
}
