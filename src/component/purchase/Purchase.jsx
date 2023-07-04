import React, { useEffect, useState } from 'react';
import './Purchase.css';

const PurchaseDetails = () => {
  const [purchaseData, setPurchaseData] = useState(null);

  useEffect(() => {
    fetch('https://jumjibackend.onrender.com/getpurchase')
      .then(response => response.json())
      .then(data => setPurchaseData(data.data[0]))
      .catch(error => console.log(error));
  }, []);

  if (!purchaseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="purchase-details">
      <h2 className="order-id">Purchase ID : {purchaseData._id}</h2>
      <p className="supplier-id">Supplier ID: {purchaseData.supplier_id}</p>
      

      <h3 className="items-title">Items</h3>
      {purchaseData.Items && purchaseData.Items.length > 0 ? (
        <ul className="items-list">
          {purchaseData.Items.map((item, index) => (
            <li key={index} className="item">
              <p>Product ID: {item.product_id}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Expected Date: {item.exp_date}</p>
              <p>Received Date: {item.recevied_date}</p>
              <p>Received Quantity: {item.recevied_quantity}</p>
              <p>Warehouse: {item.warehouse}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
      <p className="transport-cost">Transport Cost: {purchaseData.transport_cost}</p>
      <p className="shipping-agent">Shipping Agent: {purchaseData.shipping_agent}</p>
      
      <p className="agent-mobile">Agent Mobile: {purchaseData.agent_mobile}</p>
      <p className="received">Received: {purchaseData.recevied ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default PurchaseDetails;
