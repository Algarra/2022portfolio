export default function Level({ scene }) {
	return (
		<mesh castShadow receiveShadow position={[0, -100, 0]} scale={[25, 25, 25]}>
			<boxGeometry castShadow receiveShadow args={[10, 15, 10]} position={[0, 0, 0]} />
			<meshPhongMaterial castShadow receiveShadow color='#ff0000' opacity={0} transparent />
			<primitive castShadow receiveShadow object={scene} />
		</mesh>
	)
}
