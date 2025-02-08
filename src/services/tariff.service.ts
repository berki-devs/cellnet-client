import { axiosClassic } from '@/api/axios'

import type { ITariffResponse, TypeTariffFormState } from '@/types/tariff.types'

class TariffService {
	private BASE_URL = '/tariffs'

	async getTariffs(companyId: number) {
		const response = await axiosClassic.get<ITariffResponse[]>(
			`${this.BASE_URL}/${companyId}`
		)
		return response
	}

	async createTariff(companyId: number, data: TypeTariffFormState) {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/add/${companyId}`,
			data
		)
		return response
	}

	async updateTariff(companyId: number, id: number, data: TypeTariffFormState) {
		const response = await axiosClassic.put(
			`${this.BASE_URL}/update/${companyId}/${id}`,
			data
		)
		return response
	}

	async deleteTariff(id: number) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/remove/${id}`)
		return response
	}
}

export const tariffService = new TariffService()
