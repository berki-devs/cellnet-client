import type { ITariffResponse } from './tariff.types'

export const TaskPriority = {
	low: 'low',
	medium: 'medium',
	high: 'high'
} as const

export interface ICompanyResponse {
	id: number
	companyName: string
	tariffs?: ITariffResponse[]
}

export type TypeCompanyFormState = Partial<Omit<ICompanyResponse, 'id'>>
