import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    fetch('https://jumjibackend.onrender.com/items')
      .then((response) => response.json())
      .then((data) => setOrderData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
      {orderData ? (
        orderData.map((order, orderIndex) => (
          <div key={orderIndex}>
            <h2>Order Number: {order.order_number}</h2>
            <h3>Order Value: ${order.order_value}</h3>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h5>Item {itemIndex + 1}</h5>
                  <p>Item Code: {item.item_code}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                  <p>Ads: ${item.ads}</p>
                  <p>Amazon Fee: ${item.amzfee}</p>
                  <p>VAT: ${item.vat}</p>
                  <p>Payout: ${item.payout}</p>
                  <p>Profit: ${item.profit}</p>
                  <p>Margin: {item.margin}</p>
                  <p>ROI: {item.roi}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard