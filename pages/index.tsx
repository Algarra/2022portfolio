import type { NextPage } from 'next'
import { useState } from 'react'
import { TopHome } from '../components/homePage/TopHome'
import { RecentWorks } from '../components/homePage/RecentWorks'
import { CurrentlyWorking } from '../components/homePage/CurrentlyWorking'
import { TechnicalSkills } from '../components/homePage/TechnicalSkills'
import { Contact } from '../components/homePage/Contact'
import { Footer } from '../components/homePage/Footer'
import { NotificationMessage } from '../components/homePage/NotificationMessage'
import { NavBar } from '../components/homePage/NavBar'
import { ProjectInfo } from '../components/homePage/ProjectInfo'

export type infoBoxContent = { options: string[]; info: { title: string; text: string }[] }

const Home: NextPage = () => {
	const [successMessage, setSuccessMessage] = useState('')
	const [infoBox, setInfoBox] = useState<infoBoxContent | undefined>(undefined)

	return (
		<main className='flex relative flex-wrap justify-center'>
			<NavBar />

			<NotificationMessage newText={successMessage} />

			<TopHome />

			<RecentWorks setInfoBox={setInfoBox} />

			<CurrentlyWorking />

			<TechnicalSkills />

			<Contact setSuccessMessage={setSuccessMessage} />

			<ProjectInfo infoBox={infoBox} setInfoBox={setInfoBox} />

			<Footer />
		</main>
	)
}

export default Home
