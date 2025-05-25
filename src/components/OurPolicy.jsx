import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xl sm:txext-sm md:text-base text-gray-700'>
			<div className='mx-1 rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
				<img src={assets.exchange} alt='' className='w-12 m-auto mb-5' />
				<p className='font-semibold'>سياسة تبديل سلسلة</p>
				<p className='text-gray-400'>
					متوفر خدمة ترجيع البضاعة خلال فترة 7 أيام من تاريخ الشراء
				</p>
			</div>
			<div className=' rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
				<img src={assets.quality} alt='' className='w-12 m-auto mb-5' />
				<p className='font-semibold'>نتبع سياسة ترجيع البضاعة</p>
				<p className='text-gray-400'>
					متوفر خدمة ترجيع البضاعة خلال فترة 7 أيام من تاريخ الشراء
				</p>
			</div>
			<div className=' rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
				<img src={assets.support} alt='' className='w-12 m-auto mb-5' />
				<p className='font-semibold'>دعم فني متواصل للزبائن</p>
				<p className='text-gray-400'>
					أفضل خدمات للزبائن من خلال ردود مراسلات العملاء 24 ساعة في اليوم.
				</p>
			</div>
		</div>
	);
};

export default OurPolicy;
