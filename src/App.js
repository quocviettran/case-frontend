
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import LandingPage from "./container/LandingPage/LandingPage";
import PropertyDetailContainer from "./container/PropertyDetail/PropertyDetailContainer";
import PropertyList from '../src/container/PropertyList/PropertyList';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar></Navbar>
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route
              exact
              path="/propertydetail/"
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />
            <Route
              exact
              path="/propertydetail/:property_id"
              component={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route 
              exact
              path="/propertylist"
              render={props => (
                <PropertyList {...props} handleChanged={this.handleChanged} />
              )}
            />
      </BrowserRouter>
    );
  }
}

export default App;
