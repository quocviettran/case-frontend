import React, {Component} from 'react';
import {Input, Form} from 'semantic-ui-react';
import { Button, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
import './Login.css';


const agent = { username: "Mike", password: "123", role:1 }
const user = { username: "Miki", password: "456", role:2 }

class Login extends Component{
 

    constructor(props){
        super(props);
        this.state = {
                username: "",
                password: "",
                role: 0
        }
        this.checkCredentials = this.checkCredentials.bind(this);
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


    checkLoginInformation(event){
              
    }

    handleOnChange = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    checkCredentials = (event) =>{
        this.setState({username: event.target.value,
                       password: event.target.value})
        if (this.username == agent.username){
          this.setState({role: agent.role})
          console.log(this.state.role)

        }

        else if (this.username == user.username){
          this.setState({role: user.role})
          console.log(this.state.role)
        }

        else{
          console.log(this.state.role)

        }

      
    }

    render(){
        const login = (
            <div className='login-form'>
              {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
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

                  <Header id="checkoutText" as='h2' color='teal'>CONTINUE AS GUEST</Header>
                      <Button color='teal' fluid size='medium' onClick = {console.log(" ")}
                      style={{ maxWidth: 200}}>
                        Checkout
                      </Button>
                      <br></br>

                      <p id="checkoutText">Continue as a guest for easy checkout.
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
                      <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='username'
                      username={this.state.username} onChange={this.checkCredentials} />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        password={this.state.password}
                        onChange={this.checkCredentials}
                      />
          
                      <Button color='teal' fluid size='large' onClick = {this.checkLoginInformation()}>
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
                {login}
            </React.Fragment>
        )}
    
}

export default Login;