import { transfer } from '../../../../data/mocks/transfers'
import { DetailsContent } from './content'
import settings from '../../../../settings'

const getActualTransfers = (iban: string) => {
	return fetch(`${settings.BASE_URL}api/transfer/?iban=${iban}`, {
		cache: 'no-store',
	}).then(response => response.json())
}

const Details = async ({ params }: any) => {
	console.log('🚀 ~ file: page.tsx ~ line 12 ~ Details ~ params', params)
	const { transfers }: { transfers: transfer[] } = await getActualTransfers(params.iban)
	console.log('🚀 ~ file: page.tsx ~ line 14 ~ Details ~ params.iban', params.iban)

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<DetailsContent actualTransfers={transfers} iban={params.iban} />
		</div>
	)
}

export default Details
