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
					<h4 className='font-bold text-xl'>{name}</h4>
					<p className='text-white bg-colorQuantity w-7 text-center rounded-full ml-3'>
						3
					</p>
				</div>
				<p className='text-colorSecondaryText mr-[2px] text-sm'>Select</p>
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
