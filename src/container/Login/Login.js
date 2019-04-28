import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Header, Segment, Form} from 'semantic-ui-react';

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
            this.props.history.push('/propertylist');
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
          
          
      })
      .catch(err => {
          console.log(err);
      });
    }


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
                      <Button color='teal' fluid size='large'   onClick={this.onSubmitSignIn}>
                        <Link  to='/propertylist'> Login </Link>
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