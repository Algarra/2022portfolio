import Image from 'next/image'
import { useEffect } from 'react'
import hackerRank from '../TopHome/img/hackerRank.webp'

export const Footer = () => {
	useEffect(() => {
		// FCP improvement
		const footer = document.getElementById('footer')
		if (footer) footer.style.backgroundImage = "url('/img/footer-bg.svg')"
	}, [])
	return (
		<footer
			className=' text-center bg-cover bg-no-repeat w-full bg-right-top pt-40 mt-25 bg-theme-color md:bg-transparent mb:pt-72 lg:pt-72'
			id='footer'
		>
			<div className='flex flex-wrap'>
				<div className='w-full flex text-center justify-center'>
					<div className=' mb-10 mx-3 w-full justify-center flex flex-wrap '>
						<div className='w-max pt-2'>
							<span className=' mr-5 text-white sm:pr-13 md:pr-0 2xl:pr-25'>Keep knowing about me.</span>
						</div>
						<div className=' flex flex-wrap'>
							<a
								href='https://www.linkedin.com/in/daniel-algarra-navarro/'
								aria-label='Linkedin'
								rel='nofollow'
								className=' cursor-pointer'
							>
								<span className='flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-opacity-20 bg-opacity-10 text-white'>
									<i className='fa-brands fa-linkedin-in'></i>
								</span>
							</a>
							<a href='https://www.hackerrank.com/danielalgarrana1' aria-label='HackerRank' rel='nofollow' className=' cursor-pointer'>
								<span className='flex items-center justify-center ml-2 p-1.5 w-10 h-10 rounded-full bg-white hover:bg-opacity-20 bg-opacity-10 text-white'>
									<Image src={hackerRank} alt='Hacker Rank' title='Hacker Rank' className=' grayscale contrast-200 brightness-200 ' />
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
