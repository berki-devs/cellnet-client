import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:8080/api',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosClassic = axios.create(options)

axiosClassic.interceptors.request.use(config => {
	return config
})

axiosClassic.interceptors.response.use(
	config => config,
	async error => {
		throw error
	}
)

export { axiosClassic }
