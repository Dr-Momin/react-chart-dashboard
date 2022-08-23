import React from 'react';
import "../App.css";

const Table = () => {
    return (
        <div>
            <table className="table table-striped table-hover leading-none text-sm">
                <thead className="">
                    <tr>
                        <th>ITEM</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Built up areas</td>
                        <td>2300 sqft</td>
                    </tr>

                    <tr>
                        <td>Client</td>
                        <td>PNC Investments</td>
                    </tr>
                    <tr>
                        <td>Consultant</td>
                        <td>PNC</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>PNC Investments</td>
                    </tr>
                    <tr>
                        <td>Main Contractor</td>
                        <td>Sobha Constructions</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
