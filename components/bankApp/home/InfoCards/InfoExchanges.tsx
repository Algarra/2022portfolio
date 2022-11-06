'use client'
import { FC } from 'react'
import { CardStats } from './Cards/CardStats'
import { Loader } from '../../common/Loader'
import { exchanges } from '../../../../app/(bank)/bankApp/page'

export const InfoExchanges: FC<{ exchanges: exchanges[] }> = ({ exchanges }) => {
	const colors = ['bg-red-600', 'bg-orange-700', 'bg-pink-600', 'bg-blue-600']

	return (
		<>
			<div className='relative md:pb-4  overflow-y-hidden h-[270px] lg:h-fit '>
				<div className=' md:px-10  mx-auto w-full'>
					<div className='flex flex-wrap'>
						{exchanges.length ? (
							<>
								{exchanges.map((exchange, index) => (
									<div key={exchange.statTo} className='w-full lg:w-6/12 xl:w-3/12 px-4'>
										<CardStats
											statFrom={exchange.statFrom}
											statTo={exchange.statTo}
											statArrow={exchange.statArrow}
											statPercent={exchange.statPercent}
											statPercentColor={exchange.statPercentColor}
											statDescripiron={exchange.statDescripiron}
											statIconColor={colors[index]}
											statActual={exchange.statActual}
										/>
									</div>
								))}
							</>
						) : (
							<div className='w-full m-auto text-center lg:w-6/12 xl:w-3/12 px-4'>
								<Loader />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
