import { CartItem } from './CartItem';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export function Cart({ cartItems, setCartItems }) {
	return (
		<div className='xl:w-[410px] w-[881px] mt-10 xl:mt-0 border border-colorBorder h-fit rounded-xl relative box'>
			<div className='w-full h-[179px] overflow-hidden'>
				<img
					src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
					alt=''
					className='rounded-t-xl'
				/>
			</div>
			<div className='bg-white rounded-xl'>
				<div className='flex justify-center pt-[19px]'>
					<h4 className='font-bold text-lg'>Jamwaharat Esham Restaurant</h4>
					<span className='text-colorRatingGreen flex items-center ml-[14px]'>
						{/* <i className='fi fi-ss-star h-[20px] mr-[2px]'></i> */}
						<StarIcon className='w-4' />
						<p className='font-openSans font-semibold text-sm leading-4'>4.9</p>
					</span>
				</div>
				<div className='flex gap-x-[12px] items-center justify-center'>
					<p>Wafi Mall, First Floor, Horus, Phase 5, Dubai</p>
					<div className='bg-black w-9 h-9 flex justify-center items-center rounded-xl'>
						{/* <i className='fi fi-rr-marker text-white'></i> */}
						<MapPinIcon className='w-5 stroke-1 text-white' />
					</div>
				</div>
				<div className='flex justify-center mt-1'>
					<button className='bg-colorQuantity text-white px-6 py-2 rounded-md text-sm'>
						Arabic Restaurant
					</button>
				</div>
				<div className='mt-10'>
					<hr />
					{cartItems.map((item) => {
						return (
							<div key={item.id}>
								<CartItem
									name={item.name}
									price={item.price}
									id={item.id}
									setCartItems={setCartItems}
									cartItems={cartItems}
								/>
								<hr className='w-11/12 ml-4' />
							</div>
						);
					})}
					<hr />
					<div className='px-[18px] flex gap-x-[13px] mt-8 mb-2'>
						<p className='text-sm text-colorSecondaryText'>Total Price</p>
						<h3 className='font-bold text-lg leading-4'>
							AED {cartItems.length * 40}
						</h3>
					</div>
					<hr className='pb-7' />
				</div>
			</div>
		</div>
	);
}
