import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            mobile: '',
            email: '',
            errors: {
                name: '',
                password: '',
                mobile: '',
                email: '',
            }
        }
    }

    checkName = (e) => {
        this.setState({
            name: e.target.value
        })
        let regex_name = /^[A-Za-z]{5,20}$/
        if (regex_name.test(this.state.name)) {
            this.setState({
                errors: {
                    name: ''
                }
            })
        } else {
            this.setState({
                errors: {
                    name: 'Name should be of minimum 6 characters and should contain only text'
                }
            })
        }
    }

    checkEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        let regex_email = /^\S+@\S+\.\S+$/
        if (regex_email.test(this.state.email)) {
            this.setState({
                errors: {
                    email: ''
                }
            })
        } else {
            this.setState({
                errors: {
                    email: 'Name is Invalid'
                }
            })
        }
    }

    checkPassword = (e) => {
        this.setState({
            password: e.target.value
        })
        let regex_pass = /^[A-Za-z0-9!@#$%^&*()_]{5,20}$/
        if (regex_pass.test(this.state.password)) {
            this.setState({
                errors: {
                    password: ''
                }
            })
        } else {
            this.setState({
                errors: {
                    password: 'Password is Invalid'
                }
            })
        }
    }

    checkMobile = (e) => {
        this.setState({
            mobile: e.target.value
        })
        if (this.state.mobile.length === 10) {
            this.setState({
                errors: {
                    mobile: ''
                }
            })
        } else {
            this.setState({
                errors: {
                    mobile: 'mobile should have 10 numbers'
                }
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit="">
                    <h1>SignUp Form</h1>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.checkName} />
                    <span>{this.state.errors.name}</span>
                    <label>email:</label>
                    <input type="text" value={this.state.email} onChange={this.checkEmail} />
                    <span>{this.state.errors.email}</span>
                    <label>Password:</label>
                    <input type="password" value={this.state.password} onChange={this.checkPassword} />
                    <span>{this.state.errors.password}</span>
                    <label>mobile:</label>
                    <input type="number" min="0" value={this.state.mobile} onChange={this.checkMobile} />
                    <span>{this.state.errors.mobile}</span>
                </form>
            </div>
        )
    }
}
