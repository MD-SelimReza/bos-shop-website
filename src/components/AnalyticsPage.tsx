import React from 'react';
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <div className="p-4 bg-blue-100 rounded-full mr-4 text-blue-600">
            <FaUsers size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold">12,450</h2>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <div className="p-4 bg-green-100 rounded-full mr-4 text-green-600">
            <FaShoppingCart size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <h2 className="text-2xl font-bold">3,876</h2>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <div className="p-4 bg-yellow-100 rounded-full mr-4 text-yellow-600">
            <FaDollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">$96,740</h2>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <div className="p-4 bg-purple-100 rounded-full mr-4 text-purple-600">
            <FaChartLine size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-2xl font-bold">980</h2>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h3>
          <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            {/* Placeholder for chart */}
            Sales Chart Placeholder
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center text-sm">
              <span>John Doe purchased &quot;Shoes&quot;</span>
              <span className="text-gray-400 text-xs">5 mins ago</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span>Jane Smith registered</span>
              <span className="text-gray-400 text-xs">20 mins ago</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span>New Order #4567</span>
              <span className="text-gray-400 text-xs">1 hour ago</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span>Mark commented on a product</span>
              <span className="text-gray-400 text-xs">2 hours ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © 2025 Your E-Commerce Dashboard
      </div>
    </div>
  );
};

export default AnalyticsPage;
