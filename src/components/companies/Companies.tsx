import { Delete, Eye, PenBox, SidebarOpen } from 'lucide-react'
import { Link } from 'react-router'

import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbPage
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

import { CompanyModal } from './CompanyModal'
import { useCompanies } from './hooks/useCompanies'
import { useDeleteCompany } from './hooks/useDeleteCompany'

export function CompaniesContent() {
	const { items } = useCompanies()
	const { deleteCompany } = useDeleteCompany()

	const handleDeleteCompany = (id: number) => {
		deleteCompany(id)
	}

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbPage>Companies</BreadcrumbPage>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex justify-end'>
				<CompanyModal title='Create Company' />
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>№</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Tariffs</TableHead>
						<TableHead className='text-right'>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items?.map((item, index) => (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{index + 1}</TableCell>
							<TableCell>{item.companyName}</TableCell>
							<TableCell>{item.tariffs?.length}</TableCell>
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
												<Link to={`${pageConfig.tariffs}/${item.id}`}>
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
												onClick={() => handleDeleteCompany(item.id)}
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
