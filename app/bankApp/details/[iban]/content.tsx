'use client'
import { FC, useEffect, useState } from 'react'
import { DetailsTable } from '../../../../components/bankApp/details/Table'
import { transfer } from '../../../../data/mocks/transfers'

export const DetailsContent: FC<{ actualTransfers: transfer[]; iban: string }> = ({ actualTransfers, iban }) => {
	const [filteredTransfers, setFilteredTransfers] = useState<transfer[]>([])
	const [filter, setFilter] = useState('')

	useEffect(() => {
		if (filter) {
			setFilteredTransfers(
				actualTransfers.filter(
					tranfer =>
						tranfer.to.toUpperCase().startsWith(filter.toUpperCase()) || tranfer.from?.toUpperCase().startsWith(filter.toUpperCase())
				)
			)
		} else {
			setFilteredTransfers([])
		}
	}, [filter])

	return (
		<div className='w-full h-fit md:m-auto py-5 '>
			<div className=' relative mx-4 md:mx-10 p-3 shadow-md bg-gray-800 rounded-lg'>
				<div className='relative w-full pb-3 sm:w-fit '>
					<div className='flex absolute inset-y-0 left-0 -top-2 items-center pl-3 pointer-events-none'>
						<i className='fa-solid fa-magnifying-glass w-5 h-5 text-gray-300'></i>
					</div>
					<input
						id='table-search-accounts'
						className='block p-2 pl-10 w-80 text-base md:text-sm rounded-lg border bg-gray-500 border-gray-600 placeholder-gray-300 text-white focus:ring-blue-500 focus:border-blue-500'
						placeholder='Search by iban'
						value={filter}
						onChange={e => setFilter(e.target.value)}
					/>
				</div>
				<DetailsTable filter={filter} filteredTransfers={filteredTransfers} transfers={actualTransfers} iban={iban} />
			</div>
		</div>
	)
}
