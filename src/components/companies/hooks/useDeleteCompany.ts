import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { companyService } from '@/services/company.service'

export function useDeleteCompany() {
	const queryClient = useQueryClient()

	const { mutate: deleteCompany, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete company'],
		mutationFn: (id: number) => companyService.deleteCompany(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['companies']
			})
			toast.success('Company deleted successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	return { deleteCompany, isDeletePending }
}
