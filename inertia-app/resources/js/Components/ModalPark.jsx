import React, { useState } from "react";

export default function ModalPark({ isOpen, onClose, park, onSave }) {
    const [formData, setFormData] = useState({
        Park_name: park.Park_name,
        Park_location: park.Park_location,
        Park_capacity: park.Park_capacity,
    });

    if (!isOpen) return null;

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(formData);
        onClose(); // Fechar o modal após salvar
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Park</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Park Name</label>
                        <input
                            type="text"
                            name="Park_name"
                            value={formData.Park_name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Park Location</label>
                        <input
                            type="text"
                            name="Park_location"
                            value={formData.Park_location}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Total Capacity</label>
                        <input
                            type="text"
                            name="Park_capacity"
                            value={formData.Park_capacity}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
