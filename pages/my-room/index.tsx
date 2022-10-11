import Head from 'next/head'
import RoomPage from '../../components/MyRoom'
import { RoomContext } from '../../context/RoomContext'

const Canvas = () => {
	return (
		<RoomContext>
			<Head>
				<title>My Room -Daniel Algarra Navarro</title>
			</Head>
			<RoomPage />
		</RoomContext>
	)
}

export default Canvas
