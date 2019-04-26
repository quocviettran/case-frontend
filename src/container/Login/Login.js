import React, {Component} from 'react';
<<<<<<< HEAD
import {Form} from 'semantic-ui-react';
import { Button, Grid, Header, Segment} from 'semantic-ui-react';
import './Login.css';
import { Link } from "react-router-dom";
import validate from './LoginRules';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';



const agent = { username: "Mike", password: "123", role:1 }
const user = { username: "Quoc", password: "123", role:2 }

class Login extends Component{
 

    constructor(props){
        super(props);
        this.state = {
      
          data: [],
      
          formIsValid: false,
          role: 0,
          
          formControls: {

            email: {
              value: '',
              valid: false,
              touched: false,
              validationRules: {
                minLength: 3,
                isRequired: true 
              }
            },

            password: {
              value: '',
              valid: false,
              touched: false,
              validationRules: {
                minLength: 3,
                isRequired: true 
              }
          }
        }
      }
    }
    
  
    submitFormHandler  = event => {
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };

      const updatedFormElement = {
        ...updatedControls[name]
      };

      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);


      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
        
      });

      if (name === "email"){
       localStorage.setItem('email', value);
      }

      else if (name === "password"){
        localStorage.setItem('password', value);
      }
    }

    formSubmitHandler = () => {

      if (localStorage.getItem('email') === agent.username && 
          localStorage.getItem('password') === agent.password) {
            
        this.setState({
          role: 1
        });  
        this.props.handler(agent.role);
      }


      else if (localStorage.getItem('email') === user.username && 
               localStorage.getItem('password') === user.password) {
        this.setState({
          role: 2
        });
        this.props.handler(user.role);
      }

      else {
        console.dir(this.state.role)
      }

    }

    handleOnChange = (e) => {
      const name = e.target.name
      const value = e.target.value

      this.setState({
        [name]:value
      })
    }
    
=======
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
    handleGuest=()=>{
      sessionStorage.setItem('role',0);
      this.forceUpdate();
    }

>>>>>>> 25dbc0d3a81cfcf7106c96b59e196eed8c86a4ee
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
          sessionStorage.setItem('token',data.accessToken);
          sessionStorage.setItem('id', data.account.id);
          sessionStorage.setItem('role', data.account.roletypeid);
          
          this.setState({role: data.account.roletypeid, data});
          this.props.handler(sessionStorage.getItem("role"));
          this.props.history.push('/propertylist');
          console.log(this.props)
          
      })
      .catch(err => {
          console.log(err);
      });
  }


<<<<<<< HEAD
  login(){
    fetch("https://properties-db.herokuapp.com/api/auth/signin",
      {
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:{
          "usernameOrEmail:":this.state.formControls.email.value,
          "password" : this.state.formControls.password.value
      }
    })
    .then(response => console.log(response))
  }

    changeRole = () =>{
      this.setProps(this.props.role=1)
    }
    
=======
>>>>>>> 25dbc0d3a81cfcf7106c96b59e196eed8c86a4ee
    render(){

          const test = (
            <div className='login-form'>
              <Grid textAlign='center' style={{ height: '100%', padding: '10px' }} verticalAlign='middle'>
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
                        onClick = {this.handleGuest}
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
<<<<<<< HEAD

                        <EmailInput 
                           name = "email"
                           value={this.state.formControls.email.value} 
                           onChange={this.submitFormHandler}
                           touched={this.state.formControls.email.touched}
                           valid={this.state.formControls.email.valid}
                        />

                        <PasswordInput 
                           name = "password"
                           value={this.state.formControls.password.value} 
                           onChange={this.submitFormHandler}
                           touched={this.state.formControls.password.touched}
                           valid={this.state.formControls.password.valid}
                        />


                      <Button 
                        color='teal' 
                        fluid size='large' 
                        onClick = {this.login}
                        disabled={!this.state.formIsValid}
                        >
=======
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
>>>>>>> 25dbc0d3a81cfcf7106c96b59e196eed8c86a4ee
                        Login
                      </Button>
                    </Segment>
                    <p>{this.state.message}</p>

                    
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