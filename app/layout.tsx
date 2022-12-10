import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ReactNode } from 'react'
import { Sidebar } from './common/Sidebar'

export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className=' w-screen h-screen m-0 p-0 pr-0 mr-0 ' lang='en'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>

			<body className=' bg-black '>
				<Sidebar />
				{children}
			</body>
		</html>
	)
}
