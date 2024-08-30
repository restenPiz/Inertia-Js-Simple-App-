import React, { useState } from "react";
import '../src/index.css';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const columns = [
    { Name: 'Park Name', ID: 'Park Location', Total: 'Total_Capacity' },
];

export default function ParkTable({ parks, onDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPark, setCurrentPark] = useState(null);

    function handleEdit(park) {
        setCurrentPark(park);
        setIsModalOpen(true);
    }

    function handleUpdatePark(id) {
        if (confirm("Are you sure you want to update this datas?")) {
            Inertia.post(`/parkUpdate/${currentPark.id}`, {
                Park_name: currentPark.Park_name,
                Park_location: currentPark.Park_location,
                Park_capacity: currentPark.Park_capacity,
            });
        }
    }

    return (
        <>
            <table className="styled-table">
                <thead>
                    {columns.map(column => (
                        <tr key={column.Name}>
                            <th scope="col" rowSpan="2">{column.Name}</th>
                            <th scope="col" rowSpan="2">{column.ID}</th>
                            <th scope="col" rowSpan="2">{column.Total}</th>
                            <th>Actions</th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {parks.map((park) => (
                        <tr key={park.id}>
                            <td>{park.Park_name}</td>
                            <td>{park.Park_location}</td>
                            <td>{park.Park_capacity}</td>
                            <td>
                                <button
                                    onClick={() => handleEdit(park)}
                                    className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(park.id)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
                            >
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                                                Edit Park
                                            </DialogTitle>
                                            <div className="mt-2">
                                                <form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleUpdatePark();
                                                }} className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Park Name
                                                            <input
                                                                type="text"
                                                                value={currentPark?.Park_name || ''}
                                                                onChange={(e) => setCurrentPark({ ...currentPark, Park_name: e.target.value })}
                                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Park Location
                                                            <input
                                                                type="text"
                                                                value={currentPark?.Park_location || ''}
                                                                onChange={(e) => setCurrentPark({ ...currentPark, Park_location: e.target.value })}
                                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Total Capacity
                                                            <input
                                                                type="number"
                                                                value={currentPark?.Park_capacity || ''}
                                                                onChange={(e) => setCurrentPark({ ...currentPark, Park_capacity: e.target.value })}
                                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setIsModalOpen(false)}
                                                            className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 sm:w-auto"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    );
}
