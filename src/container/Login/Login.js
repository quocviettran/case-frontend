import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Header, Segment, Form } from 'semantic-ui-react'

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
                username: "",
                password: ""
        }
    }

    checkLoginInformation = (username,password) =>{
        if(this.state.username === username && this.state.password === password)
            console.log('Login success');
    }

    handleOnChange = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
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
              <Grid>
              <Grid.Row columns={2} textAlign='left' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                  </Header>
                  <Form size='large'>
                    <Segment stacked>
                      <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='username' onChange={this.handleOnChange} />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='password'
                        type='password'
                        name='password'
                        onChange={this.handleOnChange}
                      />
                      <Button color='teal' fluid size='large' onClick = {this.checkLoginInformation()}>
                        Login
                      </Button>
                      <Link>Forgot your password?</Link>
                    </Segment>
                  </Form>
                </Grid.Column>  
                <Grid.Column>
                <Header as='h2' color='teal' textAlign='center'>
                    Continue without signing in
                  </Header>
                <Button fluid size='large'as={Link} to="/propertylist" >Continue as a guest</Button>
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