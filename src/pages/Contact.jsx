import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center tex-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Story</p>
          <p className='text-gray-500'>1234 Alhuria Station <br /> Suite 340, Khartoum, Sudan</p>
          <p className='text-gray-500'>Tel: (249) 555-777 <br /> Email: hausawi@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Hausawi</p>
          <p className='text-gray-500'>Learn More About our Teams and Job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-[#0046BB] hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact