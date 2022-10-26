import { useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { roomContext } from '../../../context/RoomContext'
import { isMobile } from 'react-device-detect'
import { Group } from 'three'
import Image from 'next/image'
import code from './img/code.gif'

export default function Code() {
	const [hover, setHover] = useState(false)
	const [scene, setScene] = useState<Group | undefined>(undefined)
	const { itemOnHover, setItemOnHover, setItemSelected, itemSelected } = useContext(roomContext)

	const codeRef: any = useRef()

	const executeRotation = () => {
		setTimeout(() => {
			setHover(true)
			setTimeout(() => {
				setHover(false)
			}, 2000)
		}, 6000)
	}

	useEffect(() => {
		const loader = new GLTFLoader()

		loader.load('/img/code.glb', gltf => {
			setScene(gltf.scene)
		})
	}, [])

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
					ref={codeRef}
					scale={[4, 4, 4]}
					position={[-90, -40, -30]}
					onClick={e =>
						setItemSelected({
							title: 'Code',
							text: 'I started programming a little over 4 years ago for a personal project in which I needed different extra features on a Wordpress website that I had at that time. After that and seeing the number of things that could be done, I started to make different applications with React and since then I have not stopped.',
							img: <Image src={code} alt='code' title='code' fill />,
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
					<boxGeometry args={[17, 17, 15]} />
					<meshPhongMaterial color='#ff0000' opacity={0} transparent />
					<primitive object={scene} rotation={[0, 26.7, 0]} position={[0, -95, 5]} />
				</mesh>
			)}
		</>
	)
}
