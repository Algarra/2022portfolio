export type transfer = {
	from?: string | undefined
	originAmount?: string | number | undefined
	originCurrency?: string | undefined
	concept?: string | undefined
	to: string
	destinationAmount: number
	destinationCurrency: string
}

let transfers: transfer[] = [
	{
		from: undefined,
		originAmount: undefined,
		originCurrency: undefined,
		to: 'FR7630006000011234567890189',
		destinationAmount: 50000,
		destinationCurrency: 'EUR',
	},
	{
		from: undefined,
		originAmount: undefined,
		originCurrency: undefined,
		to: 'BR150000000000001093284081432',
		destinationAmount: 50000,
		destinationCurrency: 'USD',
	},
	{
		from: undefined,
		originAmount: undefined,
		originCurrency: undefined,
		to: 'ES76300060000112345678901893',
		destinationAmount: 50000,
		destinationCurrency: 'EUR',
	},
	{
		from: undefined,
		originAmount: undefined,
		originCurrency: undefined,
		to: 'PR76300060022001123490189',
		destinationAmount: 50000,
		destinationCurrency: 'EUR',
	},
	{
		from: undefined,
		originAmount: undefined,
		originCurrency: undefined,
		to: 'GR763000600330011234567890189',
		destinationAmount: 50000,
		destinationCurrency: 'EUR',
	},
]

export const setTransfers = (newTransfers: transfer[]) => {
	transfers = [...newTransfers]
}

export const getTransfers = () => {
	return [...transfers]
}
