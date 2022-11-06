import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ReactNode, Suspense } from 'react'
import { Sidebar } from '../components/bankApp/common/Sidebar'
import { BankContext } from '../context/bankContext'
import { Notifications } from '../components/bankApp/common/Notifications'
import { accountDetails } from '../data/types'
import { Loader } from '../components/bankApp/common/Loader'

const getActualAccounts = () => {
	return fetch('https://www.danielalgarranavarro.com/api/accounts', { cache: 'no-store' }).then(response => response.json())
}

export default async function RootLayout({ children }: { children: ReactNode }) {
	const actualAccounts: accountDetails[] = (await getActualAccounts()).accountsList

	return (
		<html className=' w-screen h-screen m-0 p-0 pr-0 mr-0 ' lang='en'>
			<BankContext actualAccounts={actualAccounts}>
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
					<Notifications />
					<Suspense fallback={<Loader />}>{children}</Suspense>
				</body>
			</BankContext>
		</html>
	)
}
