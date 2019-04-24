
import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import "./Navbar.css";
import {Link} from 'react-router-dom';


class Navbar extends Component{
    state = {
      
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
      const { activeItem } = this.state

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
          <Menu fixed="top" color="teal" inverted id="menu">
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
          <Menu fixed="top" color="teal" inverted id="menu">
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
          <ul id="menuHeader">{nav}</ul>
      );
}
}

export default Navbar;