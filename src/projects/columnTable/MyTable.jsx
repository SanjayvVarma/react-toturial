import React from 'react';

const MyTable = ({ columns, values }) => {
    return (
        <table className="mx-auto my-4 border-separate" style={{ width: `${columns * 50}px` }}>
            <tbody>
                {values.map((row, idx) => (
                    <tr key={idx}>
                        {row.map((value) => (
                            <td key={value} className="w-12 h-12 border border-black">
                                <div className="h-full flex items-center justify-center">
                                    {value}
                                </div>
                            </td>

                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MyTable;
