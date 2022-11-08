export const getAccountsDetailsGetError = () => {
	if (!process.env.ACOUNT_DETAILS_GET_ERROR) process.env.ACOUNT_DETAILS_GET_ERROR = JSON.stringify(false)

	return JSON.parse(process.env.ACOUNT_DETAILS_GET_ERROR)
}
export const getAccountsPostError = () => {
	if (!process.env.ACOUNT_POST_ERROR) process.env.ACOUNT_POST_ERROR = JSON.stringify(false)

	return JSON.parse(process.env.ACOUNT_POST_ERROR)
}
export const getAccountsPatchError = () => {
	if (!process.env.ACOUNT_PATCH_ERROR) process.env.ACOUNT_PATCH_ERROR = JSON.stringify(false)

	return JSON.parse(process.env.ACOUNT_PATCH_ERROR)
}
export const getTransferPostError = () => {
	if (!process.env.TRANSFER_POST_ERROR) process.env.TRANSFER_POST_ERROR = JSON.stringify(false)

	return JSON.parse(process.env.TRANSFER_POST_ERROR)
}

export const setAccountsDetailsGetError = (newValue: boolean) => {
	process.env.ACOUNT_DETAILS_GET_ERROR = JSON.stringify(newValue)
}
export const setAccountsPostError = (newValue: boolean) => {
	process.env.ACOUNT_POST_ERROR = JSON.stringify(newValue)
}
export const setAccountsPatchError = (newValue: boolean) => {
	process.env.ACOUNT_PATCH_ERROR = JSON.stringify(newValue)
}
export const setTransferPostError = (newValue: boolean) => {
	process.env.TRANSFER_POST_ERROR = JSON.stringify(newValue)
}
