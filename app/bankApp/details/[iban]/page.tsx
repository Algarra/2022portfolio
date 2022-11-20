import { transfer } from '../../../../data/mocks/transfers'
import { DetailsContent } from './content'
import settings from '../../../../settings'

const getActualTransfers = async (iban: string) => {
	const data = await fetch(`${settings.BASE_URL}api/transfer?iban=${iban}`, { next: { revalidate: 4 } })

	return data.json()
}

const Details = async ({ params }: { params: { slug: string; iban: string } }) => {
	const { transfers }: { transfers: transfer[] } = await getActualTransfers(params.iban)

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<DetailsContent actualTransfers={transfers} iban={params.iban} />
		</div>
	)
}

export default Details
