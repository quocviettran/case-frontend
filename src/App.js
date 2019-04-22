
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import LandingPage from "./container/LandingPage/LandingPage";
import PropertyDetailContainer from "./container/PropertyDetail/PropertyDetailContainer";
import PropertyList from '../src/container/PropertyList/PropertyList';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      role: 0
    }
  }


  handleItemClick = (e, { name }) => this.setState({ role: 0 })


  render() {
    const { activeItem } = this.state;

    let nav = (

      <Menu fixed="top" color="teal" inverted id="menu">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to="/register"
          name="Register"
          active={activeItem === "Register"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );

    if (parseInt(this.state.role) === 1) {
      nav = (
        <Menu fixed="top" color="teal" inverted id="menu">
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />

        <Menu.Item 
          position="right"
          as={Link}
          to="/signIn"
          name="Sign In"
          active={activeItem === "Sign In"}
          onClick={this.handleItemClick}
        />

          <Menu.Item
            as={Link}
            to="/signIn"
            name="Log Out"
            active={activeItem === "Log out"}
            onClick={this.handleLogOut}
          />
        </Menu>
      );}
      
      else if (parseInt(this.state.role) === 2) {
      nav = (
        <Menu fixed="top" color="teal" inverted id="menu">
          <Menu.Item
            name="Home"
            as={Link}
            to="/"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/signIn"
            name="Log Out"
            active={activeItem === "Log out"}
            onClick={this.handleLogOut}
          />
        </Menu>
      );
    }

    return (
      <BrowserRouter>
          <ul id="menuHeader">{nav}</ul>
          <div className="content">
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage {...props}
                  role={this.state.role} />
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
              render={props => (
                <PropertyDetailContainer {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route 
              exact
              path="/propertylist"
              render={props => (
                <PropertyList {...props} />
              )}
            />


            {/* <Route exact path="/signIn" render={(props) => <Login {...props} handleChanged={this.handleChanged} />} />
      <Route exact path="/register" render={(props) => <Register {...props}  />} /> }
      { <Route exact path="/restaurants" render={(props) => <Restaurants {...props} handleChanged={this.handleChanged} />} />
      <Route exact path="/userDashboard" render={(props) => <UserDashBoard {...props} getData={this.getData} />} />
      <Route exact path="/ownerDashboard" render={(props) => <OwnerDashboard {...props}  getData={this.getData}/>} />
      <Route exact path="/createRestaurants" render={(props) => <CreateRestaurants {...props}  getData={this.getData}/>} /> */}
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
