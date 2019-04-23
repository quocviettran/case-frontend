
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import LandingPage from "./container/LandingPage/LandingPage";
import PropertyDetailContainer from "./container/PropertyDetail/PropertyDetailContainer";
import PropertyList from '../src/container/PropertyList/PropertyList';
import Login from './container/Login/Login'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      role: 0
    }
  }

  render() {
    return (      
       <BrowserRouter>
      
          <div>    
          <Navbar/>
          
          <br></br>   
          <br></br>   
          <br></br>   
          <br></br>   

            <LandingPage/>
          </div>
        </BrowserRouter>
             
    
    
    
    );
  }
}

export default App;
