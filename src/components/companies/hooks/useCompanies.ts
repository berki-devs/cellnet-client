import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { companyService } from '@/services/company.service'
import type { ICompanyResponse } from '@/types/company.types'

export function useCompanies() {
	const { data } = useQuery({
		queryKey: ['companies'],
		queryFn: () => companyService.getCompanies()
	})

	const [items, setItems] = useState<ICompanyResponse[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
