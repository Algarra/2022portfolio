import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react'
import { infoBoxContent } from '../../../app/(home)/page'

interface propTypes {
	infoBox: infoBoxContent | undefined
	setInfoBox: Dispatch<SetStateAction<infoBoxContent | undefined>>
}

export const ProjectInfo: FunctionComponent<propTypes> = ({ infoBox, setInfoBox }) => {
	const [actualIndex, setActualIndex] = useState(0)

	useEffect(() => {
		setActualIndex(0)
	}, [infoBox])

	return (
		<div
			className={` ${
				infoBox ?? 'hidden'
			} z-50 fixed w-[90%] h-fit lg:w-2/3 mx-auto inset-x-0 my-auto inset-y-0 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700`}
		>
			<button
				onClick={() => {
					setActualIndex(0)
					setInfoBox(undefined)
				}}
				className=' absolute right-2 text-white text-2xl'
				aria-label='close'
			>
				<i data-testid='closeIcon' className='fa-solid fa-xmark'></i>
			</button>
			<ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
				{infoBox?.options.map((item, index) => (
					<li className='mr-2' key={`${item}-${index}`}>
						<button
							type='button'
							role='tab'
							aria-label='tab'
							onClick={() => setActualIndex(index)}
							className={`inline-block p-4 ${
								actualIndex === index ? 'text-blue-600' : 'text-blue-200'
							} rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 `}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
			<div id='defaultTabContent'>
				{infoBox?.info.map((item, index) => (
					<div
						className={` ${actualIndex !== index && 'hidden'} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
						key={`${item.title}-${index}`}
					>
						<h2 className='mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>{item.title}</h2>
						<p className='mb-3 text-gray-500 dark:text-gray-400'>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}
