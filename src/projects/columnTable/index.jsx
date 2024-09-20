import React, { useState } from 'react'
import Size from './Size';
import MyTable from './MyTable';

function createMatrix(rows, columns) {
    const matrix = Array.from({ length: rows }, () => []);
    let count = 1, direction = 1, i = 0;

    for (let j = 0; j < columns; j++) {
        while (i < rows && i >= 0) {
            matrix[i][j] = count++;
            i += direction;
        }
        direction *= -1;
        i += direction;
    }

    return matrix;
}

const ColumnTable = () => {
    const [rows, setRows] = useState(2);
    const [columns, setColumns] = useState(2);
    const values = createMatrix(rows, columns);

    return (
        <main className="text-center">
            <div> <Size rows={rows} columns={columns} setRows={setRows} setColumns={setColumns} /></div>
            <div> <MyTable columns={columns} values={values} /></div>
        </main>
    );
}

export default ColumnTable;