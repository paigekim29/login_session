import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  loginRequestHandler() {
    // TODO: 로그인 요청을 보내세요.
    //
    // 로그인에 성공하면
    // - props로 전달받은 함수를 호출해, 로그인 상태를 변경하세요.
    // - GET /users/userinfo 를 통해 사용자 정보를 요청하세요
    //
    // 사용자 정보를 받아온 후
    // - props로 전달받은 함수를 호출해, 사용자 정보를 변경하세요.
    axios({
      method: "post",
      url: "https://localhost:4000/users/login",
      data: this.state,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
        .then(() => {
          this.props.loginHandler()
        })
        .then(() =>
            axios({
              method: "get",
              url: "https://localhost:4000/users/userinfo",
              withCredentials: true
            }))
        .then((res) => {
          let { userId, email } = res.data.data;
          this.props.setUserInfo({
            userId,
            email,
          });
        })
        .catch((e) => alert(e));
  }

  render() {
    const {userId, password} = this.state
    return (
        <div className='loginContainer'>
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
                type='password'
            />
          </div>
          <div className='passwordField'>
            <button onClick={this.loginRequestHandler} className='loginBtn'>
              Login
            </button>
            <button onClick={this.props.signUpHandler} className='loginBtn'>
              Signup
            </button>
          </div>
        </div>
    );
  }
}

export default Login;