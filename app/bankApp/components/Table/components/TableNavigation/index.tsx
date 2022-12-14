import { Dispatch, FC, SetStateAction } from 'react'
import { accountDetails } from '../../../../../../data/types'

type TableNavigationProps = {
	page: number
	setPage: Dispatch<SetStateAction<number>>
	filteredAccounts: accountDetails[]
}

export const TableNavigation: FC<TableNavigationProps> = ({ page, setPage, filteredAccounts }) => {
	return (
		<nav className='flex justify-between items-center pt-4' aria-label='Table navigation'>
			<span className='text-sm font-normal pl-2 text-gray-400'>
				Showing{' '}
				<span className='font-semibold  text-white'>
					{`${page * 5} - ${(page + 1) * 5 > filteredAccounts.length ? filteredAccounts.length : (page + 1) * 5}`}
				</span>{' '}
				of <span className='font-semibold  text-white'>{filteredAccounts.length}</span>
			</span>
			<ul className='inline-flex items-center -space-x-px'>
				<li>
					<span
						onClick={() => {
							if (page !== 0) setPage(page - 1)
						}}
						className={`block py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-gray-900 border-gray-800 text-gray-300 ${
							page !== 0 && 'hover:bg-gray-700 hover:text-white cursor-pointer'
						} `}
					>
						<span className='sr-only'>Previous</span>
						<i className='fa-solid fa-chevron-left h-5'></i>
					</span>
				</li>
				<li>
					<div className='py-2 px-3 leading-tight  border bg-gray-900 border-gray-800 text-gray-300 '>{page + 1}</div>
				</li>
				<li>
					<span
						onClick={() => {
							console.log('first')
							if (page < Math.floor(filteredAccounts.length / 5)) setPage(page + 1)
						}}
						className={`block py-2 px-3 leading-tight rounded-r-lg border bg-gray-900 border-gray-800 text-gray-300 ${
							page < Math.floor(filteredAccounts.length / 5) && 'hover:bg-gray-700 hover:text-white cursor-pointer'
						} `}
					>
						<span className='sr-only'>Next</span>
						<i className='fa-solid fa-chevron-right h-5'></i>
					</span>
				</li>
			</ul>
		</nav>
	)
}
