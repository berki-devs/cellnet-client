import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { companyService } from '@/services/company.service'
import type { TypeCompanyFormState } from '@/types/company.types'

export function useCreateCompany() {
	const queryClient = useQueryClient()

	const { mutate: createCompany } = useMutation({
		mutationKey: ['create company'],
		mutationFn: (data: TypeCompanyFormState) =>
			companyService.createCompany(data),
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

	return { createCompany }
}
