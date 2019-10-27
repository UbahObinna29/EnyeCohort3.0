import React, { Component } from 'react';
import {Table} from 'antd';
import Form from './Form';


class App extends Component {

    state = {
        users: [
        ],
    };

    handleSubmit = user => {
        this.setState({ users: [...this.state.users, user] })
    }

    render() {
        const columns = [
            {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'age',
            },
            {
                title: 'Birthday',
                dataIndex: 'birthday',
                key: 'birthday',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Hobby',
                dataIndex: 'hobby',
                key: 'hobby',
            },
        ];

        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table dataSource={this.state.users} columns = {columns} />
            </div>
        );
    };
};

export default App;