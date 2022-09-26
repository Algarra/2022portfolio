import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'

export default function BikeHelmet() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState(undefined)
	const { itemOnHover, setItemOnHover, itemSelected, setItemSelected } = useContext(roomContext)

	const bikeRef = useRef()

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/bike_helmet.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

	useEffect(() => {
		if (isMobile) {
			const interval = setInterval(() => {
				setTimeout(() => {
					setHover(true)
					setTimeout(() => {
						setHover(false)
					}, 2000)
				}, 4000)
			}, 10000)

			if (itemOnHover) {
				clearInterval(interval)
			}

			return () => clearInterval(interval)
		}
	}, [itemOnHover])

	useEffect(() => {
		document.body.style.cursor = hover ? 'pointer' : 'auto'
		console.log(
			'🚀 ~ file: BikeHelmet.js ~ line 42 ~ useEffect ~ document.body.style.cursor',
			document.body.style.cursor
		)
	}, [hover])

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
							text: 'For example, pt-6 would add 1.5rem of padding to the top of an element, pr-4 would add 1rem of padding to the right of an element, pb-8 would add 2rem of padding to the bottom of an element, and pl-2 would add 0.5rem of padding to the left of an element.',
							img: '/img/dani-bike.jpeg',
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
					<boxGeometry args={[700, 700, 700]} position={[0, 0, 0]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} />
				</mesh>
			)}
		</>
	)
}
