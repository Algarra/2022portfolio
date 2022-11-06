import type { NextPage } from 'next'
import { TopHome } from '../../components/homePage/TopHome'
import { RecentWorks } from '../../components/homePage/RecentWorks'
import { CurrentlyWorking } from '../../components/homePage/CurrentlyWorking'
import { TechnicalSkills } from '../../components/homePage/TechnicalSkills'
import { Contact } from '../../components/homePage/Contact'
import { Footer } from '../../components/homePage/Footer'
import { NavBar } from '../../components/homePage/NavBar'

export type infoBoxContent = { options: string[]; info: { title: string; text: string }[] }

const Home: NextPage = () => {
	return (
		<main className='flex relative flex-wrap justify-center'>
			<NavBar />

			<TopHome />

			<RecentWorks />

			<CurrentlyWorking />

			<TechnicalSkills />

			<Contact />

			<Footer />
		</main>
	)
}

export default Home
