import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import CardSection from './components/CardSection'
import Footer from './components/Footer'

const App = () => {
	return (
		<div className='bg-customBlack font-montserrat'>
			<Navbar />
			<Hero />
			<Analytics />
			<Newsletter />
			<CardSection />
			<Footer />
		</div>
	)
}
export default App
