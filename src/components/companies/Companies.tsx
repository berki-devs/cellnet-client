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

import { FormDialog } from '../ui/dialog/CreateDialog'

import { useCompanies } from './hooks/useCompanies'

export function CompaniesContent() {
	const { items } = useCompanies()

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbPage>Companies</BreadcrumbPage>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex justify-end'>
				<FormDialog title='Create Company'>
					<Button size='lg' className='text-md'>
						Create
					</Button>
				</FormDialog>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead className='text-right'>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items?.map(item => (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{item.id}</TableCell>
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
