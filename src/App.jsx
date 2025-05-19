import { Route, Routes } from "react-router-dom"
import { Home }from '../../react-ecommerce-01/src/pages/Home'
import Collection from "../../react-ecommerce-01/src/pages/Collection"
import Aboute from "../../react-ecommerce-01/src/pages/About"
import Contact from "../../react-ecommerce-01/src/pages/Contact"
import Product from "../../react-ecommerce-01/src/pages/Product"
import Cart from "../../react-ecommerce-01/src/pages/Cart"
import Login from "../../react-ecommerce-01/src/pages/Login"
import PlaceOrder from "../../react-ecommerce-01/src/pages/PlaceOrder"
import Orders from "../../react-ecommerce-01/src/pages/Orders"
import Navbar from "../../react-ecommerce-01/src/components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh]" >

      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
