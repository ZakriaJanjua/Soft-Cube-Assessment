import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

export function CartItem({ name, price, id, setCartItems, cartItems }) {
	function handleRemoveItem() {
		const temp_arr = cartItems.filter((item) => item.id !== id);
		setCartItems(temp_arr);
	}
	return (
		<div className='px-[18px] py-3'>
			<div className='flex'>
				<div className='w-[94px]'>
					<img
						src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
						alt='food'
						className='rounded-lg'
					/>
				</div>
				<div className='flex ml-3 justify-between items-center w-full'>
					<div className='flex flex-col justify-center gap-y-[6px]'>
						<h3 className='font-bold text-lg text-colorPrimary leading-4'>
							{name}
						</h3>
						<h4 className='text-sm font-semibold leading-4'>AED {price}</h4>
					</div>
					<div onClick={handleRemoveItem}>
						{/* <i className='fi fi-rr-trash'></i> */}
						<TrashIcon className='w-6' />
					</div>
				</div>
			</div>
		</div>
	);
}
