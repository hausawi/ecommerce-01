import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
	const [method, setMethod] = useState('cod');

	const { navigate } = useContext(ShopContext);

	return (
		<div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
			{/* ---------- Left Side --------- */}
			<div className=' flex flex-col gap-4 w-full sm:max-w-[480px]'>
				<div className='text-xl sm:text-2xl my-3'>
					<Title text1={'بيـــــانـــات'} text2={'الطلــب'} />
				</div>
				<div className='flex gap-3'>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='text'
						placeholder='الأسم الاول'
					/>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='text'
						placeholder='الكنية'
					/>
				</div>
				<input
					className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
					type='email'
					placeholder='البريد الالكتروني'
				/>
				<input
					className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
					type='text'
					placeholder='الشارع'
				/>
				<div className='flex gap-3'>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='text'
						placeholder='المدينة'
					/>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='text'
						placeholder='الولاية'
					/>
				</div>
				<div className='flex gap-3'>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='number'
						placeholder='الرمز البريدي'
					/>
					<input
						className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
						type='text'
						placeholder='الدولة'
					/>
				</div>
				<input
					className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
					type='number'
					placeholder='الهاتف'
					required
				/>
			</div>

			{/* ----------- Right Side ----------- */}
			<div className='mt-8'>
				<div className='nt-8 min-w-80'>
					<CartTotal />
				</div>

				<div className='mt-12'>
					<Title text1={'طريقة'} text2={'الدفــــع'} />
					{/* ------------ Payment Method Selection ------------ */}
					<div className='flex gap-3 flex-col lg:flex-row'>
						<div
							onClick={() => setMethod('stripe')}
							className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === 'stripe' ? 'bg-green-400' : ''
								}`}></p>
							<img src={assets.stripe} className='h-5 mx-4' alt='' />
						</div>
						<div
							onClick={() => setMethod('paypal')}
							className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === 'paypal' ? 'bg-green-400' : ''
								}`}></p>
							<img src={assets.paypal} className='h-5 mx-4' alt='' />
						</div>
						<div
							onClick={() => setMethod('cod')}
							className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === 'cod' ? 'bg-green-400' : ''
								}`}></p>
							<p className='text-gray-500 text-sm font-medium mx-4'>
								الدفع عند التوصـــيل
							</p>
						</div>
					</div>

					<div className='w-full text-end mt-8'>
						<button
							onClick={() => navigate('/orders')}
							className='bg-[#5BAEB7] text-white px-16 py-3 text-sm'>
							ادفع الان
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
