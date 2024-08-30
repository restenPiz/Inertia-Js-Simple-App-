import React, { useState } from "react";
import '../src/index.css';

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
                <div className="modal">
                    <h2>Edit Park</h2>
                    <form onSubmit={handleUpdatePark}>
                        <label>
                            Park Name:
                            <input
                                type="text"
                                value={currentPark.Park_name}
                                onChange={(e) => setCurrentPark({ ...currentPark, Park_name: e.target.value })}
                            />
                        </label>
                        <label>
                            Park Location:
                            <input
                                type="text"
                                value={currentPark.Park_location}
                                onChange={(e) => setCurrentPark({ ...currentPark, Park_location: e.target.value })}
                            />
                        </label>
                        <label>
                            Total Capacity:
                            <input
                                type="number"
                                value={currentPark.Park_capacity}
                                onChange={(e) => setCurrentPark({ ...currentPark, Park_capacity: e.target.value })}
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    <button onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            )}
        </>
    );
}
