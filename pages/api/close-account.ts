import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccounts, setAccounts } from '../../data/mocks/accounts'
import { getAccountsPatchError } from '../../data/mocks/settings'

type Data = {
	message: string
}

const closeAccount = (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
	if (!getAccountsPatchError()) {
		const newAccounts = [...getAccounts()].map(account => {
			if (account.iban === JSON.parse(req.body).iban) {
				return {
					...account,
					status: false,
				}
			} else {
				return account
			}
		})
		setAccounts(newAccounts)
		res.status(200).send({ message: 'Account closed' })
	} else {
		res.status(500).json({ message: 'At this moment is not possible to proceed with this request' })
	}
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'PATCH') {
		closeAccount(req, res)
	} else res.status(405).send({ message: 'Method not suported' })
}
