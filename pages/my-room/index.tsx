import RoomPage from '../../components/MyRoom'
import { RoomContext } from '../../context/RoomContext'
import { NextSeo } from 'next-seo'

const Canvas = () => {
	return (
		<RoomContext>
			<NextSeo
				title='My Room -Daniel Algarra Navarro'
				description="Daniel Algarra my room it's made to know more about me, my hobbies and my personality. You will find more about my professional career on the home page and more about me on my room."
			/>
			<RoomPage />
		</RoomContext>
	)
}

export default Canvas
