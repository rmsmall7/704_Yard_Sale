import React, { Component } from 'react';
import SignUp from '../components/Sign-Up';

class Sign extends Component {
  componentDidMount(){
    console.log(this.props.isRegistered)
  }
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 100}}></div>
        <SignUp handleSignUp={this.props.handleSignUp} isRegistered={this.props.isRegistered}/>
      </div>
    )
  }
}

export default SignUp;
