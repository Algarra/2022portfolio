import React, { createContext, ReactNode, useState } from 'react'
import { componentTypes, contextTypes } from './types'

export const roomContext = createContext<contextTypes>({
	itemOnHover: false,
	setItemOnHover: () => {},
	itemSelected: undefined,
	setItemSelected: () => {},
})

export const RoomContext: React.FC<componentTypes> = ({ children }) => {
	const [itemOnHover, setItemOnHover] = useState(false)
	const [itemSelected, setItemSelected] = useState<{ title: string; text: string; img: ReactNode } | undefined>(
		undefined
	)

	return (
		<roomContext.Provider
			value={{
				itemOnHover,
				setItemOnHover,
				itemSelected,
				setItemSelected,
			}}
		>
			{children}
		</roomContext.Provider>
	)
}
