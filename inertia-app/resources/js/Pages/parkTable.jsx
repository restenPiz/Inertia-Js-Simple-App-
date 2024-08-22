
import React from "react";
import '../src/index.css';

const columns = [
    { Name: 'Park Name', ID: 'Park Location', Total: 'Total_Capacity' },
]
const rows = [
    { Name: 'Margaret Nguyen', ID: '427311', Total: '60' },
    { Name: 'Edvard Galinski', ID: '533175', Total: '70' },
    { Name: 'Hoshi Nakamura', ID: '533175', Total: '80' },
    { Name: 'Margaret Nguyen', ID: '427311', Total: '90' },
    { Name: 'Edvard Galinski', ID: '533175', Total: '100' },
]

export default function parkTable() {
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
                {rows.map(row => (
                    <tr>
                        <th scope="col">{row.Name}</th>
                        <td scope="col">{row.ID}</td>
                        <td scope="col">{row.Total}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}