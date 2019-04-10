import React, {Component} from 'react';
import {Form, Checkbox} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                username: "",
                password: "",
                startDate: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date){
        this.setState({
            startDate: date
        })
    }

     registerUser = (e) =>{
        const user = {
            username: this.state.username,
            password: this.state.password
        };
    }

    print = (e) =>{
        e.preventDefault();
        console.log('hallå'); 
    };


    
    render(){
        return(
            <React.Fragment>
                <Form>
                    <Form.Field>
                        <label> First Name</label>
                        <input placeholder ='First Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label> Sur Name</label>
                        <input placeholder ='Sur Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label> Email </label>
                        <input placeholder ='Email'/>
                    </Form.Field>
                    <Form.Field>
                        <label> Phone </label>
                        <input placeholder ='Email'/>
                    </Form.Field>
                   <Form.Field>
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                    </Form.Field>      
                    <Checkbox label= 'I agree to the Terms and Conditions'/>
                </Form>    
            </React.Fragment> 
        )}    
}


export default Register;