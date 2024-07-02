import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
import Card from './Card'

const CardSection = () => {
	return (
		<div
			className='w-full py-[10rem] md:px-10 px-[100px] bg-white'
			id='resources'
		>
			<div className='max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8'>
				<Card
					image={single}
					title='Single User'
					price='$149'
					features={[
						'500 GB Storage',
						'1 Granted User',
						'Send up to 2 GB',
					]}
				/>
				<Card
					image={double}
					title='Double User'
					price='$199'
					features={[
						'1 TB Storage',
						'3 Granted User',
						'Send up to 10 GB',
					]}
					center={'bg-yellow-50'}
				/>
				<Card
					image={triple}
					title='Triple User'
					price='$299'
					features={[
						'5 TB Storage',
						'10 Granted User',
						'Send up to 20 GB',
					]}
				/>
			</div>
		</div>
	)
}

export default CardSection
