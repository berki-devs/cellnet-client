import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { companyService } from '@/services/company.service'
import type {
	ICompanyResponse,
	TypeCompanyFormState
} from '@/types/company.types'

export function useUpdateCompany(key: string) {
	const { handleSubmit, register, reset } = useForm<TypeCompanyFormState>()
	const queryClient = useQueryClient()

	const { mutate: updateCompany, isPending: isPending } = useMutation({
		mutationKey: ['update company', key],
		mutationFn: ({ id, data }: { id: number; data: ICompanyResponse }) =>
			companyService.updateCompany(id, data),
		onSuccess() {
			reset()
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

	return {
		isPending,
		updateCompany,
		handleSubmit,
		register
	}
}
