import RoomPage from '../../components/MyRoom'
import { RoomContext } from '../../context/RoomContext'

const Canvas = () => {
	return (
		<RoomContext>
			<RoomPage />
		</RoomContext>
	)
}

export default Canvas
