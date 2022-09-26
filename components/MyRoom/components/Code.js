import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'

export default function Code() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const codeRef = useRef()

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/code.glb', gltf => {
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
				}, 6000)
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
					ref={codeRef}
					scale={[4, 4, 4]}
					position={[-90, -40, -30]}
					onClick={e =>
						setItemSelected({
							title: 'Code',
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
						if (hover || itemSelected?.title === 'Code') {
							codeRef.current.rotation.y += 0.05

							if (codeRef.current.position.x < -70) {
								codeRef.current.position.x += 0.2
							}
						} else {
							codeRef.current.rotation.y = 0

							codeRef.current.position.x = -90
							codeRef.current.position.y = -40
							codeRef.current.position.z = -30
						}
					}}
				>
					<boxGeometry args={[17, 17, 15]} position={[0, 0, 0]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive object={scene} rotation={[0, 26.7, 0]} position={[0, -95, 5]} />
				</mesh>
			)}
		</>
	)
}
