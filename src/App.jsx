
import './App.css'
import CartPage from './components/cartPage/CartPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Test from './components/productPage/FilterProduct';
import FilterProduct from './components/productPage/FilterProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AboutUs from './components/pages/AboutUs';

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/filter" element={<FilterProduct />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productDetails/:Id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
