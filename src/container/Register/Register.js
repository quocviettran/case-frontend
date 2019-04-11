import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                firstname: undefined,
                surname:undefined,
                password: undefined,
                email:undefined,
                phone:undefined,
                birth: undefined,
                role:null,
                terms:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleChangeRole = (e, { value })=>{
        console.log(value);
        this.setState({
            role: value
        })
        
    }

    handleCheckTerms=()=>{
        this.setState(prevState => ({
            terms: !prevState.terms
        }))
    }

    handleChangeDate(date){
        console.log(date);
        this.setState({
            birth: "1995-03-23"
        })
        
    }

     registerUser = (e) =>{
         if(this.state.terms === true){
            const user = {
                name: this.state.firstname,
                surname: this.state.surname,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone,
                dateOfBirth: this.state.birth,
                accountTypeId: this.state.role
            };
            console.log(user);
            axios.post(
                "https://properties-db.herokuapp.com/api/account/create",
                {user}
            ).then(console.log("User added"));
                
         }else{
            console.log("FALSE FALSE FALSE");

         }
        
    }


    
    render(){
        const roleOptions = [
            {
                key: "Agent",
                text:"Agent",
                value:1,
            },
            {
                key: "Buyer",
                text:"Buyer",
                value:2,
            }
        ]
        return(
            <React.Fragment>
                <Form>
                    <Form.Field>
                        <Form.Input fluid label="Firstname" placeholder="Firstname" name="firstname" onChange={this.handleChange} />
                        <Form.Input fluid label="Surname" placeholder="Surname" name="surname" onChange={this.handleChange} />
                        <Form.Input fluid label="Password" placeholder="Password" name="password" onChange={this.handleChange} />
                        <Form.Input fluid label="E-mail" placeholder="E-mail" name="email" onChange={this.handleChange} />
                        <Form.Input fluid label="Phone" placeholder="Phone number" name="phone" onChange={this.handleChange} maxLength='8' />
                        <Form.Select fluid label="Role" placeholder="Select your role" onChange={this.handleChangeRole} options={roleOptions}/>
                        <label>Date of birth</label>
                        <DatePicker  selected={this.state.birth} dateFormat="yyyy-mm-dd" onChange={this.handleChangeDate} />
                    </Form.Field>                   
                    <Form.Checkbox label= 'I agree to the Terms and Conditions' onChange={this.handleCheckTerms}/>
                    <Form.Button onClick={this.registerUser}>Create account</Form.Button>
                </Form>    
            </React.Fragment> 
        )}    
}


export default Register;