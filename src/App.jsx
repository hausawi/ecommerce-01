import { Route, Routes } from 'react-router-dom';
import { Home } from '../src/pages/Home'
import Collection from '..//src/pages/Collection';
import Aboute from '..//src/pages/About';
import Contact from '..//src/pages/Contact';
import Product from '..//src/pages/Product';
import Cart from '..//src/pages/Cart';
import Login from '..//src/pages/Login';
import PlaceOrder from '..//src/pages/PlaceOrder';
import Orders from '..//src/pages/Orders';
import Navbar from '..//src/components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh]'>
			<ToastContainer />

			<Navbar />
			<SearchBar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/collection' element={<Collection />} />
				<Route path='/about' element={<Aboute />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/product/:productId' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path='/orders' element={<Orders />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
