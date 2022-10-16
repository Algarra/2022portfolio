import { Canvas } from '@react-three/fiber'
import { useContext, useEffect, useState } from 'react'
import { roomContext } from '../../context/RoomContext'
import MyRoom from './MyRoom'
import Title from './components/Title'
import Link from 'next/link'

const RoomPage = () => {
	const [content, setContent] = useState(false)
	const [loading, setLoading] = useState(true)
	const { itemSelected, setItemSelected } = useContext(roomContext)

	useEffect(() => {
		if (itemSelected) {
			setTimeout(() => {
				setContent(true)
			}, 600)
		} else {
			setContent(false)
		}
	}, [itemSelected])

	useEffect(() => {
		const canvas = document.getElementById('canvas')
		if (canvas) canvas.style.display = 'unset'
	}, [])

	return (
		<div className=' justify-center flex absolute inset-0  bg-zinc-600'>
			<Link href='/'>
				<button
					aria-label='close'
					className='absolute z-40 left-3 top-3 lg:left-7 lg:top-5 inline-flex  items-center rounded-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
				>
					<span className='relative px-3.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>
						{'X'}
					</span>
				</button>
			</Link>

			<Title />

			{loading && (
				<button
					disabled
					type='button'
					className=' absolute z-50 mx-auto inset-x-0 my-auto w-fit mt-[45vh] py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center'
				>
					<svg
						role='status'
						className='inline mr-2 w-4 h-4 text-gray-200 animate-spin '
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='#1C64F2'
						/>
					</svg>
					Loading...
				</button>
			)}

			<div id='canvas' style={{ display: 'none' }} className={` w-full h-full `}>
				<Canvas
					dpr={[1, 2]}
					shadows
					camera={{
						fov: (typeof window !== 'undefined' ? window?.innerWidth : 700) < 700 ? 45 : 30,
						position: [40, 0, 800],
					}}
				>
					<MyRoom setLoading={setLoading} />
				</Canvas>
			</div>

			<div
				className={` transition-all z-50 duration-700 absolute h-full right-0 ${
					itemSelected ? 'lg:w-1/2 w-full p-14' : 'w-0'
				} bg-clip-padding overflow-hidden glass-section bg-opacity-60 `}
			>
				{content && (
					<>
						<button
							className={` w-10 h-10 rounded-full absolute ${
								!itemSelected ? 'hidden' : 'visible'
							} left-4 top-4 mb-8 leading-none bg-slate-600 bg-opacity-30 flex justify-center items-center z-50 text-3xl text-white cursor-pointer `}
							type='button'
							onClick={() => setItemSelected(undefined)}
							aria-label='close'
						>
							<i className='fa-solid fa-xmark'></i>
						</button>
						<h2 className='text-4xl mt-5 font-extrabold dark:text-gray-800 w-full'>{itemSelected?.title}</h2>
						<p className='my-4 text-lg text-gray-600 w-full'>{itemSelected?.text}</p>
						<div className=' relative overflow-hidden w-full h-full max-h-60 lg:max-h-[60%] mt-10 '>
							{itemSelected?.img && itemSelected?.img}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RoomPage
