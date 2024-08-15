import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@shadcn/ui";

const columns = [
    { Name: 'Truck Name', ID: 'Truck Weight', Member: 'Driver Name', Park: 'Park Location' },
];

const rows = [
    { Name: 'Margaret Nguyen', ID: '427311', Member: 'June 3, 2010', Park: 'Manica' },
    { Name: 'Edvard Galinski', ID: '533175', Member: 'January 13, 2011', Park: 'Sofala' },
    { Name: 'Hoshi Nakamura', ID: '533175', Member: 'January 13, 2011', Park: 'Zambezia' },
    { Name: 'Margaret Nguyen', ID: '427311', Member: 'June 3, 2010', Park: 'Tete' },
    { Name: 'Edvard Galinski', ID: '533175', Member: 'January 13, 2011', Park: 'Nampula' },
];

export default function MainTable() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <React.Fragment key={index}>
                            <TableCell rowSpan={2}>{column.Name}</TableCell>
                            <TableCell rowSpan={2}>{column.ID}</TableCell>
                            <TableCell colSpan={2}>{column.Member}</TableCell>
                        </React.Fragment>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.Name}</TableCell>
                        <TableCell>{row.ID}</TableCell>
                        <TableCell>{row.Member}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
