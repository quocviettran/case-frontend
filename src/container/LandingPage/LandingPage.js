import React , {Component} from 'react';
import {Container, Form, Message} from 'semantic-ui-react';
import Login from '../Login/Login';
import Register from '../Register/Register';

class LandingPage extends Component{

    render(){
        return(
            <React.Fragment>
            <Container>
                <Form>
                    <Login/>
                    <Message>
                        HALLO
                    </Message>
                    <Register/>
                </Form>             
            </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;