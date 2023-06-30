import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Assuming the CSS file is in the same directory

const  Dashboard=()=> {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jumjibackend.onrender.com/getdashboard');
      const data = await response.json();
      setSalesData(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container">
      {salesData.length > 0 ? (
        salesData.map((entry) => (
          <div key={entry._id}>
            <h2>Date: {new Date(entry.date).toLocaleDateString()}</h2>
            <p>Sales: {entry.sales}</p>
            <p>Orders: {entry.orders}</p>
            <p>Items: {entry.items}</p>
            <p>Returns: {entry.returns}</p>
            <p>Ads: {entry.ads}</p>
            <p>Amazon Fees: {entry.amz_fees}</p>
            <p>Promo: {entry.promo}</p>
            <p>Giftwrap: {entry.giftwrap}</p>
            <p>Shipping: {entry.shipping}</p>
            <p>VAT: {entry.vat}</p>
            <p>Payout: {entry.payout}</p>
            <p>Cost of Goods: {entry.cost_goods}</p>
            <p>Gross Profit: {entry.gross_profit}</p>
            <p>Net Profit: {entry.net_profit}</p>
            <p>Margin: {entry.margin}</p>
            <p>ROI: {entry.ROI}</p>

            {entry.stock && (
              <div>
                <p>Stock:</p>
                <ul>
                  {entry.stock.map((item) => (
                    <li key={item._id}>
                       {item.warehouse}, Stock: {item.stock}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.supplier_orders && (
              <div>
                <p>Supplier Orders:</p>
                <ul>
                  {entry.supplier_orders.map((order) => (
                    <li key={order._id}>
                       {order.supplier}, Quantity: {order.qty}, Days: {order.days}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.products && (
              <div>
                <p>Products:</p>
                <ul>
                  {entry.products.map((product) => (
                    <li key={product._id} className="product-item">
                      <ul>
                        <li>Item ID: {product.item_id}</li>
                        <li>Price: {product.price}</li>
                        <li>Quantity: {product.qty}</li>
                        <li>Ads: {product.ads}</li>
                        <li>Amazon Fees: {product.amz_fees}</li>
                        <li>Shipping: {product.shipping}</li>
                        <li>Promo: {product.promo}</li>
                        <li>Giftwrap: {product.giftwrap}</li>
                        <li>VAT: {product.vat}</li>
                        <li>Margin: {product.margin}</li>
                        <li>Payout: {product.payout}</li>
                        <li>Cost: {product.cost}</li>
                        <li>Profit: {product.profit}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="loading">Loading data...</p>
      )}
    </div>
  );
}

export default Dashboard;
