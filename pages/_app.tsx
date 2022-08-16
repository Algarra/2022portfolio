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
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
