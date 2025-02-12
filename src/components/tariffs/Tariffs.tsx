import { Delete, Eye, PenBox, SidebarOpen } from 'lucide-react'
import { Link, useParams } from 'react-router'

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

import { useDeleteTariff } from './hooks/useDeleteTariff'
import { useTariffs } from './hooks/useTariffs'
import { TariffModal } from './TariffModal'

export function TariffsContent() {
	const { companyId } = useParams()
	const { items } = useTariffs(Number(companyId))

	const { deleteTariff } = useDeleteTariff()

	const handleDeleteTariff = (id: number) => {
		deleteTariff(id)
	}

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
					<BreadcrumbPage>Tariffs</BreadcrumbPage>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex justify-end'>
				<TariffModal companyId={Number(companyId)} title='Create Tariff' />
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>№</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Subscribers</TableHead>
						<TableHead className='text-right'>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items?.map((item, index) => (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{index + 1}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.price}</TableCell>
							<TableCell>{item.subscribers?.length}</TableCell>
							<TableCell className='text-right'>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant={'outline'}>
											<Eye />
										</Button>
									</PopoverTrigger>
									<PopoverContent>
										<div className='grid gap-2 w-fit'>
											<Button asChild variant={'ghost'}>
												<Link
													to={`${pageConfig.subscribers}/${companyId}/${item.id}`}
												>
													<SidebarOpen size={16} />
												</Link>
											</Button>

											<Button
												variant='outline'
												className='bg-blue-300 hover:bg-blue-400'
											>
												<PenBox size={16} />
											</Button>
											<Button
												variant='destructive'
												onClick={() => handleDeleteTariff(item.id)}
											>
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
