import React , {Component} from 'react';
import {Container} from 'semantic-ui-react';
import Login from '../Login/Login';
import Register from '../Register/Register';

class LandingPage extends Component{

    render(){
        return(
            <React.Fragment>
            <Container>
                <Login/>   
                         
                <Register/>
            </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;