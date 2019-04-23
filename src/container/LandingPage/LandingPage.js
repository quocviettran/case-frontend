import React , {Component} from 'react';
import {Container, Form} from 'semantic-ui-react';
import Login from '../Login/Login';

class LandingPage extends Component{


    render(){
        console.log(this.props)
        return(
            <React.Fragment>
            <Container>
                    <Login handler = {this.props.handler}/>
            </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;