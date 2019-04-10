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
                role:undefined,
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

    handleChangeRole= () =>{
        
    }

    handleChangeDate(date){
        this.setState({
            startDate: date
        })
    }

     registerUser = (e) =>{
         if(this.state.terms === true){
            const user = {
                firstname: this.state.firstname,
                surname: this.state.surname,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone,
                birth: this.state.birth,
                role: this.state.role
            };
            console.log(user);
            axios.post(
                "https://properties-db.herokuapp.com/api/account/create",
                {user}
            ).then(console.log("User added"));
                
         }else{

         }
        
    }


    
    render(){
        const roleOptions = [
            {
                key: "Agent",
                text:"Agent",
                value:"agent",
            },
            {
                key: "Buyer",
                text:"Buyer",
                value:"buyer",
            }
        ]
        return(
            <React.Fragment>
                <Form>
                    <Form.Field>
                        <Form.Input fluid label="Firstname" placeholder="Firstname" name="firstname" onChange={this.handleChange} />
                        <Form.Input fluid label="Surname" placeholder="Surname" name="surname" onChange={this.handleChange} />
                        <Form.Input fluid label="E-mail" placeholder="E-mail" name="email" onChange={this.handleChange} />
                        <Form.Input fluid label="Phone" placeholder="Phone number" name="phone" onChange={this.handleChange} maxLength='8' />
                        
                        <Form.Dropdown fluid label="Role" placeholder="Select your role" selection options={roleOptions}/>
                        <label>Date of birth</label>
                        <DatePicker  selected={this.state.birth} onChange={this.handleChangeDate} />
                    </Form.Field>                   
                    <Form.Checkbox label= 'I agree to the Terms and Conditions'/>
                    <Form.Button>Create account</Form.Button>
                </Form>    
            </React.Fragment> 
        )}    
}


export default Register;