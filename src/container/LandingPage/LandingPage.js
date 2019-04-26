import React , {Component} from 'react';
import Login from '../Login/Login';

class LandingPage extends Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <React.Fragment>
                <Login role = {this.props.role} handler = {this.props.handler}/>
            </React.Fragment>
        );
    }
}

export default LandingPage;