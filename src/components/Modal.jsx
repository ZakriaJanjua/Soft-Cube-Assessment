import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
	ChevronRightIcon,
	ChevronLeftIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function Modal({ setOpenId }) {
	return (
		<div className='absolute bg-white flex flex-col w-[450px] z-10 rounded-3xl shadow-xl right-0 -top-28'>
			<div className='w-full relative'>
				<Carousel
					showArrows={false}
					renderArrowNext={(clickHandler) => {
						return (
							<button
								className='absolute top-2/3 right-5 bg-white h-10 w-10 rounded-full border border-colorDot flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
								onClick={clickHandler}
							>
								{/* <i className='fi fi-rr-arrow-right mt-2 text-colorPrimary'></i> */}
								<ChevronRightIcon className='w-5 stroke-2' />
							</button>
						);
					}}
					renderArrowPrev={(clickHandler) => {
						return (
							<button
								className='absolute top-2/3 left-5 bg-white h-10 w-10 rounded-full border border-colorDot flex justify-center items-center shadow-[0_3px_6px_#00000029] z-10'
								onClick={clickHandler}
							>
								{/* <i className='fi fi-rr-arrow-left mt-2 text-colorPrimary'></i> */}
								<ChevronLeftIcon className='w-5 stroke-2' />
							</button>
						);
					}}
				>
					<div>
						<img
							src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
							alt=''
							className='rounded-t-3xl'
						/>
					</div>
					<div>
						<img
							src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
							alt=''
							className='rounded-t-3xl'
						/>
					</div>
					<div>
						<img
							src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
							alt=''
							className='rounded-t-3xl'
						/>
					</div>
					<div>
						<img
							src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
							alt=''
							className='rounded-t-3xl'
						/>
					</div>
				</Carousel>
				<div className='absolute top-0 right-0 p-5 flex gap-x-2'>
					<div className='w-10 h-10 '>
						<div className='bg-gray-300/50 w-full h-full rounded-full'>
							{/* <i className='fi fi-sr-heart mt-[5px] text-white'></i> */}
						</div>
						<HeartIcon className='w-5 text-white absolute top-[30px] left-[30px]' />
					</div>

					<div
						className='bg-black w-10 h-10 rounded-full flex border border-white justify-center items-center'
						onClick={() => {
							setOpenId(null);
						}}
					>
						{/* <i className='fi fi-rr-cross mt-[5px] text-white'></i> */}
						<XMarkIcon className='text-white w-6 cursor-pointer' />
					</div>
				</div>
			</div>
			<div className='h-[280px] p-5 relative'>
				<div className='flex justify-between'>
					<h3 className='font-semibold text-lg leading-4'>Hummus</h3>
					<span className='text-colorRatingGreen flex items-center ml-5'>
						<p className='font-openSans font-semibold text-sm leading-4'>4.9</p>
						{/* <i className='fi fi-ss-star h-[20px]'></i> */}
						<StarIcon className='w-4' />
					</span>
				</div>
				<div>
					<h4 className='leading-4 text-sm font-semibold text-colorPrimary mt-2'>
						AED 40
					</h4>
				</div>
				<p className='text-colorSecondaryText mt-2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco
				</p>
				<button className='absolute bg-colorPrimary text-white rounded-lg py-3 bottom-4 right-0 left-0 mx-4'>
					Add meal
				</button>
			</div>
		</div>
	);
}
