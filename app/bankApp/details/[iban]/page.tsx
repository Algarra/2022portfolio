import { transfer } from '../../../../data/mocks/transfers'
import { DetailsContent } from './content'
import settings from '../../../../settings'

const getActualTransfers = (iban: string) => {
	return fetch(`${settings.BASE_URL}api/transfer?iban=${iban}`, { next: { revalidate: 10 } }).then(response => response.json())
}

const Details = async ({ params }: any) => {
	const { transfers }: { transfers: transfer[] } = await getActualTransfers(params.iban)

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<DetailsContent actualTransfers={transfers} iban={params.iban} />
		</div>
	)
}

export default Details
