import { Delete, PenBox } from 'lucide-react'
import { useParams } from 'react-router'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumbs/Breadcrumb'
import { Button } from '@/components/ui/button/Button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover/Popover'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table/Table'

import { pageConfig } from '@/config/page.config'

import { FormDialog } from '../ui/dialog/CreateDialog'

import { useSubscribers } from './hooks/useSubscribers'

export function SubscribersContent() {
	const { companyId, tariffId } = useParams()
	const { items } = useSubscribers(Number(tariffId))

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href={pageConfig.companies}>
							Companies
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href={`${pageConfig.tariffs}/${companyId}`}>
							Tariffs
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Subsribers - {tariffId}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex justify-end'>
				<FormDialog title='Create Tariff'>
					<Button size='lg' className='text-md'>
						Create
					</Button>
				</FormDialog>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>ID</TableHead>
						<TableHead>FullName</TableHead>
						<TableHead>Balance</TableHead>
						<TableHead>PhoneNumber</TableHead>
						<TableHead className='text-right'>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items?.map(item => (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{item.id}</TableCell>
							<TableCell>{`${item.firstName} - ${item.lastName}`}</TableCell>
							<TableCell>{item.balance}</TableCell>
							<TableCell>{item.phoneNumber}</TableCell>
							<TableCell className='text-right'>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant={'outline'}>
											<PenBox />
										</Button>
									</PopoverTrigger>
									<PopoverContent>
										<div className='grid gap-2 w-fit'>
											<Button
												variant='outline'
												className='bg-blue-300 hover:bg-blue-400'
											>
												<PenBox size={16} />
											</Button>
											<Button variant='destructive'>
												<Delete size={16} />
											</Button>
										</div>
									</PopoverContent>
								</Popover>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}
