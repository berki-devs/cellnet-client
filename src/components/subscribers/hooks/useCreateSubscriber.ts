import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { subscriberService } from '@/services/subscriber.service'
import type { TypeSubscriberFormState } from '@/types/subscriber.types'

export function useCreateSubscriber(tariffId: number) {
	const { register, handleSubmit, reset } = useForm<TypeSubscriberFormState>()
	const queryClient = useQueryClient()

	const { mutate: createSubscriber, isPending } = useMutation({
		mutationKey: ['create subscriber'],
		mutationFn: (data: TypeSubscriberFormState) =>
			subscriberService.createSubscriber(tariffId, data),
		onSuccess() {
			reset()
			queryClient.invalidateQueries({
				queryKey: ['subscribers', tariffId]
			})
			toast.success('Subscriber created successfully')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data.message)
			}
		}
	})

	const onSubmit: SubmitHandler<TypeSubscriberFormState> = data =>
		createSubscriber(data)

	return { onSubmit, register, handleSubmit, isPending }
}
