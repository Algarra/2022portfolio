import { SettingsContent } from './content'

export type SettingsType = {
	accountsDetatilsGetError: boolean
	accountsPostError: boolean
	accountsPatchError: boolean
	transferPostError: boolean
}

const getActualSettings = () => {
	return fetch('https://www.danielalgarranavarro.com/api/api-control', {
		cache: 'no-store',
	}).then(response => response.json())
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
