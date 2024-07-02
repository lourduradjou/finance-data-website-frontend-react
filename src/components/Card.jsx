import React from 'react'

const Card = ({ image, title, features, price, center }) => {
	const bgClass = center ? center : 'bg-gray-100'
	return (
		<div
			className={`w-full ${bgClass} shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300`}
		>
			<img
				className='w-20 mx-auto bg-transparent mt-[-3rem]'
				src={image}
				alt='/'
			/>
			<h2 className='font-bold text-center py-4 text-2xl'>{title}</h2>
			<p className='text-center text-2xl font-bold'>{price}</p>
			<div className='mx-auto my-2 font-medium text-lg divide-y-2 divide-gray-600'>
				{features.map((feature, index) => (
					<p key={index} className='mx-8 py-[1rem]'>
						{feature}
					</p>
				))}
			</div>
			<button className='bg-[#b028b0] w-[200px] rounded-md h-10 mx-auto mt-4 font-bold text-lg md:text-xl transition duration-300 hover:bg-red-400'>
				Start Trial
			</button>
		</div>
	)
}

export default Card
