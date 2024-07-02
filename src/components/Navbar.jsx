import React, { useState, useEffect } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [nav, setNav] = useState(true)
	const [navOpen, setNavOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false) // Adjusted initial state

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)
	}, [])

	const handleHamburger = () => {
		setNav(!nav)
		setNavOpen(!navOpen)
	}

	const scrollToSection = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div
			className={`ease-linear transition-all duration-500 flex justify-between items-center bg-[#b028b0] ${
				scrolled
					? 'fixed top-0 left-0 right-0 z-50 bg-red-400'
					: 'rounded-full mx-4 max-w-[1240px] md:mx-auto mt-4'
			}`}
		>
			<h1 className='text-xl font-bold text-[#ffffff] w-full p-4 hover:text-[#000000] duration-200'>
				REACT.
			</h1>
			<ul className='hidden uppercase font-medium md:flex text-white'>
				<li
					className='p-4 hover:text-[#000000] transition-all duration-300'
					onClick={() => scrollToSection('hero')}
				>
					Home
				</li>
				<li
					className='p-4 hover:text-[#000000] transition-all duration-300'
					onClick={() => scrollToSection('company')}
				>
					Company
				</li>
				<li
					className='p-4 hover:text-[#000000] transition-all duration-300'
					onClick={() => scrollToSection('resources')}
				>
					Resources
				</li>
				<li
					className='p-4 hover:text-[#000000] transition-all duration-300'
					onClick={() => scrollToSection('footer')}
				>
					About
				</li>
				<li
					className='p-4 hover:text-[#000000] transition-all duration-300'
					onClick={() => scrollToSection('newsletter')}
				>
					Contact
				</li>
			</ul>
			<div className='block md:hidden px-4' onClick={handleHamburger}>
				{navOpen ? (
					<AiOutlineClose size={25} />
				) : (
					<IoMenuOutline size={25} />
				)}
			</div>
			<div
				className={
					!nav
						? 'fixed left-0 top-0 w-[60%] md:hidden h-full border-r border-r-red-600 bg-[#1e1b1b] ease-in-out duration-[0.5s] text-white'
						: 'fixed left-[-60%]  top-0 h-full border-r border-r-red-600 bg-[#1e1b1b] ease-out duration-[0.8s]'
				}
			>
				<h1 className='text-xl font-bold text-[#b028b0] w-full p-4 hover:text-red-400 transition-all duration-300'>
					REACT.
				</h1>
				<ul className='uppercase p-4'>
					<li
						className='p-4 border-b-gray-600 border-b-[1px] hover:text-red-400 transition-all duration-300'
						onClick={() => scrollToSection('hero')}
					>
						Home
					</li>
					<li
						className='p-4 border-b-gray-600 border-b-[1px] hover:text-red-400 transition-all duration-300'
						onClick={() => scrollToSection('company')}
					>
						Company
					</li>
					<li
						className='p-4 border-b-gray-600 border-b-[1px] hover:text-red-400 transition-all duration-300'
						onClick={() => scrollToSection('resources')}
					>
						Resources
					</li>
					<li
						className='p-4 border-b-gray-600 border-b-[1px] hover:text-red-400 transition-all duration-300'
						onClick={() => scrollToSection('footer')}
					>
						About
					</li>
					<li
						className='p-4 border-b-gray-600 border-b-[1px] hover:text-red-400 transition-all duration-300'
						onClick={() => scrollToSection('newsletter')}
					>
						Contact
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
