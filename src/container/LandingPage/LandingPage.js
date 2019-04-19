import React , {Component} from 'react';
import {Container,Grid} from 'semantic-ui-react';
import Login from '../Login/Login';

class LandingPage extends Component{

    render(){
        return(
            <React.Fragment>
            <Container>
                <Grid>
                    <Grid.Column width={8}>
                        <Login/>            
                    </Grid.Column>
                    <Grid.Column width={8}>
                    </Grid.Column>
                </Grid>
            </Container>
            </React.Fragment>
        );
    }
}

export default LandingPage;