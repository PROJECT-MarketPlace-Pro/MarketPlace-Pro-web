import React from 'react';
import data from './data';

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Order Fulfillment</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>SHIPPED</th>
              <th>SHIPPED AT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr
                key={order._id}
                className={!order.isShipped ? 'unshipped-row' : ''}
              >
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.user.name}</td>
                <td>{order.isShipped ? 'Yes' : 'No'}</td>
                <td>{order.shippedAt ? order.shippedAt : 'Pending'}</td>
                <td>
                  <span
                    className={
                      order.isShipped ? 'status-shipped' : 'status-unshipped'
                    }
                  >
                    {order.isShipped ? 'Shipped' : 'Unshipped'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;