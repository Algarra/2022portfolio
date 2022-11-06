import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ReactNode, Suspense } from 'react'
import { Sidebar } from '../components/bankApp/common/Sidebar'
import { BankContext } from '../context/bankContext'
import { Notifications } from '../components/bankApp/common/Notifications'
import { accountDetails } from '../data/types'
import { Loader } from '../components/bankApp/common/Loader'

const getActualAccounts = () => {
	return fetch('http://localhost:3001/api/accounts', { cache: 'no-store' }).then(response => response.json())
}

export default async function RootLayout({ children }: { children: ReactNode }) {
	const actualAccounts: accountDetails[] = (await getActualAccounts()).accountsList

	return (
		<html className=' w-screen h-screen m-0 p-0 pr-0 mr-0 '>
			<BankContext actualAccounts={actualAccounts}>
				<head>
					<title> Bank aplication</title>
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
