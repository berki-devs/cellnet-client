import { useQuery } from '@tanstack/react-query'

import { companyService } from '@/services/company.service'

export function useCompanyByName(name: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['company', name],
		queryFn: () => companyService.getCompanyByName(name)
	})

	return { company: data?.data, isLoading }
}
