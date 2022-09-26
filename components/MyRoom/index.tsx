import { Canvas } from '@react-three/fiber'
import { useContext, useEffect, useState } from 'react'
import { roomContext } from '../../context/RoomContext'
import MyRoom from './MyRoom'
import Title from './components/Title'
import Link from 'next/link'
import Image from 'next/image'

const RoomPage = () => {
	const [content, setContent] = useState(false)
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

	return (
		<div className=' justify-center flex absolute inset-0  bg-zinc-600'>
			<Link href='/'>
				<button className='absolute z-40 left-3 top-3 lg:left-7 lg:top-5 inline-flex  items-center rounded-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
					<span className='relative px-3.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>
						{'X'}
					</span>
				</button>
			</Link>

			<Title />

			<div className={` w-full h-full `}>
				<Canvas
					dpr={[1, 2]}
					shadows
					camera={{
						fov: (typeof window !== 'undefined' ? window?.innerWidth : 700) < 700 ? 45 : 30,
						position: [40, 0, 800],
					}}
				>
					<MyRoom />
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
						>
							<i className='fa-solid fa-xmark'></i>
						</button>
						<h2 className='text-4xl mt-5 font-extrabold dark:text-gray-800 w-full'>{itemSelected?.title}</h2>
						<p className='my-4 text-lg text-gray-600 w-full'>{itemSelected?.text}</p>
						<div className=' relative overflow-hidden w-full h-full max-h-60 mt-10 '>
							{itemSelected?.img && (
								<Image unoptimized={true} src={itemSelected.img} alt='detil' layout='fill' objectFit='cover' />
							)}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RoomPage
