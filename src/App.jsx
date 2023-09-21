import { useState } from 'react';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MealList } from './components/MealList';

function App() {
	const [cartItems, setCartItems] = useState([]);
	return (
		<div className='bg-colorBackground min-h-screen font-workSans mb-24'>
			<div className='hidden smallScreen:block'>
				<Header />
			</div>
			<div className='smallScreen:flex smallScreen:flex-col minScreen:flex-row smallScreen:mt-14 smallScreen:items-center minScreen:items-start justify-center minScreen:gap-x-11'>
				<MealList cartItems={cartItems} setCartItems={setCartItems} />
				<div className='hidden smallScreen:block'>
					<Cart cartItems={cartItems} setCartItems={setCartItems} />
				</div>
			</div>
			<div className='hidden smallScreen:block'>
				<Footer />
			</div>
		</div>
	);
}

export default App;
