import { FunctionComponent } from 'react'
import { Group } from 'three'

export const Room: FunctionComponent<{
	scene: Group
}> = ({ scene }) => {
	return (
		<mesh castShadow receiveShadow position={[0, -100, 0]} scale={[25, 25, 25]}>
			<boxGeometry args={[10, 15, 10]} />
			<meshPhongMaterial color='#ff0000' opacity={0} transparent />
			<primitive castShadow receiveShadow object={scene} />
		</mesh>
	)
}
