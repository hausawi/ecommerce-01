import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xl sm:txext-sm md:text-base text-gray-700'>
          <div className='mx-1 rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
              <img src={assets.exchange} alt="" className='w-12 m-auto mb-5'/>
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange police We offer hassle free exchange police</p>
          </div>
          <div className=' rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
              <img src={assets.quality} alt="" className='w-12 m-auto mb-5'/>
              <p className='font-semibold'>7 Days Return Policy</p>
              <p className='text-gray-400'>We provide 7 days free return police We offer hassle free exchange police</p>
          </div>
          <div className=' rounded p-5 shadow-sm/30 shadow-md/30 shadow-xl/30 '>
              <img src={assets.support} alt="" className='w-12 m-auto mb-5'/>
              <p className='font-semibold'>Best Customer Support</p>
              <p className='text-gray-400'>We provide 24/7 customer supportWe offer hassle free exchange police</p>
          </div>
    </div>
  )
}

export default OurPolicy