import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'
import { Group } from 'three'

export default function MotorBikeHelmet() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState<Group | undefined>(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const motoHelmetRef: any = useRef(null)

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
							text: "I started riding a motorcycle when I was very young, following my father's hobby. And that hobby introduced me to competition from which I learned many positive things such as effort and dedication. Traveling and spending time with my father was probably the best part of that time.",
							img: '/img/dani-moto.jpeg',
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
					<boxGeometry args={[0.7, 0.7, 0.7]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} position={[0, -0.3, 0]} />
				</mesh>
			)}
		</>
	)
}
