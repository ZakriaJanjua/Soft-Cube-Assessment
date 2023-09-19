import { useState } from 'react';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MealList } from './components/MealList';

function App() {
	const [cartItems, setCartItems] = useState([]);
	return (
		<div className='bg-colorBackground min-h-screen font-workSans mb-24 min-w-[881px]'>
			<Header />
			<div className='flex flex-col xl:flex-row mt-[57px] items-center xl:items-start justify-center xl:gap-x-[44px] gap-x-5 mx-3'>
				<MealList cartItems={cartItems} setCartItems={setCartItems} />
				<Cart cartItems={cartItems} setCartItems={setCartItems} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
