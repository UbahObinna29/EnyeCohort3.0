import React, { Component } from 'react'

const TableHead = () => {
    return (
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Age</th>
            <th>Hobby</th>
        </tr>
    );
}

const TableBody = () => {
    return(
        <tr>
            <td>Obinna</td>
            <td>Ubah</td>
            <td>29 April 1997</td>
            <td>22</td>
            <td>Dancing</td>
        </tr>
    );
}

class Table extends Component{
    render(){
        return(
            <table>
                <TableHead/>
                <TableBody/>
            </table>
        );
    };
    
}

export default Table;