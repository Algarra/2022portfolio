import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
	delete process.env.ACCOUNTS
	delete process.env.ACOUNT_DETAILS_GET_ERROR
	delete process.env.ACOUNT_POST_ERROR
	delete process.env.ACOUNT_PATCH_ERROR
	delete process.env.TRANSFER_POST_ERROR

	res.status(201).send({ message: 'Cleared' })
}
