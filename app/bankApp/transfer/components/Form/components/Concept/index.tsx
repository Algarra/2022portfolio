import { Dispatch, FC, SetStateAction } from 'react'

type ConceptProps = {
	concept: string
	setConcept: Dispatch<SetStateAction<string>>
}

export const Concept: FC<ConceptProps> = ({ concept, setConcept }) => (
	<div className='relative z-0 mb-6 w-full'>
		<input
			name='concept'
			id='concept'
			value={concept}
			data-testid='concept'
			onChange={e => setConcept(e.target.value)}
			className='block py-2.5 px-0 w-full text-base md:text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-lime-500 focus:outline-none focus:ring-0  peer'
			placeholder=' '
			required
		/>
		<label
			htmlFor='concept'
			className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
		>
			Concept <span className=' text-lime-400'>*</span>
		</label>
	</div>
)
