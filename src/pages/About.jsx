import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Aboute = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id, velit consequuntur eos sapiente voluptatem corrupti saepe consequatur repellat aliquid, incidunt maxime nulla ipsam iusto fugit. Officia architecto officiis recusandae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id, velit consequuntur eos sapiente voluptatem corrupti saepe consequatur repellat aliquid, incidunt maxime nulla ipsam iusto fugit. Officia architecto officiis recusandae?</p>
          <b>Our Goals</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem, iusto dolor maiores modi eligendi quod fugit asperiores id quis.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur maiores quisquam asperiores repudiandae laudantium ab repellendus accusantium rem nemo optio.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur maiores quisquam asperiores repudiandae laudantium ab repellendus accusantium rem nemo optio.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur maiores quisquam asperiores repudiandae laudantium ab repellendus accusantium rem nemo optio.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Aboute