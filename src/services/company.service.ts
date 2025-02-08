import { axiosClassic } from '@/api/axios'

import type {
	ICompanyResponse,
	TypeCompanyFormState
} from '@/types/company.types'

class CompanyService {
	private BASE_URL = '/companies'

	async getCompanies() {
		const response = await axiosClassic.get<ICompanyResponse[]>(this.BASE_URL)
		return response
	}

	async getCompanyByName(name: string) {
		const response = await axiosClassic.get<ICompanyResponse[]>(
			`${this.BASE_URL}/${name}`
		)
		return response
	}

	async createCompany(data: TypeCompanyFormState) {
		const response = await axiosClassic.post(`${this.BASE_URL}/add`, data)
		return response
	}

	async updateCompany(id: number, data: TypeCompanyFormState) {
		const response = await axiosClassic.put(
			`${this.BASE_URL}/update/${id}`,
			data
		)
		return response
	}

	async deleteCompany(id: number) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/remove/${id}`)
		return response
	}
}

export const companyService = new CompanyService()
