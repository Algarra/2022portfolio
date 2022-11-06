'use client'
import Link from 'next/link'
import { FC, useContext, useEffect, useState } from 'react'
import { bankContext } from '../../../../context/bankContext'
import { accountDetails } from '../../../../data/types'
import { Loader } from '../../common/Loader'
import { TableModal } from './components/CreateAccountModal'
import { TableNavigation } from './components/TableNavigation'

export const Table: FC = () => {
	const [showModal, setShowModal] = useState(false)
	const [filter, setFilter] = useState('')
	const [filteredAccounts, setFilteredAccounts] = useState<accountDetails[]>([])
	const [page, setPage] = useState(0)
	const { accounts, setAccounts, setNotification } = useContext(bankContext)

	const changeAccountStatus = async (iban: string) => {
		try {
			const editAccountsResult = await fetch(`/api/close-account`, {
				method: 'PATCH',
				body: JSON.stringify({
					iban,
				}),
			}).then(response => response.json())

			setNotification({ type: 'success', message: 'Account closed' })
			setAccounts(editAccountsResult.accountsList)
		} catch (error: any) {
			setNotification({ type: 'error', message: error.response.data.message ?? error.message })
		}
	}

	useEffect(() => {
		if (filter) {
			setFilteredAccounts((accounts ?? []).filter(account => account.iban.toUpperCase().startsWith(filter.toUpperCase())))
		} else {
			setFilteredAccounts([])
		}
	}, [filter])

	useEffect(() => {
		setPage(0)
	}, [accounts])

	return (
		<div className='overflow-x-auto relative mx-4 md:mx-10 p-3 shadow-md bg-gray-800 rounded-lg'>
			<div className='flex justify-between flex-wrap-reverse items-center pb-4 '>
				<div className='relative w-full sm:w-fit '>
					<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
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
				<button
					onClick={() => {
						setShowModal(true)
					}}
					className='relative inline-flex items-center mb-3 sm:mb-0 justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-800'
				>
					<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						Create an account
					</span>
				</button>
			</div>
			{accounts ? (
				<>
					<div className=' overflow-x-auto w-full'>
						<table className=' w-full text-sm text-left text-gray-400 '>
							<thead className='text-xs uppercase bg-gray-500 text-white'>
								<tr>
									<th scope='col' className='py-3 px-6'>
										Account
									</th>
									<th scope='col' className='py-3 px-6'>
										Country
									</th>
									<th scope='col' className='py-3 px-6'>
										Status
									</th>
									<th scope='col' className='py-3 px-6'>
										Amount
									</th>
									<th scope='col' className='py-3 px-6'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{(!filteredAccounts.length && !filter ? accounts : filteredAccounts).slice(page * 5, (page + 1) * 5).map(row => (
									<tr key={row.iban} className=' border-b border-gray-800 hover:bg-gray-600'>
										<th scope='row' className=' flex items-center py-4 px-6 whitespace-nowrap text-white'>
											<Link href={`/bankApp/details/${row.iban}`} className='cursor-pointer'>
												<div className='pl-3'>
													<div className='text-base font-semibold'>{row.iban}</div>
													<div className='font-normal text-gray-300'>{row.bank}</div>
												</div>
											</Link>
										</th>

										<td className='py-4 px-6 text-white'>{row.country}</td>
										<td className='py-4 px-6'>
											<div className='flex items-center text-white'>
												<div className={`h-2.5 w-2.5 rounded-full ${row.status ? 'bg-green-400' : ' bg-red-500'}  mr-2`}></div>
												{row.status ? 'Active' : 'Closed'}
											</div>
										</td>
										<td className='py-4 px-6 text-white'>
											{row.amount} {row.currency}
										</td>
										<td className='py-4 px-6'>
											<div
												onClick={() => {
													if (row.status) {
														changeAccountStatus(row.iban)
													} else {
														setNotification({ type: 'alert', message: 'Account is already closed' })
													}
												}}
												className=' cursor-pointer font-semibold text-red-400 hover:text-red-200 '
											>
												Close
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{((!filteredAccounts.length && filter) || !accounts.length) && (
							<div className=' w-full text-center '>
								<h3>No results found</h3>
							</div>
						)}
					</div>
					{(!filteredAccounts.length ? accounts : filteredAccounts).length > 5 && (
						<TableNavigation page={page} setPage={setPage} accounts={accounts} filteredAccounts={filteredAccounts} />
					)}
				</>
			) : (
				<div className='m-auto justify-center w-full flex p-5 '>
					<Loader />
				</div>
			)}

			<TableModal setShowModal={setShowModal} showModal={showModal} />
		</div>
	)
}
