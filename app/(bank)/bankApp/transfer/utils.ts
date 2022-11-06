export type destinationAccount = {
	iban: string
	bank?: string
	country: string
	status?: boolean
	currency: string
	amount?: number
}

export const defaultDestinationAccount = {
	iban: '',
	country: '',
	currency: '',
}
