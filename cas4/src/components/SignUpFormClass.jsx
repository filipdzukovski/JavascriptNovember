import React from 'react';

export class SignUpFormClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
            showTable: false
        }
    }

    handleInputChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value //e.target.name => firstName:,lastName:,email:
        })
    }

    render() {
        return (
            <div id='sign-up-form'>
                <h2>Sign Up</h2>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='text'
                    placeholder='Enter Last Name'
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='email'
                    placeholder='Enter Email Address'
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='password'
                    placeholder='Enter Password'
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type='number'
                    placeholder='Enter Age'
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <button onClick={() => { this.setState({ showTable: !this.state.showTable }) }}>
                    {this.state.showTable ? 'Hide Values' : 'Show Values'}
                </button>
                <br />
                <br />
                {this.state.showTable && <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.age}</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        )
    }

}