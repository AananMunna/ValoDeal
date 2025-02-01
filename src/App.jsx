
import './App.css'
import CartPage from './components/cartPage/CartPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Test from './components/productPage/FilterProduct';
import FilterProduct from './components/productPage/FilterProduct';

function App() {

  return (
    <>
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/filter" element={<FilterProduct />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
