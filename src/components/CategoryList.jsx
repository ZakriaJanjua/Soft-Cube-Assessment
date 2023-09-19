import { useEffect, useRef, useState } from 'react';

export function CategoryList({ categoryRef, scrollContainerRef, categories }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeCat, setActiveCat] = useState(0);

	function handleRightClick() {
		if (activeIndex < 1) {
			setActiveIndex((index) => index + 1);
		} else {
			setActiveIndex(1);
		}
	}

	function handleLeftClick() {
		if (activeIndex > 0) {
			setActiveIndex((index) => index - 1);
		} else {
			setActiveIndex(0);
		}
	}

	function handleCategoryClick(index) {
		scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		setTimeout(() => {
			const category = categoryRef.current.children[index];
			category.scrollIntoView({ behavior: 'smooth' });
			setActiveCat(index);
		}, 200);
		setTimeout(() => {
			scrollContainerRef.current.addEventListener('scroll', handleScroll);
		}, 200);
	}

	function handleScroll() {
		const container = scrollContainerRef.current;
		if (container) {
			const scrollPosition = container.scrollTop;

			// Iterate through the divs to find the one in the viewport
			for (let i = 0; i < categories.length; i++) {
				const div = document.querySelector(`#div-${i}`);
				if (div) {
					const divTop = div.offsetTop;
					const divBottom = divTop + div.clientHeight;

					// Check if the div is in the viewport
					if (divTop <= scrollPosition && scrollPosition < divBottom) {
						setActiveCat(i);
						if (i > 4) {
							setActiveIndex(1);
						}
						if (i < 4) {
							setActiveIndex(0);
						}
						break;
					}
				}
			}
		}
	}

	useEffect(() => {
		// Attach the scroll event listener
		scrollContainerRef.current.addEventListener('scroll', handleScroll);
		// Clean up the listener when the component unmounts
		return () => {
			scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='relative px-[54px] py-[25px]'>
			<div
				className='flex gap-x-3'
				style={{
					transform: `translateX(${activeIndex * -50}%)`,
					transition: 'transform 0.3s ease-in-out',
				}}
			>
				{categories.map((category, index) => (
					<button
						key={index}
						className={`leading-4 text-sm py-[14px] px-[26px] rounded-3xl whitespace-nowrap
						${
							index === activeCat
								? 'bg-colorPrimary text-white border-2 border-transparent'
								: 'bg-white border-2 border-colorPrimary text-colorPrimary'
						}
					`}
						onClick={() => handleCategoryClick(index)}
					>
						{category}
					</button>
				))}
			</div>
			{activeIndex < 1 && (
				<button
					className='absolute top-6 right-5 bg-white h-12 w-12 rounded-full border border-colorDot flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
					onClick={handleRightClick}
				>
					<i className='fi fi-rr-arrow-right mt-2 text-colorPrimary'></i>
				</button>
			)}
			{activeIndex > 0 && (
				<button
					className='absolute top-6 left-5 bg-white h-12 w-12 rounded-full border border-colorDot flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
					onClick={handleLeftClick}
				>
					<i className='fi fi-rr-arrow-left mt-2 text-colorPrimary'></i>
				</button>
			)}
			<div className='bg-white h-[60px] w-[50px] absolute top-4 -right-2'></div>
			<div className='bg-white h-[60px] w-[50px] absolute top-4 -left-2'></div>
		</div>
	);
}
