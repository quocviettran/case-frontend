import React, { Component } from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import LoginForm from './components/AuthenticationForm/LoginForm/loginForm'
import Login from './container/Login/Login';


class App extends Component {

  render() {
 
    return (
      
      <Container>
        <LoginForm></LoginForm>
      </Container>

    );
  }
}

export default App;
