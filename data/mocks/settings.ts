let ACOUNT_DETAILS_GET_ERROR = false
let ACOUNT_POST_ERROR = false
let ACOUNT_PATCH_ERROR = false
let TRANSFER_POST_ERROR = false

export const getAccountsDetailsGetError = () => {
	return ACOUNT_DETAILS_GET_ERROR
}
export const getAccountsPostError = () => {
	return ACOUNT_POST_ERROR
}
export const getAccountsPatchError = () => {
	return ACOUNT_PATCH_ERROR
}
export const getTransferPostError = () => {
	return TRANSFER_POST_ERROR
}

export const setAccountsDetailsGetError = (newValue: boolean) => {
	ACOUNT_DETAILS_GET_ERROR = newValue
}
export const setAccountsPostError = (newValue: boolean) => {
	ACOUNT_POST_ERROR = newValue
}
export const setAccountsPatchError = (newValue: boolean) => {
	ACOUNT_PATCH_ERROR = newValue
}
export const setTransferPostError = (newValue: boolean) => {
	TRANSFER_POST_ERROR = newValue
}
