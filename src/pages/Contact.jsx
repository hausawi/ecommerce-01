import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
	return (
		<div>
			<div className='text-center tex-2xl pt-10 border-t'>
				<Title text1={'تواصـــــــــــل'} text2={'معنـــــا'} />
			</div>

			<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
				<img className='w-full md:max-w-[480px]' src={assets.contact} alt='' />
				<div className='flex flex-col justify-center items-start gap-6'>
					<p className='font-semibold text-xl text-gray-600'>مقر الشـــركة</p>
					<p className='text-gray-500'>
						1234 شارع الحرية <br /> عمارة 340, الخرطوم, السودان
					</p>
					<p className='text-gray-500'>
						Tel: (249) 555-777 <br /> البريد الالكتروني: hausawi@gmail.com
					</p>
					<p className='font-semibold text-xl text-gray-600'>
						فرص التوظيف لدينا
					</p>
					<p className='text-gray-500'>
						إطلع على المزيد عن الفريق العامل لدينا
					</p>
					<button className='border border-black px-8 py-4 text-sm hover:bg-[#0046BB] hover:text-white transition-all duration-500'>
						اطلع على الوظائف
					</button>
				</div>
			</div>
			<NewsLetterBox />
		</div>
	);
};

export default Contact;
