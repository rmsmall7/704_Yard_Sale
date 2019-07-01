import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'



class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        console.log(this.props.isLoggedIn)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        axios
            .post('/auth/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    this.props.handleUserAccess(true)
                    // update the state to redirect to home

                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }
    handleLogout = (e) => {
        e.preventDefault();
        axios.post("/auth/logout").then(dbData => {
            this.props.handleUserAccess(false)
        })
    }

    render() {
        return (
            <div className="Signup2">
                {this.props.isLoggedIn ? <Redirect to="/" /> : null}
                <h3>Login</h3>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="username">Username</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="password">Password: </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button
                            className="btn btn-primary col-1 col-mr-auto"

                            onClick={this.handleSubmit}
                            type="submit">Login</button>
                        <button
                            className="btn btn-primary col-1 col-mr-auto"

                            onClick={this.handleLogout}
                            type="submit">Logout</button>

                            <br/>
                            <br/>

                        <div class="container signin">
                            <p>New user?  Click <a href="/SignUp">HERE</a> to register!!</p>
                        </div>

                        {/* <button
                            className="btn btn-primary col-1 col-mr-auto"

                            onClick={this.handleRegister}
                            type="submit">New User</button> */}
                    </div>
                </form>
            </div >
        )
    }

}
export default LoginForm