import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
	const { productId } = useParams();
	const { products, currency, addToCart } = useContext(ShopContext);
	const [productData, setProductData] = useState(false);
	const [image, setImage] = useState('');
	const [size, setSize] = useState('');

	const fetchProductData = async () => {
		products.map((item) => {
			if (item._id === productId) {
				setProductData(item);
				setImage(item.image[0]);
				return null;
			}
		});
	};

	useEffect(() => {
		fetchProductData();
	}, [productId, products]);

	return productData ? (
		<div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
			{/* Product Data */}
			<div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
				{/* Product Images */}
				<div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
					<div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:juctify-normal sm:w-[18.7%] w-full '>
						{productData.image.map((item, index) => (
							<img
								onClick={() => setImage(item)}
								src={item}
								key={index}
								alt=''
								className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
							/>
						))}
					</div>
					<div className='w-full sm:w-[80%]'>
						<img className='w-full h-auto' src={image} alt='' />
					</div>
				</div>
				{/* ----------Product Info ----------- */}
				<div className='flex-1'>
					<h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
					<div className='flex items-center gap-1 mt-2'>
						<img src={assets.star} alt='' className='w-3 5' />
						<img src={assets.star} alt='' className='w-3 5' />
						<img src={assets.star} alt='' className='w-3 5' />
						<img src={assets.star} alt='' className='w-3 5' />
						<img src={assets.star_dull} alt='' className='w-3 5' />
						<p className='pl-2'>(123)</p>
					</div>
					<p className='mt-5 text-3xl font-medium'>
						{currency}
						{productData.price}
					</p>
					<p className='mt-5 text-gray-500 md:w-4/5'>
						{productData.description}
					</p>
					<div className='flex flex-col gap-4 my-8'>
						<p>أختيار نوع</p>
						<div className='flex -gap-2'>
							{productData.size.map((item, index) => (
								<button
									onClick={() => setSize(item)}
									className={`border-0 py-2 px-3 mx-[0.5px] bg-gray-100 ${
										item === size ? 'bg-yellow-300' : ''
									}`}
									key={index}>
									{item}
								</button>
							))}
						</div>
					</div>
					<button
						onClick={() => addToCart(productData._id, size)}
						className='bg-yellow-300 text-white px-8 py-3 text-sm active:bg-[#5BAEB7]'>
						ضع في الســلة
					</button>
					<hr className='mt-8 sm:w-4/5' />
					<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
						<p>بضاعة اصلية 100%.</p>
						<p>متوفر خدمة دفع عند الاستلام لهذا المنتج</p>
						<p>خدمة ترجيع البضاعة او تبديل البضاعة.</p>
					</div>
				</div>
			</div>
			{/* ----------Description & Review Section----------- */}
			<div className='mt-20'>
				<div className='flex'>
					<b className='border px-5 py-3 text-sm'>الوصـــف</b>
					<p className='border px-5 py-3 text-sm'>زيارة المنتج (122)</p>
				</div>
				<div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
					<p>
						شاشة LCD أو LED رقيقة مثبتة داخل الغطاء العلوي / لوحة مفاتيح أبجدية
						رقمية داخل الغطاء السفلي/ مكبرات الصوت توفر صوتًا مدمجًا/منافذ USB،
						منفذ HDMI، منفذ إيثرنت (في بعض الأحيان)، قارئ بطاقات ذاكرة، وأحيانًا
						قارئ بصمات الأصابع. بطارية توفر إمكانية العمل بشكل مستقل عن مصدر
						الطاقة / وزن يعتبر خفيفًا مقارنة بالكمبيوتر المكتبي. المميزات: سهولة
						النقل يمكن حمل اللابتوب ونقله بسهولة إلى أماكن مختلفة. سهولة
						الاستخدام تصميم "كل في واحد" يجعل اللابتوب سهل الاستخدام في أي مكان
						/ استهلاك منخفض للطاقة / يعمل اللابتوب بالبطارية، مما يجعله أقل
						استهلاكًا للطاقة من الكمبيوتر المكتبي.
					</p>
					<p>
						ستخدامات جهاز اللابتوب: يستخدم اللابتوب في مختلف مجالات العمل، مثل
						كتابة النصوص، إعداد العروض التقديمية، تحليل البيانات، تصميم
						الجرافيك، وما إلى ذلك. يستخدم اللابتوب في مشاهدة الأفلام، الاستماع
						إلى الموسيقى، لعب الألعاب، والوصول إلى الإنترنت. يستخدم اللابتوب في
						الدراسة، مثل البحث عن المعلومات، كتابة الأوراق البحثية، وتقديم
						العروض التقديمية. يستخدم اللابتوب في التواصل مع الآخرين، مثل التواصل
						عبر الإنترنت، واستخدام برامج المراسلة الفورية
					</p>
				</div>
			</div>

			{/* --------- Display Related Products--------- */}
			<RelatedProducts
				category={productData.category}
				subCategory={productData.subCategory}
			/>
		</div>
	) : (
		<div className='opacity-0'></div>
	);
};

export default Product;
