import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { companyService } from '@/services/company.service'
import type { TypeCompanyFormState } from '@/types/company.types'

export function useUpdateCompany(key: string) {
	const queryClient = useQueryClient()

	const { mutate: updateCompany } = useMutation({
		mutationKey: ['update company', key],
		mutationFn: ({ id, data }: { id: number; data: TypeCompanyFormState }) =>
			companyService.updateCompany(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['companies']
			})
			toast.success('Company updated successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { updateCompany }
}
