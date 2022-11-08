import { SettingsContent } from './content'
import settings from '../../../settings'

export type SettingsType = {
	accountsDetatilsGetError: boolean
	accountsPostError: boolean
	accountsPatchError: boolean
	transferPostError: boolean
}

const getActualSettings = () => {
	return fetch(`${settings.BASE_URL}api/api-control`, { next: { revalidate: 10 } }).then(response => response.json())
}

const Settings = async () => {
	const actualSettings: SettingsType = (await getActualSettings()).settings

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<SettingsContent actualSettings={actualSettings} />
		</div>
	)
}

export default Settings
