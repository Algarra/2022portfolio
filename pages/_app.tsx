import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo
				defaultTitle='Daniel Algarra Navarro - Protfolio page'
				description="Daniel Algarra portfolio it's made to know more about me, my work experience and my abilities. You will find more about my professional career on the home page and more about me on my room."
				canonical='https://www.danielalgarranavarro.com/'
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
