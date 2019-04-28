
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./container/LandingPage/LandingPage";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import UserPage from "./container/UserPage/UserPage";
import PropertyDetailBuyerContainer from "./container/PropertyDetailBuyerContainer/PropertyDetailBuyerContainer";
import PropertyDetailAgentContainer from "./container/PropertyDetailAgentContainer/PropertyDetailAgentContainer";
import PropertyDetailGuestContainer from "./container/PropertyDetailGuestContainer/PropertyDetailGuestContainer"
import PropertyList from '../src/container/PropertyList/PropertyList';


class App extends Component {

  
    state = {
      username: "",
      password: "",
      role: sessionStorage.getItem("role") ? sessionStorage.getItem("role") : 0
    }
  


  handler = (roletypeid) => {
    this.setState({
      role: roletypeid
    })
    this.forceUpdate()
  }

  handleLogOut = () => {
    this.setState({role: undefined})
    
  }


  render() {
    const { activeItem } = this.state;
    const role = this.state.role;
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
              path="/login"
              render={props => (
                <Login {...props} handler ={this.handler}/>
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

            <div>
             {role == 0 ? (
              <Route
                exact
                path="/propertydetail/:property_id"
                render={props => (
                  <PropertyDetailGuestContainer role = {this.state.role} {...props} handleChanged={this.handleChanged} />
                )}
              />
              ): 
              role == 1 ? 
                (
                <Route
                exact
                path="/propertydetail/:property_id"
                render={props => (
                  <PropertyDetailAgentContainer role = {this.state.role} {...props} handleChanged={this.handleChanged} />
                )}
              />
              ):
                (
                <Route
                exact
                path="/propertydetail/:property_id"
                render={props => (
                  <PropertyDetailBuyerContainer role = {this.state.role} {...props} handleChanged={this.handleChanged} />
                )}
              />
              )}


            </div>       
          </div>
        
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
