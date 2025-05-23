import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
      <div className='w-full'>
          <div className='text-2xl'>
              <Title text1={'إجمـــــالي'} text2={'ما في السلة'}/>
          </div>

          <div className='flex flex-col gap-2 text-sm'>
              <div className='flext justify-between'>
                  <p>الاجمالي</p>
                  <p>{currency}{getCartAmount()}.00</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                  <p>ثمن التوصيل</p>
                  <p>{currency} {delivery_fee}.00</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                  <b>الأجمالي الكلي</b>
                  <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
                  
              </div>
          </div>
    </div>
  )
}

export default CartTotal