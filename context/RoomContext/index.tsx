import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface componentTypes {
	children: ReactNode
}

interface contextTypes {
	itemOnHover: boolean
	setItemOnHover: Dispatch<SetStateAction<boolean>>
	itemSelected: { title: string; text: string; img: string } | undefined
	setItemSelected: Dispatch<SetStateAction<{ title: string; text: string; img: string } | undefined>>
}

export const roomContext = createContext<contextTypes>({
	itemOnHover: false,
	setItemOnHover: () => {},
	itemSelected: undefined,
	setItemSelected: () => {},
})

export const RoomContext: React.FC<componentTypes> = ({ children }) => {
	const [itemOnHover, setItemOnHover] = useState(false)
	const [itemSelected, setItemSelected] = useState<{ title: string; text: string; img: string } | undefined>(undefined)

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
