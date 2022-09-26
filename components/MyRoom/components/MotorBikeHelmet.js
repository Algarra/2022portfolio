import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'

export default function MotorBikeHelmet() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const motoHelmetRef = useRef()

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/motorBikeHelmet.glb', gltf => {
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
				}, 8000)
			}, 10000)

			if (itemOnHover) {
				clearInterval(interval)
			}

			return () => clearInterval(interval)
		}
	}, [itemOnHover])

	return (
		<>
			{scene && (
				<mesh
					castShadow
					receiveShadow
					ref={motoHelmetRef}
					rotation={[0, 0, 0]}
					scale={[40, 40, 40]}
					position={[-55, 15, -90]}
					onClick={e =>
						setItemSelected({
							title: 'Motorbikes',
							text: 'For example, pt-6 would add 1.5rem of padding to the top of an element, pr-4 would add 1rem of padding to the right of an element, pb-8 would add 2rem of padding to the bottom of an element, and pl-2 would add 0.5rem of padding to the left of an element.',
							img: '',
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
						if (hover || itemSelected?.title === 'Motorbikes') {
							motoHelmetRef.current.rotation.y += 0.05
							if (motoHelmetRef.current.position.x < -40) {
								motoHelmetRef.current.position.x += 0.2
							}
							if (motoHelmetRef.current.position.y < -17) {
								motoHelmetRef.current.position.y += 0.2
							}
							if (motoHelmetRef.current.position.z < -75) {
								motoHelmetRef.current.position.z += 0.2
							}
						} else {
							motoHelmetRef.current.rotation.y = 0

							motoHelmetRef.current.position.x = -55
							motoHelmetRef.current.position.y = 15
							motoHelmetRef.current.position.z = -90
						}
					}}
				>
					<boxGeometry args={[0.7, 0.7, 0.7]} position={[0, -75, 0]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} position={[0, -0.3, 0]} />
				</mesh>
			)}
		</>
	)
}
