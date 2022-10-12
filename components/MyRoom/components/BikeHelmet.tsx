import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'
import { Group } from 'three'
import daniBike from './img/dani-bike.jpeg'
import Image from 'next/image'

export default function BikeHelmet() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState<Group | undefined>(undefined)
	const { itemOnHover, setItemOnHover, itemSelected, setItemSelected } = useContext(roomContext)

	const bikeRef: any = useRef(null)

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/bike_helmet.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

	const executeRotation = () => {
		setTimeout(() => {
			setHover(true)
			setTimeout(() => {
				setHover(false)
			}, 2000)
		}, 4000)
	}

	useEffect(() => {
		if (isMobile) {
			executeRotation()
			const interval = setInterval(() => {
				executeRotation()
			}, 10000)

			return () => clearInterval(interval)
		}
	}, [itemOnHover])

	return (
		<>
			{scene && (
				<mesh
					castShadow
					receiveShadow
					ref={bikeRef}
					rotation={[0, 80, 0]}
					scale={[0.07, 0.07, 0.07]}
					position={[90, -105, 105]}
					onClick={e =>
						setItemSelected({
							title: 'Bike',
							text: 'I have always liked mountain biking, it started as a hobby when I was racing a motorcycle and I ended up dedicating myself professionally for a few years. The truth is that it was a very positive experience that allowed me to travel and meet many people.',
							img: <Image src={daniBike} placeholder='blur' alt='detil' layout='fill' objectFit='cover' />,
						})
					}
					onPointerOver={e => {
						setHover(true)
						setItemOnHover(true)
					}}
					onPointerOut={e => {
						setHover(false)
						setItemOnHover(false)
					}}
					onAfterRender={e => {
						if (hover || itemSelected?.title === 'Bike') {
							bikeRef.current.rotation.y += 0.05

							if (bikeRef.current.position.x < -70) {
								bikeRef.current.position.x += 0.2
							}
							if (bikeRef.current.position.y < -95) {
								bikeRef.current.position.y += 0.2
							}
							if (bikeRef.current.position.z > 95) {
								bikeRef.current.position.z -= 0.2
							}
						} else {
							bikeRef.current.rotation.y = 120

							bikeRef.current.position.x = 90
							bikeRef.current.position.y = -105
							bikeRef.current.position.z = 105
						}
					}}
				>
					<boxGeometry args={[700, 700, 700]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} />
				</mesh>
			)}
		</>
	)
}
