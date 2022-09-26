import { useEffect, useState } from 'react'

const Title = () => {
	const [typedTitle, setTypedTitle] = useState('')
	const title = 'Welcome to my room'

	useEffect(() => {
		console.log('object')
		const timeout = setTimeout(() => {
			setTypedTitle(title.slice(0, typedTitle.length + 1))
			console.log('🚀 ~ file: index.tsx ~ line 15 ~ timeout ~ title.slice(0, title.length + 1)', title)
		}, 200)

		return () => clearTimeout(timeout)
	}, [typedTitle])

	return (
		<h1 className=' mt-16 absolute font-mono z-10 m-auto mb-4 text-4xl font-light tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white blinking-cursor'>
			{typedTitle}
		</h1>
	)
}

export default Title
