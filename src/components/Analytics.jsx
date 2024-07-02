import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-gray-200 rounded-md md:rounded-full'>
				<img
					className='w-[500px] md:h-[310px]  rounded-md'
					src={Laptop}
					alt='/'
				/>
				<div className='flex flex-col justify-center px-8 md:w-[500px]'>
					<p className='uppercase pt-2 font-bold text-[#00df9a]'>
						Data Analytics Dashboard
					</p>
					<h1 className='font-bold md:text-4xl text-3xl'>
						Manage Data Analytics Centrally
					</h1>
					<p className='md:pt-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolore dolores molestiae, molestias similique sit modi
						nam error ipsum recusandae harum sequi repellendus nemo
						exercitationem eveniet a dignissimos at beatae
						consectetur.
					</p>
					<button className='bg-[#b028b0] text-white w-[200px] rounded-md h-10 mt-4 font-bold text-lg md:text-xl my-4'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

export default Analytics
