import { FC, useState } from 'react'
import { transfer } from '../../../../../../data/mocks/transfers'
import { TransfersNavigation } from './Navigation'

export const DetailsTable: FC<{ filteredTransfers: transfer[]; filter: string; transfers: transfer[]; iban: string }> = ({
	filteredTransfers,
	filter,
	transfers,
	iban,
}) => {
	const [page, setPage] = useState(0)

	return (
		<div className=' overflow-x-auto w-full'>
			<table className=' w-full text-sm text-left text-gray-400 '>
				<thead className='text-xs uppercase bg-gray-500 text-white'>
					<tr>
						<th scope='col' className='py-3 px-6'>
							Origin Account
						</th>
						<th scope='col' className='py-3 px-6'>
							Amount
						</th>
						<th scope='col' className='py-3 px-6'>
							Concept
						</th>
						<th scope='col' className='py-3 px-6'>
							Type
						</th>
						<th scope='col' className='py-3 px-6'>
							Destination
						</th>
					</tr>
				</thead>
				<tbody>
					{(!filteredTransfers.length && !filter ? transfers : filteredTransfers).slice(page * 5, (page + 1) * 5).map((row, index) => (
						<tr key={`${row.from}-${row.to}-${index}`} className='border-b border-gray-800 hover:bg-gray-600'>
							<th scope='row' className='flex items-center py-4 px-6 whitespace-nowrap text-white'>
								<div className='pl-3'>
									{row.from ? (
										<>
											<div className='text-base font-semibold'>{row.from}</div>
											<div className='font-normal text-gray-300'>
												{row.originAmount} {row.originCurrency}
											</div>
										</>
									) : (
										<div className='text-base font-semibold'>initial income</div>
									)}
								</div>
							</th>
							<td className='py-4 px-6 text-white'>
								{row.destinationAmount} {row.destinationCurrency}
							</td>
							<td className='py-4 px-6 text-white'>{row.concept}</td>
							<td className='py-4 px-6'>
								<div className='flex items-center text-white'>
									<div className={`h-2.5 w-2.5 rounded-full ${row.to === iban ? 'bg-green-400' : ' bg-red-500'}  mr-2`}></div>
									{row.to === iban ? 'Income' : 'Outcome'}
								</div>
							</td>
							<td className='py-4 px-6 text-white'>{row.to}</td>
						</tr>
					))}
				</tbody>
			</table>
			{((!filteredTransfers.length && filter) || !transfers.length) && (
				<div className=' w-full text-center '>
					<h3>No results found</h3>
				</div>
			)}
			{(!filteredTransfers.length ? transfers : filteredTransfers).length > 5 && (
				<TransfersNavigation page={page} setPage={setPage} transfers={transfers} filteredTransfers={filteredTransfers} />
			)}
		</div>
	)
}
