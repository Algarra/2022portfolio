import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccounts, setAccounts } from '../../components/data/mocks/accounts'
import { getAccountsDetailsGetError, getTransferPostError } from '../../components/data/mocks/settings'
import { getTransfers, setTransfers, transfer } from '../../components/data/mocks/transfers'
import { accountDetails } from '../../components/data/types'

type Data = {
	accountsList?: accountDetails[]
	transfers?: transfer[]
}

type Error = {
	message: string
}

const getTransfersAction = (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
	if (!getAccountsDetailsGetError()) {
		const accountTransfers = getTransfers().filter(
			(transfer: transfer) => transfer.from === req.query.iban || transfer.to === req.query.iban
		)
		res.status(201).json({ transfers: [...accountTransfers] })
	} else {
		res.status(500).send({ message: 'At this moment is not possible to proceed with this request' })
	}
}

const postTransfer = (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
	if (!getTransferPostError()) {
		setTransfers([
			{
				from: req.body.originAccountIban,
				originAmount: req.body.amount,
				originCurrency: req.body.originCurrency,
				concept: req.body.concept,
				to: req.body.destinationAccountIban,
				destinationAmount: req.body.destinationAmount,
				destinationCurrency: req.body.destinationCurrency,
			},
			...getTransfers(),
		])

		const newAccounts = [...getAccounts()].map(account => {
			if (account.iban === req.body.originAccountIban) {
				return {
					...account,
					amount: account.amount - req.body.amount,
				}
			}

			if (account.iban === req.body.destinationAccountIban) {
				return {
					...account,
					amount: account.amount + req.body.destinationAmount,
				}
			}

			return account
		})

		setAccounts([...newAccounts])
		res.status(200).send({ message: 'Transfer created' })
	} else {
		res.status(500).json({ message: 'At this moment is not possible to proceed with this request' })
	}
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
	if (req.method === 'POST') {
		postTransfer(req, res)
	} else if (req.method === 'GET') {
		getTransfersAction(req, res)
	} else res.status(405).send({ message: 'Method not suported' })
}
