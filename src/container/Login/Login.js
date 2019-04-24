import React, {Component} from 'react';
import {Input, Form} from 'semantic-ui-react';
import { Button, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
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
    
    onSubmitSignIn = e => {
      e.preventDefault();
      fetch('https://properties-db.herokuapp.com/owner/', {
          method: 'POST',
          body: JSON.stringify({
            "username" : this.state.username,
            "password" : this.state.password
          }),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then((res)=> {
          if(res.status === 200){
            this.setState({message: "Login successful "});
            return res.json();
          }else{
            this.setState({message: "Wrong username or password"});
            return;
          }
      }).catch(err => {
          console.log(err);
      });
  }

    changeRole = () =>{
      this.setProps(this.props.role=1)
    }
    
    render(){
      
        const login = (
            <div className='login-form'>
              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Row columns={2}>
              
              

              <Grid.Column id="left-container" style={{ maxWidth: 350}}>

                <div id ="left-div">

                  <Header id="checkoutText" as='h2' color='teal'>CONTINUE AS GUEST</Header>

                      <Button 
                        color='teal' 
                        fluid size='medium'
                        as={Link}
                        to="/propertylist"
                        name="Proplist" 
                        onClick = {this.props.handler}
                        style={{ maxWidth: 200}}>
                        Checkout
                      </Button>
                      <br></br>

                      <p id="checkoutText">
                        Continue as a guest for easy checkout.
                        You can create an account at the end of the transaction
                        to save your information for future purchases.
                      </p>
                  </div>
                  
                </Grid.Column>

                <Grid.Column style={{ maxWidth: 350}} id="right-container">
                  <Header as='h2' color='teal' textAlign='left'>
                    SIGN IN
                  </Header>
                    <Form size='large'>
                    <Segment stacked>

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
                        onClick = {this.formSubmitHandler}
                        disabled={!this.state.formIsValid}
                        >
                        Login
                      </Button>
                    </Segment>
                  </Form>
                </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          )
    

        return(
            <React.Fragment>
                { login }
            </React.Fragment>
        )}
    
}

export default Login;