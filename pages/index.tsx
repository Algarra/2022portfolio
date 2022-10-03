import type { NextPage } from 'next'
import { useState } from 'react'
import { TopHome } from '../components/TopHome'
import { RecentWorks } from '../components/RecentWorks'
import { CurrentlyWorking } from '../components/CurrentlyWorking'
import { TechnicalSkills } from '../components/TechnicalSkills'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { NotificationMessage } from '../components/NotificationMessage'
import { NavBar } from '../components/NavBar'
import { ProjectInfo } from '../components/ProjectInfo'

export type infoBoxContent = { options: string[]; info: { title: string; text: string }[] }

const Home: NextPage = () => {
	const [successMessage, setSuccessMessage] = useState('')
	const [infoBox, setInfoBox] = useState<infoBoxContent | undefined>(undefined)

	return (
		<div className='flex relative flex-wrap justify-center'>
			<NavBar />

			<NotificationMessage newText={successMessage} />

			<TopHome />

			<RecentWorks setInfoBox={setInfoBox} />

			<CurrentlyWorking />

			<TechnicalSkills />

			<Contact setSuccessMessage={setSuccessMessage} />

			<ProjectInfo infoBox={infoBox} setInfoBox={setInfoBox} />

			<Footer />
		</div>
	)
}

export default Home
