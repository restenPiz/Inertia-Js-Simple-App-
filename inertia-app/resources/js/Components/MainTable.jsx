
import React from "react";
import '../src/index.css';

const columns = [
    { Name: 'Nome', ID: 'ID', Member: 'Membership', Balance: 'Balance' },
]
const rows = [
    { Name: 'Margaret Nguyen', ID: '427311', Member: 'June 3, 2010', Balance: 'n/a<' },
    { Name: 'Edvard Galinski', ID: '533175', Member: 'January 13, 2011</time>', Balance: '37.00' },
    { Name: 'Hoshi Nakamura', ID: '533175', Member: 'January 13, 2011</time>', Balance: '15.00' },
]

export default function MainTable() {
    return (
        <table className="styled-table">
            <thead>
                {columns.map(column => (
                    <tr>
                        <th scope="col" rowSpan="2">{column.Name}</th>
                        <th scope="col" rowSpan="2">{column.ID}</th>
                        <th scope="col" colSpan="2"><time dateTime="2010-06-03">{column.Member}</time></th>
                        <th scope="col" rowSpan="2">{column.Balance}</th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr>
                        <th scope="row">{row.Name}</th>
                        <td>{row.ID}</td>
                        <td><time dateTime="2012-07-23">{row.Member}</time></td>
                        <td>{row.Balance}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}