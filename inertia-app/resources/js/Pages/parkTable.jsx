
import React from "react";
import '../src/index.css';

const columns = [
    { Name: 'Park Name', ID: 'Park Location', Total: 'Total_Capacity' },
]

export default function ParkTable({ parks }) {
    return (
        <table className="styled-table">
            <thead>
                {columns.map(column => (
                    <tr>
                        <th scope="col" rowSpan="2">{column.Name}</th>
                        <th scope="col" rowSpan="2">{column.ID}</th>
                        <th scope="col" rowSpan="2">{column.Total}</th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {parks.map((park) => (
                    <tr key={park.id}>
                        <td>{park.Park_name}</td>
                        <td>{park.Park_location}</td>
                        <td>{park.Park_capacity}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}