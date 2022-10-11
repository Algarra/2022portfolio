import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface componentTypes {
	children: ReactNode
}

export interface contextTypes {
	itemOnHover: boolean
	setItemOnHover: Dispatch<SetStateAction<boolean>>
	itemSelected: { title: string; text: string; img: ReactNode } | undefined
	setItemSelected: Dispatch<SetStateAction<{ title: string; text: string; img: ReactNode } | undefined>>
}
