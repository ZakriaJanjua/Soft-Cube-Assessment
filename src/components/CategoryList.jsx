import { useEffect, useRef, useState } from 'react';
import {
	ArrowLongRightIcon,
	ArrowLongLeftIcon,
} from '@heroicons/react/24/outline';
import { useSwipeable } from 'react-swipeable';

export function CategoryList({ categoryRef, scrollContainerRef, categories }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeCat, setActiveCat] = useState(0);
	const [totalIndices, setTotalIndices] = useState(0);
	// const [catDisplayed, setCatDisplayed] = useState(0);
	const catDisplayed = useRef(0);

	function handleRightClick() {
		if (activeIndex < totalIndices) {
			setActiveIndex((index) => index + 1);
		} else {
			setActiveIndex(totalIndices);
		}
	}

	function handleLeftClick() {
		if (activeIndex > 0) {
			setActiveIndex((index) => index - 1);
		} else {
			setActiveIndex(0);
		}
	}

	const swipe = useSwipeable({
		onSwipedLeft: () => handleRightClick(),
		onSwipedRight: () => handleLeftClick(),
	});

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
			const scrollPosition = container.scrollTop + 3;
			// Iterate through the divs to find the one in the viewport
			for (let i = 0; i < categories.length; i++) {
				const div = document.querySelector(`#div-${i}`);
				if (div) {
					const divTop = div.offsetTop;
					const divBottom = divTop + div.clientHeight;
					// Check if the div is in the viewport
					if (divTop <= scrollPosition && scrollPosition < divBottom) {
						if (window.innerWidth > 900) {
							setActiveCat(i + 1);
							if (i > 4) {
								setActiveIndex(1);
							}
							if (i < 4) {
								setActiveIndex(0);
							}
						} else {
							setActiveCat(i);
							if (i > catDisplayed.current - 1) {
								setActiveIndex(activeIndex + 1);
							}
							if (i < catDisplayed.current) {
								handleLeftClick();
							}
						}
						break;
					}
				}
			}
		}
	}

	function handleResize() {
		let size;
		let catWidth;
		if (window.innerWidth > 900) {
			size = 879;
			catWidth = 154;
		} else {
			size = 1503;
			catWidth = 221;
		}
		let indices = Math.ceil(size / scrollContainerRef.current.offsetWidth);
		let displayed = Math.ceil(
			scrollContainerRef.current.offsetWidth / catWidth
		);
		// setCatDisplayed(displayed);
		catDisplayed.current = displayed;
		if (indices > 2) {
			setTotalIndices(2);
		} else {
			setTotalIndices(indices);
		}
	}

	useEffect(() => {
		// Attach the scroll event listener
		scrollContainerRef.current.addEventListener('scroll', handleScroll);
		handleResize();
		window.addEventListener('resize', handleResize);

		// Clean up the listener when the component unmounts
		return () => {
			scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			{...swipe}
			className='smallScreen:relative fixed bg-white smallScreen:px-[54px] smallScreen:py-[25px]'
		>
			<div
				className='flex gap-x-3'
				style={{
					transform: `translateX(${
						activeIndex * (window.innerWidth > 900 ? -50 : -40)
					}%)`,
					transition: 'transform 0.3s ease-in-out',
				}}
			>
				{categories.map((category, index) => (
					<button
						key={index}
						className={`leading-4 smallScreen:text-sm text-2xl smallScreen:py-[14px] px-[26px] py-8 smallScreen:rounded-3xl whitespace-nowrap
						${
							index === activeCat
								? 'smallScreen:bg-colorPrimary smallScreen:text-white smallScreen:border-2 smallScreen:border-transparent border-b-4 pt-9 text-colorPrimary border-colorPrimary'
								: 'bg-white smallScreen:border-2 smallScreen:border-colorPrimary smallScreen:text-colorPrimary'
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
					className='smallScreen:absolute hidden top-6 right-5 bg-white h-12 w-12 rounded-full border border-colorDot smallScreen:flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
					onClick={handleRightClick}
				>
					{/* <i className='fi fi-rr-arrow-right mt-2 text-colorPrimary'></i> */}
					<ArrowLongRightIcon className='w-8 stroke-1 text-colorPrimary' />
				</button>
			)}
			{activeIndex > 0 && (
				<button
					className='absolute hidden top-6 left-5 bg-white h-12 w-12 rounded-full border border-colorDot smallScreen:flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
					onClick={handleLeftClick}
				>
					{/* <i className='fi fi-rr-arrow-left mt-2 text-colorPrimary'></i> */}
					<ArrowLongLeftIcon className='w-8 stroke-1 text-colorPrimary' />
				</button>
			)}
			<div className='bg-white h-[60px] w-[50px] absolute top-5 -right-2 hidden smallScreen:block'></div>
			<div className='bg-white h-[60px] w-[50px] absolute top-5 -left-2 hidden smallScreen:block'></div>
		</div>
	);
}
