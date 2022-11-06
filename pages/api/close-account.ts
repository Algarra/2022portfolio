import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccounts, setAccounts } from '../../data/mocks/accounts';
import { getAccountsPatchError } from '../../data/mocks/settings';
import { accountDetails } from '../../data/types';

type Data = {
  accountsList: accountDetails[];
};

type Error = {
  message: string;
};

const closeAccount = (req: NextApiRequest, res: NextApiResponse<Data | Error>) => {
  if (!getAccountsPatchError()) {
    const newAccounts = [...getAccounts()].map((account) => {
      if (account.iban === req.body.iban) {
        return {
          ...account,
          status: false,
        };
      } else {
        return account;
      }
    });
    setAccounts(newAccounts);
    res.status(200).json({ accountsList: [...getAccounts()] });
  } else {
    res.status(500).json({ message: 'At this moment is not possible to proceed with this request' });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  if (req.method === 'PATCH') {
    closeAccount(req, res);
  } else res.status(405).send({ message: 'Method not suported' });
}
