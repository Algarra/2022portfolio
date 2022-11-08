import { accountDetails } from '../types'

const accounts = [
	{
		iban: 'FR7630006000011234567890189',
		bank: 'BNP Paribas',
		country: 'France',
		status: true,
		currency: 'EUR',
		amount: 50000,
	},
	{
		iban: 'BR150000000000001093284081432',
		bank: 'BRS Bank',
		country: 'Brazil',
		status: true,
		currency: 'USD',
		amount: 50000,
	},
	{
		iban: 'ES76300060000112345678901893',
		bank: 'La Caixa',
		country: 'Spain',
		status: false,
		currency: 'EUR',
		amount: 50000,
	},
	{
		iban: 'PR76300060022001123490189',
		bank: 'BBVA',
		country: 'Portugal',
		status: true,
		currency: 'EUR',
		amount: 50000,
	},
	{
		iban: 'GR763000600330011234567890189',
		bank: 'ING',
		country: 'Germany',
		status: false,
		currency: 'EUR',
		amount: 50000,
	},
]

export const setAccounts = (newAccounts: accountDetails[]) => {
	process.env.BANK_ACCOUNTS = JSON.stringify([...newAccounts])
}

export const getAccounts = () => {
	if (!process.env.BANK_ACCOUNTS) process.env.BANK_ACCOUNTS = JSON.stringify([...accounts])

	return JSON.parse(process.env.BANK_ACCOUNTS)
}
