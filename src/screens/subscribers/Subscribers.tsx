import { useParams } from 'react-router'

import { SubscribersContent } from '@/components/subscribers/Subscribers'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumbs/breadcrumb'

export function Subscribers() {
	return (
		<div className='grid gap-4'>
			<SubscribersContent />
		</div>
	)
}
