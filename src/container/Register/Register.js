import React, {Component} from 'react';
import {Form,Select, Header} from 'semantic-ui-react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                username:undefined,
                firstname: undefined,
                surname:undefined,
                password: undefined,
                email:undefined,
                phone:undefined,
                day: undefined,
                month: undefined,
                year: undefined,
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
        this.setState({
            role: value
        })
        
    }

    handleCheckTerms=()=>{
        this.setState(prevState => ({
            terms: !prevState.terms
        }))
    }

    handleChangeDay = (event, {value}) =>{
        this.setState({
            day: value
        })
        
    }
    handleChangeMonth = (event, {value}) =>{
        this.setState({
            month: value
        })
        
    }
    handleChangeYear = (event, {value}) =>{
        this.setState({
            year: value
        })
        
    }

     registerUser = (e) =>{
         
         
         if(this.state.terms === true){
            const user = JSON.stringify({
                name: this.state.firstname,
                surname: this.state.surname,
                phone : this.state.phone,
                email: this.state.email,
                date_of_birth: this.state.year+'-'+this.state.month+'-'+this.state.day,
                password: this.state.password,
                accountTypeId: this.state.role
            })
            console.log(user);
            axios.post(
                "https://properties-db.herokuapp.com/api/account/create",
                user,
                {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            );
                
         }else{
            alert("Terms and Conditions is not checked");

         }
        
    }

    createYears(years){
        for(let i=1890; i<2019; i++){
            years[i-1890] ={key:i,text:i,value:i} ;
        }
    }
    createMonths(months){
        for(let i=1; i<=12; i++){
            months[i-1]={key:i,text:i,value:i};
        }
    }
    createDays(days,chosenMonth,chosenYear){
        //February
        if(chosenMonth === 2){
            //Years with leap day
            if(chosenYear%4===0)
                for(let i=1; i<=29; i++)
                    days[i-1] = {key:i,text:i,value:i};
            else//Normal february
                for(let i=1; i<=28; i++)
                    days[i-1] = {key:i,text:i,value:i};
        }
        //All months that ends with 30 days
        else if(chosenMonth%2 === 0)
            for(let i=1; i<=30; i++)
                days[i-1] = {key:i,text:i,value:i};
        //All months that ends with 31 days
        else
            for(let i = 1; i<=31;i++)
                days[i-1] = {key:i,text:i,value:i};
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

        let years=[],months=[],days=[];
        
        

        return(
            <React.Fragment>
                <Form>
                    <Header id="checkoutText" as='h2' color='teal'>Register your account</Header>
                    <Form.Field>

                        <Form.Input fluid label="Username" placeholder="Username" name="username" onChange={this.handleChange} />
                        <Form.Input fluid label="Password" placeholder="Password" name="password" onChange={this.handleChange} />
                        <Form.Input fluid label="Firstname" placeholder="Firstname" name="firstname" onChange={this.handleChange} />
                        <Form.Input fluid label="Surname" placeholder="Surname" name="surname" onChange={this.handleChange} />
                        <Form.Input fluid label="E-mail" placeholder="E-mail" name="email" onChange={this.handleChange} />
                        <Form.Input fluid label="Phone" placeholder="Phone number" name="phone" onChange={this.handleChange} maxLength='8' />
                        <Form.Select fluid label="Role" placeholder="Select your role" onChange={this.handleChangeRole} options={roleOptions}/>
                        <label>Date of birth</label>
                        <Select fluid label="Year" placeholder ="Year" onClick={this.createYears(years)} onChange = {this.handleChangeYear}  options={years}/>
                        <Select fluid label="Month" placeholder ="Month" onClick={this.createMonths(months)} onChange = {this.handleChangeMonth}  options={months}/>
                        <Select fluid label="Day" placeholder ="Day" onClick={this.createDays(days,this.state.month,this.state.year)} onChange = {this.handleChangeDay}  options={days}/>
                    </Form.Field>                   
                    <Form.Checkbox label= 'I agree to the Terms and Conditions' onChange={this.handleCheckTerms}/>
                    <Form.Button onClick={this.registerUser}>Create account</Form.Button>
                </Form>    
            </React.Fragment> 
        )}    
}


export default Register;