import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Header, Segment, Form, Message } from 'semantic-ui-react';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: "",
        role: "",
        message: "",
        data: []
    }
}

  // checkLoginInformation = (username,password) =>{
  //       if(this.state.username === username && this.state.password === password)
  //           console.log('Login success');
  //   }

  //   handleOnChange = (e) =>{
  //       const target = e.target;
  //       const value = target.type === 'checkbox' ? target.checked : target.value;
  //       const name = target.name;

  //       this.setState({
  //           [name] : value
  //       });
  //   }


    onSubmitSignIn = e => {
      e.preventDefault();
      fetch('https://properties-db.herokuapp.com/api/auth/signin', {
          method: 'POST',
          body: JSON.stringify({
            "usernameOrEmail" : this.state.username,
            "password" : this.state.password
          }),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then((res)=> {
          if(res.status === 200){
            this.setState({message: "Login success"});
            return res.json();
          }else{
            this.setState({message: "Wrong username or password"});
            return;
          }
      })
      .then(data =>{
          console.log(data);
          sessionStorage.setItem('token',data.accessToken);
          sessionStorage.setItem('id', data.account.id);
          sessionStorage.setItem('role', data.account.roletypeid);
          this.setState({role: data.account.roletypeid, data});
          this.props.handler(sessionStorage.getItem("role"));
          if(data.account.roletypeid === 1) {
            this.props.history.replace('/propertylist');
          }
          else if(data.account.roletypeid === 2) {
              this.props.history.replace('/propertylist');
          }
          else{
            this.props.history.replace('/');
          }
      })
      .catch(err => {
          console.log(err);
      });
  }





    render(){

          const test = (
            <div className='login-form'>
              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Row columns={2} id="loginFix">
              
              
              <Grid.Column id="left-container" style={{ maxWidth: 350}}>

                <div id ="left-div">

                  <Header id="checkoutText" as='h2' color='teal'>CONTINUE AS GUEST</Header>

                      <Button
                        text-overflow= "50%"
                        color='teal' 
                        fluid size='medium'
                        as={Link}
                        to="/propertylist"
                        name="Proplist" 
                        >
                        Guest
                      </Button>
                      <br></br>

                      <p id="checkoutText">
                        Continue as a guest for easy checkout.
                        You can create an account at the end of the transaction
                        to save your information for future uses.
                      </p>
                  </div>
                  
                </Grid.Column>

                <Grid.Column style={{ maxWidth: 350}} id="right-container">
                  <Header as='h2' color='teal' textAlign='center'>
                    SIGN IN
                  </Header>
                  <Form size='large' onSubmit={this.onSubmitSignIn}>
                    <Segment stacked>
                      <Form.Input
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        name='username'
                        value={this.state.userName}
                        onChange={(event) =>
                        this.setState({username: event.target.value})} />
                     
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={(event) =>
                        this.setState({password: event.target.value})}
                      />
                      <Button color='teal' fluid size='large' onClick={this.onSubmitSignIn}>
                        Login
                      </Button>
                    </Segment>
                    <p>{this.state.message}</p>
                    <Message>
                      New to us? <a href='#'>Sign Up</a>
                    </Message>
                  </Form>
                </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          )
    
        return(
            <React.Fragment>
                {test}            
            </React.Fragment>
        )}  
}

export default Login;