import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product details based on the ID
  useEffect(() => {
    // Replace this with your actual data source (e.g., an API)
    const products = [
      { id: 1, name: 'Product 1', price: '$20.00', description: 'This is product 1.', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: '$30.00', description: 'This is product 2.', image: 'https://via.placeholder.com/150' },
    ];

    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900">{product.price}</p>
          <button
            onClick={() => alert('Added to cart!')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;