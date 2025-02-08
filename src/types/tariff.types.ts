import type { ISubscriberResponse } from './subscriber.types'

export interface ITariffResponse {
	id: number
	name: string
	price?: number
	subscribers?: ISubscriberResponse[]
}

export type TypeTariffFormState = Partial<Omit<ITariffResponse, 'id'>>
