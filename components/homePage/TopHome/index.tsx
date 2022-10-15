import Image from 'next/image'
import dani from './img/dani.png'
import hackerRank from './img/hackerRank.webp'

export const TopHome = () => (
	<section
		id='home'
		className=' -mt-10 flex pb-20 pt-28 lg:pb-36 lg:pt-32 bg-no-repeat bg-cover bg-center justify-center w-full '
		style={{ backgroundImage: "url('img/hero-bg.svg')" }}
	>
		<div className='px-4 max-w-screen-2xl'>
			<div className=' flex-wrap flex items-center relative'>
				<div className=' pl-2 lg:pl-4 w-full lg:w-1/2'>
					<div className='hero-content mb-0 lg:mb-6'>
						<h1 className='text-white mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>
							Daniel Algarra Navarro JavaScript developer!
						</h1>
						<p className='text-white text-lg mb-10 xl:pr-18 2xl:pr-120'>Welcome to the site to know who I am.</p>
						<a href='#tecnologies'>
							<button className='border-2 bg-transparent hover:bg-slate-100 border-solid font-bold text-center rounded-full text-white hover:text-neutral-700 cursor-pointer py-4 px-6 '>
								Skills
							</button>
						</a>

						<a href='https://www.linkedin.com/in/daniel-algarra-navarro/'>
							<button className='absolute left-10 -bottom-20 w-12 h-12 rounded-full bg-white hover:bg-slate-300 hidden lg:flex justify-center items-center'>
								<i className='fa-brands fa-linkedin-in'></i>
							</button>
						</a>
						<a href='https://www.hackerrank.com/danielalgarrana1'>
							<button className='absolute left-28 -bottom-20 w-12 h-12 p-3 rounded-full bg-white hover:bg-slate-300 hidden lg:flex justify-center items-center'>
								<Image src={hackerRank} placeholder='blur' alt='Hacker Rank' className=' grayscale contrast-200 invert brightness-200 ' />
							</button>
						</a>
					</div>
				</div>
				<div className='w-full flex lg:w-1/2 content-center '>
					<div className='flex pt-8 lg:pt-0 m-auto'>
						<Image src={dani} placeholder='blur' alt='Dani' className=' w-full lg:w-auto' />
					</div>
				</div>
			</div>
		</div>
	</section>
)
