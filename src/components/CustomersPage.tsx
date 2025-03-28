"use client";

import Image from "next/image";
import React from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  image: string;
}

const customersData: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Inactive",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const CustomersPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto space-y-6">
        {/* Page Header */}
        <div className="sticky top-[72px] z-10 bg-gray-100 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Customers</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Add Customer
          </button>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="flex items-center gap-4 px-6 py-4 whitespace-nowrap">
                    <div className="relative w-10 h-10 aspect-square">
                      <Image
                        src={customer.image}
                        alt={customer.name}
                        layout="fill"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{customer.name}</div>
                      <div className="text-gray-500 text-xs">ID: #{customer.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button className="p-2 bg-gray-100 hover:bg-indigo-100 rounded-full">
                      <FiEye className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-yellow-100 rounded-full">
                      <FiEdit className="text-yellow-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-red-100 rounded-full">
                      <FiTrash className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* If no customers */}
          {customersData.length === 0 && (
            <div className="p-6 text-center text-gray-500">No customers found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
