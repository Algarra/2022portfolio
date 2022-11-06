import { transfer } from '../../../../data/mocks/transfers'
import { DetailsContent } from './content'

const getActualTransfers = (iban: string) => {
	return fetch(`http://localhost:3001/api/transfer/?iban=${iban}`, { cache: 'no-store' }).then(response => response.json())
}

const Details = async ({ params }: { params: { iban: string } }) => {
	const actualTransfers: transfer[] = (await getActualTransfers(params.iban)).transfers

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<DetailsContent actualTransfers={actualTransfers} iban={params.iban} />
		</div>
	)
}

export default Details