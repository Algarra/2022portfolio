import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Daniel Algarra Navarro</title>
				<meta
					name='description'
					content="Daniel Algarra portfolio it's made to know more about me, my work experience and my abilities. You will find more about my professional career on the home page and more about me on my room."
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='robots' content='index, follow' />
				<meta charSet='UTF-8' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
