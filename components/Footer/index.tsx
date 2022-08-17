export const Footer = () => (
	<footer
		className=' text-center bg-cover bg-no-repeat w-full bg-right-top pt-40 mt-25 bg-theme-color md:bg-transparent mb:pt-72 lg:pt-72'
		style={{ backgroundImage: "url('/img/footer-bg.svg')" }}
	>
		<div className='flex flex-wrap'>
			<div className='w-full flex text-center justify-center'>
				<div className=' mb-10 mx-3 w-full justify-center flex flex-wrap '>
					<div className='w-max pt-2'>
						<span className=' mr-5 text-white sm:pr-13 md:pr-0 2xl:pr-25'>Kepp knowing about me.</span>
					</div>
					<div className='w-12'>
						<span className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white'>
							<a href='https://www.linkedin.com/in/daniel-algarra-navarro/'>
								<i className='fa-brands fa-linkedin-in'></i>
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
)
