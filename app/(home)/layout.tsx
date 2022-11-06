import '../../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<title>Daniel Algarra Navarro - Protfolio page</title>
				<meta
					name='description'
					content="Daniel Algarra portfolio it's made to know more about me, my work experience and my abilities. You will find more about my professional career on the home page and more about me on my room."
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>

			<body>{children}</body>
		</html>
	)
}
