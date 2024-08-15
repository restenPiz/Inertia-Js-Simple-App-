
import React from "react";
import '../src/index.css';

const columns = [
    { Name: 'Park Name', ID: 'Park Location' },
]
const rows = [
    { Name: 'Margaret Nguyen', ID: '427311', },
    { Name: 'Edvard Galinski', ID: '533175', },
    { Name: 'Hoshi Nakamura', ID: '533175', },
    { Name: 'Margaret Nguyen', ID: '427311', },
    { Name: 'Edvard Galinski', ID: '533175', },
]

export default function parkTable() {
    return (
        <table className="styled-table">
            <thead>
                {columns.map(column => (
                    <tr>
                        <th scope="col" rowSpan="2">{column.Name}</th>
                        <th scope="col" rowSpan="2">{column.ID}</th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr>
                        <th scope="col">{row.Name}</th>
                        <td scope="col">{row.ID}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}