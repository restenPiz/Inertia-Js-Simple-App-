import React, { useState } from "react";
import '../src/index.css';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

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

    function handleUpdatePark(event) {
        event.preventDefault();
        setIsModalOpen(false);
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
                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Deactivate account
                                            </DialogTitle>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                                    This action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        data-autofocus
                                        onClick={() => setOpen(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
                // <div className="modal">
                //     <h2>Edit Park</h2>
                //     <form onSubmit={handleUpdatePark}>
                //         <label>
                //             Park Name:
                //             <input
                //                 type="text"
                //                 value={currentPark.Park_name}
                //                 onChange={(e) => setCurrentPark({ ...currentPark, Park_name: e.target.value })}
                //             />
                //         </label>
                //         <label>
                //             Park Location:
                //             <input
                //                 type="text"
                //                 value={currentPark.Park_location}
                //                 onChange={(e) => setCurrentPark({ ...currentPark, Park_location: e.target.value })}
                //             />
                //         </label>
                //         <label>
                //             Total Capacity:
                //             <input
                //                 type="number"
                //                 value={currentPark.Park_capacity}
                //                 onChange={(e) => setCurrentPark({ ...currentPark, Park_capacity: e.target.value })}
                //             />
                //         </label>
                //         <button type="submit">Save</button>
                //     </form>
                //     <button onClick={() => setIsModalOpen(false)}>Close</button>
                // </div>
            )}
        </>
    );
}
