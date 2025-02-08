export interface ISubscriberResponse {
	id: number
	firstName: string
	lastName: string
	phoneNumber: string
	balance: number
}

export type TypeSubscriberFormState = Partial<Omit<ISubscriberResponse, 'id'>>
