import React, {Component} from 'react';
import {Input, Form, Menu} from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
import './Login.css';
import validate from './LoginRules';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import PropertyList from '../../container/PropertyList/PropertyList';
import LandingPage from '../LandingPage/LandingPage';
import PropertyDetailContainer from '../PropertyDetail/PropertyDetailContainer'



const agent = { username: "Mike",
                password: "123",
                role:1 }

const user = { username: "Miki",
               password: "456",
               role:2 }

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
        },console.log(this.state.role));

        
      }


      else if (localStorage.getItem('email') === user.username && 
               localStorage.getItem('password') === user.password) {
        this.setState({
          role: 2
        },console.log(this.state.role));
      }

      else {
        console.dir(this.state.role)
      }

    }
    render(){
      const { activeItem } = this.state;

    let nav = (

      <Menu fixed="top" color="teal" inverted id="menu">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
        
        />

        <Menu.Item
          as={Link}
          to="/register"
          name="Register"
          active={activeItem === "Register"}
  
        />
      </Menu>
    );

    if (parseInt(this.state.role) === 1) {
      nav = (
        <Menu fixed="top" color="teal" inverted id="menu">
          <Menu.Item
            as={Link}
            to="/"
            name="Home"

          />

        <Menu.Item 
          position="right"
          as={Link}
          to="/signIn"
          name="Sign In"

        />

          <Menu.Item
            as={Link}
            to="/signIn"
            name="Log Out"

          />
        </Menu>
      );}
      
      else if (parseInt(this.state.role) === 2) {
      nav = (
        <Menu fixed="top" color="teal" inverted id="menu">
          <Menu.Item
            name="Home"
            as={Link}
            to="/"
            active={activeItem === "Home"}

          />

          <Menu.Item
            as={Link}
            to="/signIn"
            name="Log Out"
            active={activeItem === "Log out"}

          />
        </Menu>
      );
    }

        const login = (
            <div className='login-form'>
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}

              </style>

              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Row columns={2}>
              <Grid.Column id="left-container" style={{ maxWidth: 350}}>
                <div id ="left-div">

                  <Header id="checkoutText" as='h2' color='teal'>
                    CONTINUE AS GUEST
                  </Header>

                      <Button 
                        color='teal' 
                        fluid size='medium' 
                        as={Link}
                        to="/propertylist"
                        name="Proplist"
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
             <BrowserRouter>
              <ul id="menuHeader">{nav}</ul>
              <div className="content">
            

            <Route
              exact
              path="/propertydetail/"
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/propertydetail/:property_id"
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route 
              exact
              path="/propertylist"
              render={props => (
                <PropertyList {...props} role = {this.state.role} />
              )}
            />
            {login}
          </div>
      </BrowserRouter>
            </React.Fragment>

           

        )}
    
}

export default Login;