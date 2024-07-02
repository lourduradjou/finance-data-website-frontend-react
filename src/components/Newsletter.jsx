import React from 'react'

const Newsletter = () => {
	return (
		<div className='w-full py-16 text-white px-8' id='newsletter'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
				<div className='lg:col-span-2 my-4'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Want tips & tricks to optimize your flow?
					</h1>
					<p>Sign up to our newletter and stay up to date</p>
				</div>
				<div className='my-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between w-full'>
						<input
							className='p-3 w-full rounded-md text-black'
							type='email'
							placeholder='Enter Email'
						/>
						<button className='mx-2 bg-[#b028b0] w-[200px] rounded-md h-12 mt-4 font-bold text-lg md:text-xl my-4'>
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our{' '}
						<span className='text-red-500 border-b-2 border-b-red-700'>
							Privacy policy
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
