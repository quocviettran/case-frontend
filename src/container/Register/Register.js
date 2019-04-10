import React, {Component} from 'react';
import {Form} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import axios from 'axios';

class Register extends Component{
    state = {
        username: "",
        password: ""
    }
     registerUser = (e) =>{
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        e.preventDefault();
        console.log('hallå');
        console.log(user)
        
        
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
        return(
            <React.Fragment>
                <Form.Field>
                    <label> Enter Username </label>
                    <Input name = "username" onChange={this.handleOnChange} value={this.state.username}/>
                    <label>Enter Password</label>
                    <Input name = "password" onChange ={this.handleOnChange} value={this.state.password}/>
                </Form.Field>
                <button type="submit" className="ui button" onClick={this.registerUser}>Register</button>
            </React.Fragment>
            
        )
    }
    
    
    

}


export default Register;