import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'
import { Group } from 'three'
import Image from 'next/image'
import game from './img/game.gif'

export default function Xbox() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState<Group | undefined>(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const xboxRef: any = useRef(null)

	const executeRotation = () => {
		setTimeout(() => {
			setHover(true)
			setTimeout(() => {
				setHover(false)
			}, 2000)
		}, 2000)
	}

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/xbox.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

	useEffect(() => {
		if (isMobile) {
			executeRotation()
			const interval = setInterval(itemOnHover => {
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
					ref={xboxRef}
					scale={[20, 20, 20]}
					onClick={e =>
						setItemSelected({
							title: 'Video Games',
							text: 'The truth is that I am not a gamer or a person who spends many hours playing games. But I have to admit that a game after work can be one of the best ways to take your mind off work.',
							img: <Image src={game} alt='game' title='game' layout='fill' objectFit='cover' />,
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
					<boxGeometry args={[2, 2, 2]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive castShadow receiveShadow object={scene} position={[0, 0, -0.4]} />
				</mesh>
			)}
		</>
	)
}
