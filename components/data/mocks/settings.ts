let ACCOUNT_DETAILS_GET_ERROR = false
let ACCOUNT_POST_ERROR = false
let ACCOUNT_PATCH_ERROR = false
let TRANSFER_POST_ERROR = false

export const getAccountsDetailsGetError = () => {
	return ACCOUNT_DETAILS_GET_ERROR
}
export const getAccountsPostError = () => {
	return ACCOUNT_POST_ERROR
}
export const getAccountsPatchError = () => {
	return ACCOUNT_PATCH_ERROR
}
export const getTransferPostError = () => {
	return TRANSFER_POST_ERROR
}

export const setAccountsDetailsGetError = (newValue: boolean) => {
	ACCOUNT_DETAILS_GET_ERROR = newValue
}
export const setAccountsPostError = (newValue: boolean) => {
	ACCOUNT_POST_ERROR = newValue
}
export const setAccountsPatchError = (newValue: boolean) => {
	ACCOUNT_PATCH_ERROR = newValue
}
export const setTransferPostError = (newValue: boolean) => {
	TRANSFER_POST_ERROR = newValue
}
