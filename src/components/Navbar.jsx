import React, { useState, useEffect } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	const [scrolled, setScrolled] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)
	}, [scrolled])
	const handleHamburger = () => {
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
			className={`ease-linear transition-all duration-300 flex justify-between items-center rounded-full bg-[#b028b0] md:h-16 h-12 px-4 mx-4 max-w-[1240px] md:mx-auto text-white mt-4 ${
				scrolled ? 'fixed top-0 left-0 right-0 z-50 bg-red-400' : ''
			}`}
		>
			<h1 className='text-xl font-bold text-[#ffffff] w-full p-4 hover:text-[#000000]  duration-200'>
				REACT.
			</h1>
			<ul
				className={`hidden font-medium uppercase md:flex ${
					navOpen ? '' : 'hidden'
				}`}
			>
				<li
					className='p-4  hover:text-[#000000]  duration-200'
					onClick={() => scrollToSection('hero')}
				>
					Home
				</li>
				<li
					className='p-4  hover:text-[#000000]  duration-200'
					onClick={() => scrollToSection('company')}
				>
					Company
				</li>
				<li
					className='p-4  hover:text-[#000000]  duration-200'
					onClick={() => scrollToSection('resources')}
				>
					Resources
				</li>
				<li
					className='p-4  hover:text-[#000000]  duration-200'
					onClick={() => scrollToSection('footer')}
				>
					About
				</li>
				<li
					className='p-4 hover:text-[#000000] duration-200'
					onClick={() => scrollToSection('newsletter')}
				>
					Contact
				</li>
			</ul>
			<div className='block md:hidden' onClick={handleHamburger}>
				{navOpen ? (
					<AiOutlineClose size={25} />
				) : (
					<IoMenuOutline size={25} />
				)}
			</div>
		</div>
	)
}

export default Navbar
