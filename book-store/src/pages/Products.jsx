// src/Products.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your Node.js server
    axios
      .get("http://localhost:5000/api/get-products") // Use /api/get-products instead of /products
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className=" text-white p-10 h-screen">
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;
