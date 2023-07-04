import React, { useEffect, useState } from 'react';
import './Product.css'; // Import the CSS file

const ProductData = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://jumjibackend.onrender.com/getproduct');
        const data = await response.json();
        setProductData(data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);
  
 

  return (
    <div className="product-data-container">
      <h2>Product Data</h2>
      {productData.map((product) => (
        <div key={product._id} className="product-container">
          <h3>{product.product_name}</h3>
          <p>Short Name: {product.short_name}</p>
          {/* <p>Supplier ID: {product.supplier_id}</p> */}
          <p>ASIN: {product.asin}</p>
          <p>Price: {product.price}</p>
          <p>Cost: {product.cost}</p>
          <h4>Stock</h4>
          {product.stock.map((stockItem) => (
            <div key={stockItem._id} className="stock-item">
              <p>Location: {stockItem.location}</p>
              <p>Stock: {stockItem.stock}</p>
              <p>Days: {stockItem.days}</p>
            </div>
          ))}
          <h4>Supplier Order</h4>
          {product.supplier_order.map((supplierOrder) => (
            <div key={supplierOrder._id} className="supplier-order">
              <p>Supplier: {supplierOrder.supplier}</p>
              <p>Qty: {supplierOrder.qty}</p>
              <p>Days: {supplierOrder.days}</p>
            </div>
          ))}
          <p>Date: {product.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductData;
