import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import Home from "./container/Home/Home";
import LandingPage from "./container/LandingPage/LandingPage";
import PropertyDetail from "./container/PropertyDetail/PropertyDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
      id: 0,
      role: 0,
      token: "",
      data: []
    };
  }

  componentDidMount() {}

  handleChanged = (id, role, token, data) => {
    this.setState(() => ({ id, role, token, data }));
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOut = () => {
    this.setState({ role: 0, activeItem: "Sign In" });
  };

  getData = () => {
    return this.state.id;
  };

  render() {
    const { activeItem } = this.state;

    let nav = (
      <Menu fixed="top" color="teal" inverted id="menu">
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        />

        <Menu.Item position="right"
          as={Link}
          to="/signIn"
          name="Sign In"
          active={activeItem === "Sign In"}
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
        <Menu>
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Userdashboard"
            as={Link}
            to="/userDashboard"
            active={activeItem === "Userdashboard"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/restaurants"
            name="Restaurants"
            active={activeItem === "Restaurants"}
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
    } else if (parseInt(this.state.role) === 2) {
      nav = (
        <Menu>
          <Menu.Item
            name="Home"
            as={Link}
            to="/"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="OwnerDashboard"
            as={Link}
            to="/OwnerDashboard"
            active={activeItem === "OwnerDashboard"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/restaurants"
            name="Restaurants"
            active={activeItem === "Restaurants"}
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
                <LandingPage {...props} handleChanged={this.handleChanged} />
              )}
            />

            <Route
              exact
              path="/propertydetail"
              render={props => (
                <PropertyDetail {...props} handleChanged={this.handleChanged} />
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
