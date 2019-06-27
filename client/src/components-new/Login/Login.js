import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

//Login Box
const Parent = React.createClass({
    getInitialState: function () {
        return { 
            signup: false, 
            login: true 
        }
    },
    switch: function (word) {
        const signup, login;
        if (word == "signup") { signup = true; login = false; }
        else { login = true; signup = false; }
        return this.setState({ login: login, signup: signup })

    },
    render: function () {

        const self = this;
        return (
            <div>
                <div id="buttons">
                    <p id="signupButton" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "yellow" : "blue"}>Sign Up</p>
                    <p id="loginButton" onClick={self.switch.bind(null, "login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
                </div>

                {self.state.signup ? <Signup /> : null}
                {self.state.login ? <Login /> : null}

            </div>

        )


    }
})


const Signup = React.createClass({


    render: function () {


        return (
            <div>

                <div id="signup">
                    <input type="text" id="first" placeholder="First Name" />
                    <input type="text" id="last" placeholder="Last Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <input type="password" id="confirm" placeholder="Confirm Password" />
                    <button id="send">Send</button>
                </div>
            </div>

        )
    }
})

const Login = React.createClass({
    render: function () {



        return (

            <div>

                <div id="login">
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <button id="send">Send</button>
                </div>

            </div>

        )
    }
})


ReactDOM.render(<Parent />, document.getElementById("space"))