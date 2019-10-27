import React, { Component } from 'react'

class Table extends Component {
    render() {
    
        const { usersData } = this.props;
        return (
            <table>
                <TableHead />
                <TableBody usersData={usersData} />
            </table>
        );
    };

}

export default Table;