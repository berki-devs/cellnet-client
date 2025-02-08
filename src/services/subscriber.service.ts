import { axiosClassic } from '@/api/axios'

import type {
	ISubscriberResponse,
	TypeSubscriberFormState
} from '@/types/subscriber.types'

class SubscriberService {
	private BASE_URL = '/subscribers'

	async getSubscribers(tariffId: number) {
		const response = await axiosClassic.get<ISubscriberResponse[]>(
			`${this.BASE_URL}/${tariffId}`
		)
		return response
	}

	async createSubscriber(tariffId: number, data: TypeSubscriberFormState) {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/add/${tariffId}`,
			data
		)
		return response
	}

	async updateSubscriber(
		tariffId: number,
		id: number,
		data: TypeSubscriberFormState
	) {
		const response = await axiosClassic.put(
			`${this.BASE_URL}/update/${tariffId}/${id}`,
			data
		)
		return response
	}

	async deleteSubscriber(id: number) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/remove/${id}`)
		return response
	}
}

export const subscriberService = new SubscriberService()
