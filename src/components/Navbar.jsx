import React from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
	const [nav, setNav] = useState(true)

	const handleHamburger = () => {
		setNav(!nav)
	}

	return (
		<div className='flex justify-between items-center rounded-full bg-[#b028b0] md:h-16 h-12 px-4 mx-4 max-w-[1240px] md:mx-auto text-white mt-4'>
			<h1 className='text-xl font-bold text-[#ffffff] w-full p-4'>
				REACT.
			</h1>
			<ul className='hidden uppercase md:flex'>
				<li className='p-4'>home</li>
				<li className='p-4'>Company</li>
				<li className='p-4'>Resources</li>
				<li className='p-4'>About</li>
				<li className='p-4'>Contact</li>
			</ul>
			<div className='block md:hidden' onClick={handleHamburger}>
				{nav ? (
					<IoMenuOutline size={25} />
				) : (
					<AiOutlineClose size={25} />
				)}
			</div>
			<div
				className={
					!nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-red-600 bg-[#1e1b1b] ease-in-out duration-[0.5s]'
						: 'fixed left-[-60%] top-0 h-full border-r border-r-red-600 bg-[#1e1b1b] ease-out duration-[0.8s]'
				}
			>
				<h1
					className='
						text-xl
						font-bold
						text-[#b028b0]
						w-full
						p-4
            		'
				>
					REACT.
				</h1>

				<ul className='uppercase p-4'>
					<li className='p-4 border-b-gray-600 border-b-[1px]'>
						Home
					</li>
					<li className='p-4 border-b-gray-600 border-b-[1px]'>
						Company
					</li>
					<li className='p-4 border-b-gray-600 border-b-[1px]'>
						Resources
					</li>
					<li className='p-4 border-b-gray-600 border-b-[1px]'>
						About
					</li>
					<li className='p-4 border-b-gray-600 border-b-[1px]'>
						Contact
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
