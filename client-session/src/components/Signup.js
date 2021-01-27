import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.signupHandler = this.signupHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signupHandler() {
    axios({
      method: "post",
      url: "https://localhost:4000/users/signup",
      data: this.state,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
        .then(() => this.props.signUpHandler())
        .catch((e)=> alert(e))
  }

  render() {
    const {userId, password, email, mobile} = this.state
    return (
        <div>
          <div className='inputField'>
            <div>Username</div>
            <input
                name='userId'
                onChange={(e) => this.inputHandler(e)}
                value={userId}
                type='text'
            />
          </div>
          <div className='inputField'>
            <div>Password</div>
            <input
                name='password'
                onChange={(e) => this.inputHandler(e)}
                value={password}
                type='text'
            />
          </div>
          <div className='inputField'>
            <div>Email</div>
            <input
                name='email'
                onChange={(e) => this.inputHandler(e)}
                value={email}
                type='text'
            />
          </div>
          <div className='inputField'>
            <div>Mobile</div>
            <input
                name='mobile'
                onChange={(e) => this.inputHandler(e)}
                value={mobile}
                type='text'
            />
          </div>
          <button onClick={this.signupHandler}>
            Signup
          </button>
        </div>
    )
  }
}

export default Signup;