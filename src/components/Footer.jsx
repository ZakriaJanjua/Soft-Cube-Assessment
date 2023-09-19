export function Footer() {
	return (
		<div className='fixed bottom-0 left-0 bg-white h-24 w-full flex items-center px-[297px] justify-end'>
			<button className='bg-colorPrimary flex py-5 px-[139px] rounded-full gap-x-3 items-center justify-center'>
				<p className='text-white text-lg leading-4'>Payment</p>
				<i className='fi fi-rr-arrow-right text-white h-[16px]'></i>
			</button>
		</div>
	);
}
