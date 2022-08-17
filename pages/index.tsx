/* eslint-disable @next/next/no-img-element */
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

const Home: NextPage = () => {
	const [successMessage, setSuccessMessage] = useState('')

	return (
		<div className='flex relative flex-wrap justify-center'>
			<NavBar />

			<NotificationMessage newText={successMessage} />

			<TopHome />

			<RecentWorks />

			<CurrentlyWorking />

			<TechnicalSkills />

			<Contact setSuccessMessage={setSuccessMessage} />

			<Footer />
		</div>
	)
}

export default Home
