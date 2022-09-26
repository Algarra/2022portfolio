import { Canvas } from '@react-three/fiber'
import { useContext } from 'react'
import { roomContext } from '../../context/RoomContext'
import MyRoom from './MyRoom'
import Title from './components/Title'
import Link from 'next/link'

const RoomPage = () => {
	const { itemSelected, setItemSelected } = useContext(roomContext)

	return (
		<div className=' justify-center flex h-screen bg-zinc-600'>
			<Title />
			<Link href='/'>
				<button className='absolute z-40 left-7 top-5 inline-flex   items-center rounded-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
					<span className='relative px-3.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>
						{'X'}
					</span>
				</button>
			</Link>
			<div className={` w-full h-screen `}>
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
				className={` transition-all duration-700 overflow-hidden p-14 absolute z-10 h-full ${
					itemSelected ? 'right-0' : '-right-full'
				} bg-clip-padding lg:w-1/2 w-full backdrop-filter backdrop-blur-xl bg-opacity-60 `}
			>
				<button
					className={` w-10 h-10 rounded-full absolute ${
						!itemSelected && 'hidden'
					} left-4 top-4 mb-8 leading-none bg-slate-600 bg-opacity-30 flex justify-center items-center z-50 text-3xl text-white cursor-pointer `}
					type='button'
					onClick={() => setItemSelected(undefined)}
				>
					<i className='fa-solid fa-xmark'></i>
				</button>
				{itemSelected && (
					<>
						<h2 className='text-4xl mt-5 font-extrabold dark:text-gray-800 w-full'>{itemSelected?.title}</h2>
						<p className='my-4 text-lg text-gray-500 w-full'>{itemSelected?.text}</p>
						<img src={itemSelected.img} className='w-full' />
					</>
				)}
			</div>
		</div>
	)
}

export default RoomPage
