import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { subscriberService } from '@/services/subscriber.service'
import type { ISubscriberResponse } from '@/types/subscriber.types'

export function useSubscribers(tariffId: number) {
	const { data } = useQuery({
		queryKey: ['subscribers', tariffId],
		queryFn: () => subscriberService.getSubscribers(tariffId)
	})

	const [items, setItems] = useState<ISubscriberResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
