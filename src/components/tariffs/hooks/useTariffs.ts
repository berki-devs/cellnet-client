import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { tariffService } from '@/services/tariff.service'

// TODO: fix add for all keys companyId: number
export function useTariffs(companyId: number) {
	const { data } = useQuery({
		queryKey: ['tariffs'],
		queryFn: () => tariffService.getTariffs(companyId)
	})

	const [items, setItems] = useState(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
