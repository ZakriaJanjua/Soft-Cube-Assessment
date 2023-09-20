import { useState } from 'react';
import Modal from './Modal';
import { StarIcon } from '@heroicons/react/24/solid';
import { EyeIcon, CheckIcon } from '@heroicons/react/24/outline';

export function FoodListItem({ id, cartItems, setCartItems, name, selected }) {
	const [openId, setOpenId] = useState(null);
	function handleInsertItem() {
		let existing = false;
		if (!cartItems.length) {
			setCartItems([{ name, id, price: 40 }]);
		} else {
			for (let i of cartItems) {
				if (i.id === id) {
					existing = true;
				}
			}
			if (!existing) {
				setCartItems((prev) => [...prev, { id, name, price: 40 }]);
			}
		}
	}
	return (
		<div>
			<div
				className={`p-2 flex border-[3px] w-full ${
					selected ? 'rounded-xl border-colorPrimary' : 'border-transparent'
				}`}
				style={{
					background:
						selected == true
							? 'transparent linear-gradient(96deg, #FFFFFF 0%, #F5F2FF 100%) 0% 0% no-repeat padding-box'
							: 'white',
				}}
			>
				<div className='w-[72px]' onClick={handleInsertItem}>
					<img
						src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
						alt='food'
						className='rounded-lg'
					/>
				</div>
				<div className='ml-2 flex flex-col w-full justify-center gap-y-[9px]'>
					<h3 className='font-semibold text-lg leading-4'>{name}</h3>
					<div className='flex items-center justify-between relative w-full'>
						<h4 className='leading-4 text-sm font-semibold'>AED 40</h4>
						<span className='text-colorRatingGreen flex items-center'>
							<p className='font-openSans font-semibold text-sm leading-4'>
								4.9
							</p>
							{/* <i className='fi fi-ss-star h-[20px]'></i> */}
							<StarIcon className='w-4' />
						</span>
						<p className='truncate w-[458px] text-sm leading-4 text-colorSecondaryText'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						{/* <i className='fi fi-rr-eye ml-5' onClick={() => setOpenId(id)}></i> */}
						<div className='flex gap-x-4'>
							<EyeIcon className='w-7 stroke-1' onClick={() => setOpenId(id)} />
							{id === openId && <Modal setOpenId={setOpenId} />}
							<div
								className={`w-6 h-6 rounded-full mt-[1.5px] flex items-center justify-center ${
									selected
										? 'bg-colorPrimary border border-colorPrimary'
										: 'border border-colorDark'
								}`}
								onClick={handleInsertItem}
							>
								{/* <img src='/check.svg' alt='' className='w-[12px] h-[8px]' /> */}
								<CheckIcon className='w-4 stroke-2 text-white' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
}
