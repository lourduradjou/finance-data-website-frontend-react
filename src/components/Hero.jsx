import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
	return (
		<div className='text-white' id='hero'>
			<div className=' max-w-[800px] mt-[-96px] w-full h-screen flex flex-col justify-center mx-auto text-center'>
				<p className='uppercase text-[#00df9a] font-bold p-2'>
					Growing with data analytics
				</p>
				<h1 className='uppercase font-bold pb-2 md:text-6xl sm:text-5xl text-4xl md:py-4'>
					Grow with data
				</h1>
				<div className='flex justify-center items-center pb-2'>
					<p className='md:text-3xl sm:text-2xl text-xl font-bold pr-2'>
						Fase , flexible financing for
					</p>
					<ReactTyped
						className='md:text-3xl sm:text-2xl text-xl font-bold'
						strings={['C2B', 'SASS', 'BTB']}
						typeSpeed={120}
						backSpeed={130}
						loop
					/>
				</div>
				<p className='md:text-lg text-md font-bold text-gray-500 px-2 md:px-0'>
					Monitor your data analytics to increase revenue for BTB, C2B
					& SASS platforms
				</p>

				<button className='bg-[#b028b0] w-[200px] rounded-md h-10 mx-auto mt-4 font-bold text-lg md:text-xl '>
					Get Started
				</button>
			</div>
		</div>
	)
}

export default Hero
