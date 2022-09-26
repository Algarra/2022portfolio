import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'

export default function Cat() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const catRef = useRef()

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/cat.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

	useEffect(() => {
		if (isMobile) {
			const interval = setInterval(() => {
				setHover(true)
				setTimeout(() => {
					setHover(false)
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
					ref={catRef}
					scale={[20, 20, 20]}
					position={[80, 10, -105]}
					onClick={e =>
						setItemSelected({
							title: 'Cats',
							text: "Although I have always been a dog person for diferent things in life I have ended up living with cats. And even though it's very normal to live with cats nowadays, I can't avoid to feel like the crazy lady from the Simpsons on occasion.",
							img: '/img/cats.gif',
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
						if (hover || itemSelected?.title === 'Cats') {
							catRef.current.rotation.y += 0.05

							if (catRef.current.position.z < -80) {
								catRef.current.position.z += 0.2
							}
						} else {
							catRef.current.rotation.y = 0

							catRef.current.position.x = 80
							catRef.current.position.y = 10
							catRef.current.position.z = -102
						}
					}}
				>
					<boxGeometry args={[3, 3, 2]} position={[0, 0, 0]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} />
				</mesh>
			)}
		</>
	)
}
