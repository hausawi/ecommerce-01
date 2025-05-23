import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div
          className='flex items-center justify-between py-5 font-medium'>
          <Link to='/'><img src={assets.logo} alt='' className='w-30'/></Link>
          <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
              <NavLink className="flex flex-col items-center gap-1" to={'/'}>
                  <p>الرئيسية</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden'/>
              </NavLink><NavLink className="flex flex-col items-center gap-1" to={'/collection'}>
                  <p>المنتجات</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden'/>
              </NavLink>
              <NavLink className="flex flex-col items-center gap-1" to={'/about'}>
                  <p>نبذة عنا</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden'/>
              </NavLink>
              <NavLink className="flex flex-col items-center gap-1" to={'/contact'}>
                  <p>اتصل بنا</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden'/>
              </NavLink><NavLink className="flex flex-col items-center gap-1" to={'/platform'}>
                  <p>المنصة</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden'/>
              </NavLink>
          </ul>
          
          <div className='flex items-center gap-6'>
          {/* <div  className='group relative'>
                  <img onClick={()=>setShowSearch(true)} src={assets.lang} alt='' className='w-5 cursor-pointer' />
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                      <div className='flex flex-col gap-2 w-16 py-1 px-1 bg-[#5BAEB7] text-gray-700'>
                          <p className='cusor-pointer hover:text-black'>Eng</p>
                          <p className='cusor-pointer hover:text-black'>Ar</p>
                          <p className='cusor-pointer hover:text-black'>Hausa</p>
                      </div>
                  </div>
              </div> */}
              <img onClick={()=>setShowSearch(true)} src={assets.search} alt='' className='w-5 cursor-pointer' />
              <div className='group relative'>
                  <Link to='/login' ><img src={assets.profile} alt='' className='w-5 cursor-pointer' /></Link>
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#5BAEB7] text-gray-700'>
                          <p className='cusor-pointer hover:text-black'>الحساب </p>
                          <p className='cusor-pointer hover:text-black'>الطلبات</p>
                          <p className='cusor-pointer hover:text-black'>تسجيل الخروج</p>
                      </div>
                  </div>
              </div>
              <Link to='/cart' className='relative'>
                  <img src={assets.cart} alt='' className='w-5 min-w-5' />
                  <p className='absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-[#0046BB] text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
              </Link>
              <img onClick={()=>setVisible(true)} src={assets.menu } alt='' className='w-5 cursor-pointer sm:hidden'/>
          </div>
          {/* Sidebar Menu for small screen */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
              <div className='flex flex-col text-gray-600 '>
                  <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                      <img src={assets.dropdown} alt='' className='h-4 rotate-270' />
                      <p>Back</p>
                  </div>
                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>الرئيسية</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>المنتجات</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>نبذة عنا</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>اتصل بنا</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='https://sudanesedream.org/login'>المنصة</NavLink>
              </div>
          </div>
      </div>
)
}

export default Navbar