import React, { useState, useEffect } from 'react';
import DrawerSidebar from '../components/DrawerSidebar.js';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$49.99", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$79.99", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$99.99", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$59.99", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$89.99", img: "https://via.placeholder.com/150" },
  ]);
  const [filteredCategory, setFilteredCategory] = useState('View All');

  // Fetch products from backend (simulate with a useEffect)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = '/api/products'; // Adjust URL based on category
        if (filteredCategory && filteredCategory !== 'View All') {
          url = `/api/products?category=${encodeURIComponent(filteredCategory)}`;
        }

        const response = await fetch(url); // Replace this with real backend endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filteredCategory]);

  return (
    <div className="products-page">
      <DrawerSidebar onCategorySelect={setFilteredCategory} />
      <h1>{filteredCategory === 'View All' ? 'Our Products' : `${filteredCategory}`}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="product-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
