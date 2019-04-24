import React , {Component} from 'react';
import Login from '../Login/Login';

class LandingPage extends Component{


    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <Login handler = {this.props.handler}/>
            </React.Fragment>
        );
    }
}

export default LandingPage;