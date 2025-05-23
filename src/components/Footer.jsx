import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
      <div >
          <div className='  flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 text-sm'>
              <NavLink to={'/'}>
                  <div className='bg-white'>
                      <img src={assets.logo} alt="" className='mb-5 w-32' />
                  <p className='w-full md:w-2/3 text-gray-600'>متجر حلم السودانيين موقع ويب يتيح للمستخدمين تصفح المنتجات والخدمات وشرائها عبر الإنترنت
متجر بمواصفات تقليدية يعمل في بيئة رقمية، مما يسمح للعملاء بالتسوق من أي مكان وفي أي وقت.
يتميز المتجر الإلكتروني بسهولة الوصول إليه، وتوفير مجموعة واسعة من المنتجات، وتقديم تجربة تسوق مريحة.
</p>
              </div></NavLink>
              <div>
                  <p className='text-xl font-medium mb-5'>الشركة</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>الرئيسية</li>
                      <li> نبذة عنا</li>
                      <li>التوصيل</li>
                      <li>سياسة الخصوصية </li>
                  </ul>
              </div>
              <div>
                  <p className='text-xl font-medium mb-5'>تواصل معنا</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>00218-91-285-8198</li>
                      <li>sudanese-dream@gmail.com</li>
                  </ul>
              </div>
          </div>
          <div>
              <hr />
              <p className='py-5 text-sm text-center'>حقوق الطبع - 2025 hmo-hausawi.com - كل الحقوق محفوظة</p>
          </div>
    </div>
  )
}

export default Footer