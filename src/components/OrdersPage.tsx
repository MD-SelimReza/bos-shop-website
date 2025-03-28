import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const OrdersPage = () => {
  const orders = [
    {
      id: 'ORD-1001',
      customer: 'John Doe',
      date: '2025-03-18',
      amount: '$120.00',
      status: 'Delivered',
    },
    {
      id: 'ORD-1002',
      customer: 'Jane Smith',
      date: '2025-03-17',
      amount: '$75.50',
      status: 'Pending',
    },
    {
      id: 'ORD-1003',
      customer: 'Michael Johnson',
      date: '2025-03-16',
      amount: '$220.00',
      status: 'Cancelled',
    },
    {
      id: 'ORD-1004',
      customer: 'Emily Brown',
      date: '2025-03-15',
      amount: '$90.00',
      status: 'Shipped',
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-100';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'Cancelled':
        return 'text-red-600 bg-red-100';
      case 'Shipped':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-72px)]">
      <h1 className="text-3xl sticky top-[72px] font-bold bg-gray-100 py-4 text-gray-800">Orders</h1>

      <div className="bg-white rounded-xl p-4 overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Date</th>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-3 font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-y hover:bg-gray-50">
                <td className="px-4 py-4">{order.id}</td>
                <td className="px-4 py-4">{order.customer}</td>
                <td className="px-4 py-4">{order.date}</td>
                <td className="px-4 py-4">{order.amount}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 flex items-center space-x-2 text-gray-600">
                  <button className="hover:text-blue-600">
                    <FaEye />
                  </button>
                  <button className="hover:text-green-600">
                    <FaEdit />
                  </button>
                  <button className="hover:text-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
