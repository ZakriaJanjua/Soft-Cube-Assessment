import { useRef } from 'react';
import { CategoryList } from './CategoryList';
import { FoodList } from './FoodList';

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
			className='w-[881px] max-h-[863px] overflow-auto bg-white rounded-xl border border-colorBorder'
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
							id={`div-${index + 1}`}
							className='pl-[54px] pt-[100.5px] pr-[40px]'
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
