import React from 'react'

const Size = ({ rows, setRows, columns, setColumns }) => {
    return (
        <section className="flex flex-col gap-2 justify-center my-5 md:flex-row">
          <label htmlFor="rows">Rows: {rows}</label>
          <input
            type="range"
            id="rows"
            min="1"
            max="8"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="slider"
          />
          <label htmlFor="columns">Columns: {columns}</label>
          <input
            type="range"
            id="columns"
            min="1"
            max="8"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="slider"
          />
        </section>
      );
    }

export default Size