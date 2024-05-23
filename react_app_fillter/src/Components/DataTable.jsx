import React from 'react';
import '../DataTable.css';

const DataTable = ({ data, filters,filteredData }) => {
    
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {
                            Object.keys(data[0]).map((el) => {
                                return <th>{el}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {(filteredData || data).map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.category}</td>
                            <td>{item.type}</td>
                            <td>{item.active}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
