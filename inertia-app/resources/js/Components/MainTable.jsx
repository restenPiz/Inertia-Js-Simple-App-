
import React from "react";
// import '../src/index.css';
import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import 'datatables.net';
const columns = [
    { Name: 'Truck Name', ID: 'Truck Weight', Member: 'Driver Name', Park: 'Park Location' },
]
const rows = [
    { Name: 'Margaret Nguyen', ID: '427311', Member: 'June 3, 2010', Park: 'Manica' },
    { Name: 'Edvard Galinski', ID: '533175', Member: 'January 13, 2011', Park: 'Sofala' },
    { Name: 'Hoshi Nakamura', ID: '533175', Member: 'January 13, 2011', Park: 'Zambezia' },
    { Name: 'Margaret Nguyen', ID: '427311', Member: 'June 3, 2010', Park: 'Tete' },
    { Name: 'Edvard Galinski', ID: '533175', Member: 'January 13, 2011', Park: 'Nampula' },
]

export default function MainTable() {

    useEffect(() => {
        // Inicializar DataTables após a renderização do componente
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }, []);

    return (
        <table id="example" className="display">
            <thead>
                {columns.map(column => (
                    <tr>
                        <th scope="col" rowSpan="2">{column.Name}</th>
                        <th scope="col" rowSpan="2">{column.ID}</th>
                        <th scope="col" colSpan="2">{column.Member}</th>
                        <th scope="col" rowSpan="2">{column.Name}</th>
                        <th scope="col" rowSpan="2">{column.ID}</th>
                        <th scope="col" colSpan="2">{column.Member}</th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr>
                        <th scope="col">{row.Name}</th>
                        <td scope="col">{row.ID}</td>
                        <td scope="col">{row.Member}</td>
                        <th scope="col">{row.Name}</th>
                        <td scope="col">{row.ID}</td>
                        <td scope="col">{row.Member}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}