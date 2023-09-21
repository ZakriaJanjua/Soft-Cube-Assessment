import React from 'react';
import { FoodListItem } from './FoodListItem';

export function FoodList({ name, id, cartItems, setCartItems }) {
	const itemNames = ['Hummus plate', 'Dish 2', 'Dish 3'];
	function checkSelected(itemId) {
		let result = false;
		cartItems.map((item) => {
			if (item.id === itemId) {
				result = true;
			}
		});
		return result;
	}
	return (
		<div>
			<div className='flex items-end justify-between'>
				<div className='flex '>
					<h4 className='font-bold smallScreen:text-xl text-3xl pl-4 smallScreen:pl-0'>
						{name}
					</h4>
					<div className=' bg-colorQuantity w-7 rounded-full ml-3 smallScreen:flex hidden items-center justify-center'>
						<p className='text-white'>3</p>
					</div>
				</div>
				<p className='text-colorSecondaryText mr-[2px] text-sm smallScreen:block hidden'>
					Select
				</p>
			</div>
			<div className='mt-[9px]'>
				{itemNames.map((itemname, index) => {
					return (
						<div className='mt-1 w-full' key={index}>
							<FoodListItem
								id={id + (index + 1)}
								cartItems={cartItems}
								setCartItems={setCartItems}
								name={itemname + ' ' + name}
								selected={checkSelected(id + (index + 1))}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
