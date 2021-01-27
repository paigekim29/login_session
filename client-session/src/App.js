import React, {Component} from 'react';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Signup from './components/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userData: null,
      isSignup: false
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
  }

  loginHandler() {
    this.setState({
      isLogin: true,
    });
  }

  setUserInfo(object) {
    this.setState({
      userData: object
    });
  }

  logoutHandler() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }

  signupHandler() {
    this.setState({
      isSignup: !this.state.isSignup
    })
  }

  render() {
    const {isLogin, isSignup} = this.state;
    return (
        <div className='App'>
          {isSignup ?
              <Signup
                  signUpHandler={this.signupHandler}
              /> : (isLogin ? (
                  <Mypage
                      logoutHandler={this.logoutHandler}
                      userData={this.state.userData}
                  />
              ) : (
                  <Login
                      loginHandler={this.loginHandler}
                      setUserInfo={this.setUserInfo}
                      signUpHandler={this.signupHandler}
                  />
              ))
          }
        </div>
    );
  }
}

export default App;

// (
//     <Mypage
//         logoutHandler={this.logoutHandler}
//         userData={this.state.userData}
//     />
// ) : (
//     <Login
//         loginHandler={this.loginHandler}
//         setUserInfo={this.setUserInfo}
//     />
// )

// <Route path="/users/userinfo" component={Mypage} /> :
// <Route path="/" component={Login} />