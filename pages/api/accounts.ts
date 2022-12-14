import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccounts, setAccounts } from '../../data/mocks/accounts'
import { getAccountsPostError } from '../../data/mocks/settings'
import { getTransfers, setTransfers } from '../../data/mocks/transfers'
import { accountDetails } from '../../data/types'

type Data = {
	accountsList: accountDetails[]
}

type Error = {
	message: string
}

const getAccountsAction = (res: NextApiResponse<Data | Error>) => {
	res.status(200).json({ accountsList: [...getAccounts()] })
}

const postAccount = (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
	if (!getAccountsPostError()) {
		const bodyContent = JSON.parse(req.body)
		setTransfers([
			{
				to: bodyContent.iban,
				destinationAmount: bodyContent.amount,
				destinationCurrency: bodyContent.currency,
			},
			...getTransfers(),
		])
		setAccounts([bodyContent, ...getAccounts()])
		res.status(201).send({ message: 'Account created' })
	} else {
		res.status(500).json({ message: 'At this moment is not possible to proceed with this request' })
	}
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
	if (req.method === 'GET') {
		getAccountsAction(res)
	} else if (req.method === 'POST') {
		postAccount(req, res)
	} else res.status(405).send({ message: 'Method not suported' })
}
