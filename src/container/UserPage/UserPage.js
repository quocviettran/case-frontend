import React, {Component} from 'react';
import {Container, Segment, Form, Button} from 'semantic-ui-react';
import axios from 'axios';

const endpoint = 'https://properties-db.herokuapp.com/api/account/'
const userid = sessionStorage.getItem("role");
class UserPage extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            surname:"",
            phone:"",
            email:"",
            dateOfBirth:"",
            role:"",
            id:undefined,
            username:undefined,
            password:undefined,
            created_at:undefined,
            new_firstname:undefined,
            new_surname:undefined,
            new_phone:undefined,
            new_email:undefined,
            status:false
        }
    }

    componentWillMount(){
        this.getUsers();
    }

    getUsers = () => {
        axios.get(endpoint+userid,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                 "Authorization": "Bearer " + sessionStorage.getItem("token")
            }
        })
        .then(res => this.setState({
            firstname: res.data.name,
            surname: res.data.surname,
            phone: res.data.phone,
            email: res.data.email,
            dateOfBirth: res.data.dateOfBirth,
            role: res.data.accountType.name,
            id: res.data.id,
            username:res.data.username,
            password: res.data.password,
            created_at: res.data.created_at
        },console.log(res.data)))
    }
    
    handleOnChange=(e)=>{
        e.preventDefault();
        
        this.setState({
            status: !this.state.status
        })
    }

    inputHandleChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleEditChange = (e) => {
        e.preventDefault();
        const editedUser ={
            id: Number(userid) ,
            name: this.state.firstname,
            surname: this.state.surname,
            phone: this.state.phone,
            email: this.state.email,
            dateOfBirth: this.state.dateOfBirth,
            active: true,
            username:this.state.username,
            password: this.state.password,
            created_at: this.state.created_at,
            accountTypeId: this.state.role=== 'ROLE_AGENT' ? 1 : 2,
            accountType: this.state.role === 'ROLE_AGENT' ? {accountTypeId: 1, name: 'ROLE_AGENT'} : {accountTypeId: 2, name: 'ROLE_BUYER'}
            
        }
        
        
        this.state.new_firstname === undefined ? editedUser.name = this.state.firstname : editedUser.name = this.state.new_firstname;
        this.state.new_surname === undefined ? editedUser.surname = this.state.surname : editedUser.surname = this.state.new_surname;
        this.state.new_phone === undefined ? editedUser.phone = this.state.phone : editedUser.phone = this.state.new_phone;
        this.state.new_email === undefined ? editedUser.email = this.state.email : editedUser.email = this.state.new_email;
        
        axios.post('https://properties-db.herokuapp.com/api/account/update',
            JSON.stringify(editedUser),
            {
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(console.log(editedUser))

        this.setState({
            status: !this.state.status
        })
        
    }


    render(){
        const firstname = this.state.firstname;
        const lastname = this.state.surname;
        const phone = this.state.phone;
        const email = this.state.email;
        const birth = this.state.dateOfBirth;
        const role = this.state.role;
    
        const defaultForm =  
        <React.Fragment>
            <Segment.Group>
                <Segment>Fullname: {firstname} {lastname}</Segment>
                <Segment>Date of birth: {birth}</Segment>
                <Segment>Phone: {phone}</Segment>
                <Segment>Email: {email}</Segment>
                <Segment>Role: {role}</Segment>
            </Segment.Group>
            <Button onClick={this.handleOnChange}> Edit Account </Button>
        </React.Fragment>
        
        const inputForm =
        <React.Fragment>
        <Form>
            <Form.Input label="First name" placeholder={String(firstname)} name="new_firstname" onChange={this.inputHandleChange}></Form.Input>
            <Form.Input label="Sur name" placeholder={String(lastname)} name="new_surname" onChange={this.inputHandleChange}></Form.Input>
            <Form.Input label="Email" placeholder={String(email)} name="new_email" onChange={this.inputHandleChange}></Form.Input>
            <Form.Input label="Phone" placeholder={String(phone)} name ="new_phone" onChange={this.inputHandleChange}></Form.Input>
            <Button onClick={this.handleOnChange}> Undo changes </Button>
            <Button onClick={this.handleEditChange} >Apply</Button>
        </Form>
        </React.Fragment>

        return(
            <React.Fragment>
                <Container>
                    {this.state.status === false ? defaultForm : inputForm }
                    
                </Container>
            </React.Fragment>
        )
    }
}

export default UserPage;