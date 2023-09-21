import { XMarkIcon } from '@heroicons/react/24/outline';

export function Header() {
	return (
		<section>
			<div className='bg-white h-24 flex items-center 2xl:px-72 xl:px-36 justify-between shadow-sm'>
				<div className='flex items-center'>
					<div className='bg-colorCross w-12 h-12 rounded-full flex justify-center items-center'>
						{/* <i className='fi fi-rr-cross mt-[3px]'></i> */}
						<XMarkIcon className='w-6' />
					</div>
					<h2 className='font-bold text-2xl ml-[39px]'>Select your meals</h2>
				</div>
				<div className='flex items-center w-[186px] h-[48px]'>
					<div className='border border-colorBorder px-6 py-4 rounded-3xl flex items-center gap-x-[29px]'>
						<p className='text-colorPrimary font-bold text-sm leading-4'>
							Step 1/3
						</p>
						<div className='flex gap-x-[7px]'>
							<div className='h-3 w-3 bg-colorPrimary rounded-full'></div>
							<div className='h-3 w-3 bg-colorDot rounded-full'></div>
							<div className='h-3 w-3 bg-colorDot rounded-full'></div>
						</div>
					</div>
				</div>
			</div>
			<div className='h-[6px] w-[358px] bg-colorPrimary'></div>
		</section>
	);
}
