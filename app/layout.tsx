import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ReactNode } from 'react'
import { Sidebar } from '../components/bankApp/common/Sidebar'

export default async function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className=' w-screen h-screen m-0 p-0 pr-0 mr-0 ' lang='en'>
			<head>
				<title> Bank aplication</title>
				<meta
					name='description'
					content='This is a banck app to test the new features from Next 13, this app is build in an app folder with SSR components.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>

			<body className=' bg-black '>
				<Sidebar />
				{children}
			</body>
		</html>
	)
}
