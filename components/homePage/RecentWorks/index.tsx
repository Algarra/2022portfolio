import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { infoBoxContent } from '../../../pages'

interface propTypes {
	setInfoBox: Dispatch<SetStateAction<infoBoxContent | undefined>>
}

export const RecentWorks: FunctionComponent<propTypes> = ({ setInfoBox }) => {
	return (
		<section id='recentJobs' className=' pt-20 '>
			<div className='px-4'>
				<div className='flex-wrap flex justify-center'>
					<div className='w-full text-center'>
						<h2 className=' mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>Recent works</h2>
					</div>

					<div
						onClick={() =>
							setInfoBox({
								options: ['Tracker', 'Pricing Engine'],
								info: [
									{
										title: 'Vans tracker',
										text: 'Tracker is an application to follow the actual position of your parcel. This application was made with React, Next, Redux and Here Maps',
									},
									{
										title: 'Finance application',
										text: 'Price engine is an application to make finance able to manage the calculation of the shipping prices. This application was made with React, context, Jest, OpenAPI TypeScript Fetcher...',
									},
								],
							})
						}
						className='w-full hover:bg-slate-100 rounded-md cursor-pointer md:w-8/12 lg:w-4/12'
					>
						<div className='text-center px-3 2xl:px-10 py-8'>
							<div className='w-full flex justify-center pb-10'>
								<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
									<i className='fa-solid fa-truck-fast'></i>
								</div>
							</div>
							<div className='content'>
								<h3 className='mb-6 text-blue-900 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl'>Eurosender</h3>
								<p className='text-lg'>
									Eurosender is a logistics company located in Luxembourg in which I develop web apps and mobile apps.
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={() =>
							setInfoBox({
								options: ['Cesce'],
								info: [
									{
										title: 'Cesce reports management',
										text: 'The Cesce project consists of a web application to manage the internal work of cesce. For this project we work a team of 4 developers. For task management we use Agile methodology with Jira and Scrum. The catalog, architecture and application were assembled separately, which is why Verdaccio and StoryBook was used. \n Technologies: Typescript, React, Redux, Axios, MAaterial-UI, Storybook, Immer, jest and verdaccio.',
									},
								],
							})
						}
						className='w-full cursor-pointer md:w-8/12 hover:bg-slate-100 rounded-md lg:w-4/12'
					>
						<div className='text-center px-3 2xl:px-10 py-8'>
							<div className='w-full flex justify-center pb-10'>
								<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
									<i className='fa-solid fa-code'></i>
								</div>
							</div>
							<div className='content'>
								<h3 className='mb-6 text-blue-900 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl '>Atmira</h3>
								<p className='text-lg'>
									Atmira is a consultancy located in Spain where I work developing web applications.
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={() =>
							setInfoBox({
								options: ['Web', 'Apps'],
								info: [
									{
										title: 'PAW web page',
										text: 'PAW is a social network for bicycle lovers. This app was made to make easier to get together and go riding. In this app, you have an authentication (normal authentication and Google authentication), you have standard posts and travel posts. Travel posts give you a point where the journey will begin and some facts about the journey. \n Technologies: React, Redux, Axios, SASS, Router, Node, Pusher, Express JSON Web Token, CORS, Mongodb, Google APIs (authentication, maps), Heroku.',
									},
									{
										title: 'React Native Apps',
										text: 'Mobile applications had the same functionalities as the web. These were made with React Native, but never made it to production as StarUp went bankrupt before this new version went into production.',
									},
								],
							})
						}
						className='w-full cursor-pointer md:w-8/12 hover:bg-slate-100 rounded-md lg:w-4/12'
					>
						<div className='text-center px-3 2xl:px-10 py-8'>
							<div className='w-full flex justify-center pb-10'>
								<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
									<i className='fa-solid fa-person-biking'></i>
								</div>
							</div>

							<div className='content'>
								<h3 className='mb-6 text-blue-900 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl '>
									Pro Athletes World
								</h3>
								<p className='text-lg'>
									PAW is a company that sells cycling products where I worked developing mobile and web apps.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
