import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				defaultTitle='Daniel Algarra: Frontend Developer and Javascript Expert'
				description='Portfolio of Daniel Algarra, a frontend developer specializing in Javascript, Next.js, React, and other frontend development technologies. View my projects and contact me for job opportunities in web development and Javascript frameworks.'
				canonical='https://www.danielalgarranavarro.com/'
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
