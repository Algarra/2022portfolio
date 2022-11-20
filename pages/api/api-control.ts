import type { NextApiRequest, NextApiResponse } from 'next'
import {
	getAccountsDetailsGetError,
	getAccountsPostError,
	getAccountsPatchError,
	getTransferPostError,
	setAccountsDetailsGetError,
	setAccountsPostError,
	setAccountsPatchError,
	setTransferPostError,
} from '../../data/mocks/settings'

type Data = {
	settings: {
		accountsDetatilsGetError: boolean
		accountsPostError: boolean
		accountsPatchError: boolean
		transferPostError: boolean
	}
}

type Error = {
	message: string
}

const postSettings = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const bodyContent = JSON.parse(req.body)

	if (bodyContent.setting === 'accountsDetailsGetError') {
		setAccountsDetailsGetError(bodyContent.value)
	}
	if (bodyContent.setting === 'accountsPostError') {
		setAccountsPostError(bodyContent.value)
	}
	if (bodyContent.setting === 'accountsPatchError') {
		setAccountsPatchError(bodyContent.value)
	}
	if (bodyContent.setting === 'transferPostError') {
		setTransferPostError(bodyContent.value)
	}
	if (bodyContent.setting === 'reset-settings') {
		setAccountsDetailsGetError(false)
		setAccountsPostError(false)
		setAccountsPatchError(false)
		setTransferPostError(false)
	}

	return res.status(200).json({
		settings: {
			accountsDetatilsGetError: getAccountsDetailsGetError(),
			accountsPostError: getAccountsPostError(),
			accountsPatchError: getAccountsPatchError(),
			transferPostError: getTransferPostError(),
		},
	})
}

const getSettings = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	return res.status(200).json({
		settings: {
			accountsDetatilsGetError: getAccountsDetailsGetError(),
			accountsPostError: getAccountsPostError(),
			accountsPatchError: getAccountsPatchError(),
			transferPostError: getTransferPostError(),
		},
	})
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
	if (req.method === 'GET') {
		getSettings(req, res)
	} else if (req.method === 'POST') {
		postSettings(req, res)
	} else res.status(405).send({ message: 'Method not suported' })
}
