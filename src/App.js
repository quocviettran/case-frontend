
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Menu , Container} from "semantic-ui-react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./container/LandingPage/LandingPage";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import UserPage from "./container/UserPage/UserPage";
import PropertyDetailContainer from "./container/PropertyDetail/PropertyDetailContainer";
import PropertyList from '../src/container/PropertyList/PropertyList';


/*const User = Authorization(['user', 'guest', '1'])
const Agent = Authorization(['user', 'agent', 'guest', '2'])*/

class App extends Component {

  
    state = {
      username: "",
      password: "",
      role: 0
    }
  


  handler = (role) => {
    this.setState({
      role: sessionStorage.getItem("role")
    })
  }

  componentDidUpdate(){
    console.log(this.state.role)
  }


  render() {
    const { activeItem } = this.state;
    return (

      <React.Fragment>
      
      <BrowserRouter>
        
          <Navbar role = {this.state.role}/> 
          <div className="content">
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage {...props} role= {this.state.role} handler = {this.handler} />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => (
                <Register {...props} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/signIn"
              render={props => (
                <Login {...props} handler={this.handler} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/propertylist"
              render={props => (
                <PropertyList {...props} handleChanged={this.handleChanged} />
              )}
            />
             <Route
              exact
              path="/user"
              render={props => (
                <UserPage {...props} role = {this.state.role} handleChanged={this.handleChanged} />
              )}
            /> 

            <Route
              exact
              path="/propertydetail/"
              render={props => (
                <PropertyDetailContainer role = {this.state.role} {...props} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/propertydetail/:property_id"
              render={props => (
                <PropertyDetailContainer role = {this.state.role} {...props} handleChanged={this.handleChanged} />
              )}
            />
                   
          </div>
        
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
