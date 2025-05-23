import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800 '>اشترك الآن و احصل على 20% تخفيض</p>
          <p className='text-gray-400 mt-3'>
          يتميز المتجر بسهولة الوصول إليه، وتوفير مجموعة واسعة من المنتجات، وتقديم تجربة تسوق مريحة.
          </p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-0'>
              <input className='w-full sm:flex-1 outline-none px-2' type="email" placeholder='البريد الألكتروني' />
              <button type='submit' className='bg-[#0046BB] text-white text-xs mx-0 px-10 py-4'>للأشتراك</button>
          </form>
    </div>
  )
}

export default NewsLetterBox