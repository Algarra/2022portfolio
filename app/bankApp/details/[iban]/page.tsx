import { transfer } from '../../../../data/mocks/transfers'
import { DetailsContent } from './content'

const getActualTransfers = (iban: string) => {
	return fetch(`https://www.danielalgarranavarro.com/api/transfer/?iban=${iban}`, {
		cache: 'force-cache',
	}).then(response => response.json())
}

const Details = async ({ params }: any) => {
	const actualTransfers: transfer[] = (await getActualTransfers(params.iban)).transfers

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<DetailsContent actualTransfers={actualTransfers} iban={params.iban} />
		</div>
	)
}

export default Details
