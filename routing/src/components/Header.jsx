import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h2>React-App</h2>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        )
    }
}
