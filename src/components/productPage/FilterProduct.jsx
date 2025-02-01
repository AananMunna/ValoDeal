import React, { useState } from "react";

const FilterProduct = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceFrom: 0,
    priceTo: 5700,
    inStock: true,
  });

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Organic Honey", category: "Honey", price: 1500, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/WhatsAppImage2025-01-12at6.51.00PM.jpg?v=1736686474&width=533" },
    { id: 2, name: "Sarisha Oil", category: "Sarisha Oil", price: 900, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/mastraid-oil-5-leter.jpg?v=1710309093&width=360" },
    { id: 3, name: "Pure Ghee", category: "Ghee", price: 1800, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360" },
    { id: 4, name: "Dates", category: "Dates", price: 1200, inStock: false, image: "https://ghorerbazar.com/cdn/shop/files/Medium_Single_01_copy_1_586e7d00-4cf7-4a62-b9ed-48171da76f29.jpg?v=1720870736&width=360" },
    { id: 5, name: "Masala Mix", category: "Masala", price: 500, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/akroat-03_336fcd32-d311-4d2c-b87c-9b81a1dea9f2.jpg?v=1714455003&width=533" },
    { id: 6, name: "Organic Oil", category: "Organic Oil", price: 2300, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/mastraid-oil-1-leter.jpg?v=1710309112&width=533" },
    { id: 7, name: "Almonds", category: "Nuts & Seeds", price: 1600, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/new-oraganic-chia-seeds_1_d2cea6b7-8b0f-44ac-8c64-89cc04d9a937.jpg?v=1727612055&width=533" },
    { id: 8, name: "Green Tea", category: "Tea/Coffee", price: 450, inStock: true, image: "https://ghorerbazar.com/cdn/shop/files/tea-1kg.png?v=1730104547&width=360" },
  ];

  const filteredProducts = products.filter((product) => {
    const inPriceRange =
      product.price >= filters.priceFrom && product.price <= filters.priceTo;
    const inStock = filters.inStock ? product.inStock : true;
    const matchesCategory =
      filters.category ? product.category === filters.category : true;

    return inPriceRange && inStock && matchesCategory;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto p-8 flex flex-wrap md:flex-nowrap gap-5">
        {/* Filters Sidebar */}
        <div className="filters w-full sm:w-1/4 bg-gray-200 p-4 rounded-md mb-6 sm:mb-0">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div>
            <h3>Category</h3>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md"
            >
              <option value="">All Categories</option>
              <option value="Sarisha Oil">Sarisha Oil</option>
              <option value="Ghee">Ghee</option>
              <option value="Dates">Dates</option>
              <option value="Honey">Honey</option>
              <option value="Masala">Masala</option>
              <option value="Organic Oil">Organic Oil</option>
              <option value="Nuts & Seeds">Nuts & Seeds</option>
              <option value="Tea/Coffee">Tea/Coffee</option>
            </select>
          </div>

          <div>
            <h3>Price</h3>
            <input
              type="number"
              name="priceFrom"
              value={filters.priceFrom}
              onChange={handleFilterChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md"
              placeholder="From৳"
            />
            <input
              type="number"
              name="priceTo"
              value={filters.priceTo}
              onChange={handleFilterChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md"
              placeholder="To৳"
            />
          </div>

          <div>
            <h3>Stock</h3>
            <select
              name="inStock"
              value={filters.inStock}
              onChange={handleFilterChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md"
            >
              <option value={true}>In Stock</option>
              <option value={false}>Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Featured Products & Offer Section */}
        <div className="products w-full sm:w-3/4">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card p-4 bg-white shadow rounded-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-lg text-gray-700">Tk {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Offers</h2>
          <div className="offers bg-gray-100 p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">Special Offer on Ghee!</h3>
            <p>Get 20% off on Ghee products. Limited time offer!</p>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart w-full mt-8 bg-gray-100 p-6 rounded-md shadow">
        <h2 className="text-2xl font-bold">Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="text-lg text-gray-700">
              {product.name} - Tk {product.price}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 font-semibold">
          Total: Tk {cart.reduce((total, product) => total + product.price, 0)}
        </h3>
      </div>

      {/* Modal for Add to Cart */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold">
              {selectedProduct.name} has been added to your cart!
            </h3>
            <button
              onClick={closeModal}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterProduct;
