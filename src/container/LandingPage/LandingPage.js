import React , {Component} from 'react';
import {Container, Form} from 'semantic-ui-react';
import Login from '../Login/Login';

class LandingPage extends Component{

    render(){
        return(
            <React.Fragment>
            <Container>
                    <Login/>
            </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;