import React from 'react';
import { FiDollarSign, FiPackage, FiShoppingBag, FiUsers } from 'react-icons/fi';

const page = () => {
    return (
        <div className="space-y-6 flex-1 pt-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
                    <FiShoppingBag className="text-4xl text-indigo-600" />
                    <div>
                        <p className="text-sm text-gray-500">Orders</p>
                        <p className="text-xl font-semibold text-gray-800">1,245</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
                    <FiDollarSign className="text-4xl text-green-500" />
                    <div>
                        <p className="text-sm text-gray-500">Revenue</p>
                        <p className="text-xl font-semibold text-gray-800">$58,450</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
                    <FiUsers className="text-4xl text-yellow-500" />
                    <div>
                        <p className="text-sm text-gray-500">Customers</p>
                        <p className="text-xl font-semibold text-gray-800">3,200</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
                    <FiPackage className="text-4xl text-purple-500" />
                    <div>
                        <p className="text-sm text-gray-500">Products</p>
                        <p className="text-xl font-semibold text-gray-800">520</p>
                    </div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-xl shadow p-6 max-w-[calc(100vw-32px)]">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-600 ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Order ID</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-3">#ORD001</td>
                                <td className="px-4 py-3">John Doe</td>
                                <td className="px-4 py-3">Mar 16, 2024</td>
                                <td className="px-4 py-3">
                                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                                    Completed
                                </span>
                                </td>
                                <td className="px-4 py-3">$250.00</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">#ORD002</td>
                                <td className="px-4 py-3">Alice Smith</td>
                                <td className="px-4 py-3">Mar 15, 2024</td>
                                <td className="px-4 py-3">
                                <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded">
                                    Pending
                                </span>
                                </td>
                                <td className="px-4 py-3">$120.00</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">#ORD003</td>
                                <td className="px-4 py-3">Bob Johnson</td>
                                <td className="px-4 py-3">Mar 14, 2024</td>
                                <td className="px-4 py-3">
                                <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded">
                                    Canceled
                                </span>
                                </td>
                                <td className="px-4 py-3">$75.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sales Overview */}
            <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
                <p className="text-sm text-gray-500">
                You can integrate a chart here using Recharts or Chart.js
                </p>
                <div className="h-48 flex items-center justify-center text-gray-400 border-dashed border-2 border-gray-300 rounded-lg mt-4">
                [ Chart Placeholder ]
                </div>
            </div>
        </div>
    );
};

export default page;