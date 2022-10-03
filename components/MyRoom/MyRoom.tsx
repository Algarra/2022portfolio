import { Environment, PresentationControls } from '@react-three/drei'
import { Dispatch, FunctionComponent, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Room } from './components/Room'
import Xbox from './components/Xbox'
import BikeHelmet from './components/BikeHelmet'
import Cat from './components/Cat'
import Code from './components/Code'
import MotorBikeHelmet from './components/MotorBikeHelmet'
import { roomContext } from '../../context/RoomContext'
import { isMobile } from 'react-device-detect'
import { Group } from 'three'

interface propTypes {
	setLoading: Dispatch<SetStateAction<boolean>>
}

const MyRoom: FunctionComponent<propTypes> = ({ setLoading }) => {
	const [gltf1, setglft1] = useState<Group | undefined>(undefined)
	const { itemSelected } = useContext(roomContext)

	const totalRef: any = useRef(null)

	useEffect(() => {
		const loader = new GLTFLoader()
		loader.load('/img/isometric_room.glb', gltf => {
			setglft1(gltf.scene)
			setLoading(false)
		})
	}, [setLoading])

	return (
		<PresentationControls
			global
			zoom={0.8}
			rotation={[0, -Math.PI / 4, 0]}
			polar={[0, Math.PI / 4]}
			azimuth={[-Math.PI / 4, Math.PI / 4]}
		>
			<directionalLight color={'#ffffff'} castShadow intensity={0.4} position={[400, 1000, 900]} />

			<Environment preset='sunset' background />
			<mesh
				ref={totalRef}
				castShadow
				position={[0, 0, 0]}
				onAfterRender={() => {
					if (itemSelected && !isMobile) {
						if (totalRef.current.position.z < 100) {
							totalRef.current.position.z += 2
						}
					} else {
						totalRef.current.position.x = 0
						totalRef.current.position.y = 0
						if (totalRef.current.position.z > 0) {
							totalRef.current.position.z -= 2
						}
					}
				}}
			>
				{gltf1 && <Room scene={gltf1} />}

				<Xbox />

				<Cat />

				<Code />

				<BikeHelmet />

				<MotorBikeHelmet />
			</mesh>
		</PresentationControls>
	)
}

export default MyRoom
