
import React from "react";
import '../src/index.css';

const columns = [
    { Name: 'Park Name', ID: 'Park Location', Total: 'Total_Capacity' },
]

export default function ParkTable({ parks, onDelete }) {
    return (
        <table className="styled-table">
            <thead>
                {columns.map(column => (
                    <tr>
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
                            <button onClick={() => handleEdit(park.id)}
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
        </table >
    );
}