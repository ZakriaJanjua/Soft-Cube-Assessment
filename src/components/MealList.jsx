import { useRef, useState } from 'react';
import { CategoryList } from './CategoryList';
import { FoodList } from './FoodList';
import { useSwipeable } from 'react-swipeable';

export function MealList({ cartItems, setCartItems }) {
	const containerRef = useRef(null);
	const scrollContainerRef = useRef(null);
	const categories = [
		'Cold Apetizers',
		'Hot Apetizers',
		'Soup',
		'Sandwiches',
		'Shawarma',
		'Plates On Oven',
		'Grilled',
		'Seafood',
	];

	return (
		<div
			className='smallScreen:min-w-[881px] smallScreen:w-[881px] smallScreen:max-h-[863px] max-h-screen overflow-auto smallScreen:bg-white smallScreen:rounded-xl border border-colorBorder'
			ref={scrollContainerRef}
		>
			<div className='overflow-hidden border-b-2 border-colorBorder sticky bg-white rounded-t-xl top-0 z-50'>
				<CategoryList
					categoryRef={containerRef}
					scrollContainerRef={scrollContainerRef}
					categories={categories}
				/>
			</div>
			<div ref={containerRef}>
				{categories.map((category, index) => {
					return (
						<div
							id={`div-${index}`}
							className='smallScreen:pl-14 pt-24 smallScreen:pr-10 px-2 bg-white mt-4 smallScreen:mt-0'
							key={index}
						>
							<FoodList
								name={category}
								id={'' + (index + 1)}
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
