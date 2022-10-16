import Head from 'next/head'
import RoomPage from '../../components/MyRoom'
import { RoomContext } from '../../context/RoomContext'

const Canvas = () => {
	return (
		<RoomContext>
			<Head>
				<title>My Room -Daniel Algarra Navarro</title>
				<meta
					name='description'
					content="Daniel Algarra my room it's made to know more about me, my hobbies and my personality. You will find more about my professional career on the home page and more about me on my room."
				/>
				<link rel='canonical' href='https://www.danielalgarranavarro.com/my-room' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='robots' content='index, follow' />
				<meta charSet='UTF-8' />
			</Head>
			<RoomPage />
		</RoomContext>
	)
}

export default Canvas
