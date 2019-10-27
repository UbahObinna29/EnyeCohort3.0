import React, { Component } from 'react';
import { Input, Button, DatePicker } from 'antd';
import moment from 'moment';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            firstName: '',
            lastName: '',
            birthday: '',
            age: '',
            hobby: '',
            birthdayDate: null,
        };

        this.state = this.initialState;
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    onDateChange = (date) => {
        if (date) {
            this.setState({
                birthday: date.format('YYYY-MM-DD'),
                birthdayDate: date,
            });
            console.log(this.state);
        }
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstName, lastName, age, hobby, birthdayDate } = this.state;

        return (
            <form>
                <label>First Name</label>
                <Input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange} />
                <label>Last Name</label>
                <Input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange} />
                <label>Birthday</label>
                <DatePicker name="birthday" value={birthdayDate} onChange={this.onDateChange} />
                <label>Age</label>
                <Input type="number"
                    name="age"
                    value={age}
                    onChange={this.handleChange} />
                <label>Hobby</label>
                <Input type="text"
                    name="hobby"
                    value={hobby}
                    onChange={this.handleChange} />
                <p />
                <Button type="primary" onClick={this.submitForm}>Submit</Button>
            </form>
        );
    }
}
export default Form;