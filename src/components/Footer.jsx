import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export function Footer() {
	return (
		<div className='fixed bottom-0 left-0 bg-white h-24 w-full flex items-center xl:px-64 lg:px-28 justify-end'>
			<button className='bg-colorPrimary flex px-32 rounded-full gap-x-2 items-center justify-center'>
				<p className='text-white text-lg leading-4'>Payment</p>
				{/* <i className='fi fi-rr-arrow-right text-white h-[16px]'></i> */}
				<ArrowLongRightIcon className='w-14 text-white stroke-1 ' />
			</button>
		</div>
	);
}
