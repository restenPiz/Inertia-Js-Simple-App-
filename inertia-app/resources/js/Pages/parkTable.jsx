import React from "react";
import '../src/index.css';

const columns = [
    { label: 'Park Name', key: 'Park_name' },
    { label: 'Park Location', key: 'Park_location' },
    { label: 'Total Capacity', key: 'Park_capacity' },
];

export default function ParkTable({ parks, onDelete, onEdit }) {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} scope="col">{column.label}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {parks.map((park) => (
                    <tr key={park.id}>
                        <td>{park.Park_name}</td>
                        <td>{park.Park_location}</td>
                        <td>{park.Park_capacity}</td>
                        <td>
                            <button onClick={() => onEdit(park)}
                                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Edit
                            </button>
                            <button onClick={() => onDelete(park.id)}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
