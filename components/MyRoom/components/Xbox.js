import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'

export default function Xbox() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const xboxRef = useRef()

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/xbox.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

	useEffect(() => {
		if (isMobile) {
			const interval = setInterval(itemOnHover => {
				setTimeout(() => {
					setHover(true)
					setTimeout(() => {
						setHover(false)
					}, 2000)
				}, 2000)
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
					ref={xboxRef}
					scale={[20, 20, 20]}
					onClick={e =>
						setItemSelected({
							title: 'Video Games',
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
						if (hover || itemSelected?.title === 'Video Games') {
							xboxRef.current.rotation.y += 0.05

							if (xboxRef.current.position.y < -70) {
								xboxRef.current.position.y += 0.2
							}
							if (xboxRef.current.position.z < -60) {
								xboxRef.current.position.z += 0.2
							}
						} else {
							xboxRef.current.rotation.y = 0

							xboxRef.current.position.x = 80
							xboxRef.current.position.y = -80
							xboxRef.current.position.z = -70
						}
					}}
				>
					<boxGeometry args={[2, 2, 2]} position={[0, 0, 0]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} position={[0, 0, -0.4]} />
				</mesh>
			)}
		</>
	)
}
