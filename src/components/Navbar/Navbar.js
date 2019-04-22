
import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import "./Navbar.css";


class Navbar extends Component{
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;

     
  
        <Menu fixed="top" color="teal" inverted id="menu">
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
          
          />
  
          <Menu.Item
            as={Link}
            to="/register"
            name="Register"
            active={activeItem === "Register"}
    
          />
        </Menu>
      
  
      if (parseInt(this.state.role) === 1) {
        nav = (
          <Menu fixed="top" color="teal" inverted id="menu">
            <Menu.Item
              as={Link}
              to="/"
              name="Home"
  
            />
  
          <Menu.Item 
            position="right"
            as={Link}
            to="/signIn"
            name="Sign In"
  
          />
  
            <Menu.Item
              as={Link}
              to="/signIn"
              name="Log Out"
  
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
  
            />
  
            <Menu.Item
              as={Link}
              to="/signIn"
              name="Log Out"
              active={activeItem === "Log out"}
  
            />
          </Menu>
        );
      }  
      return (
        <Menu fixed="top" inverted id="menu">
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Editorials
          </Menu.Item>
  
          <Menu.Item name='Sign up' active={activeItem === 'Sign up'} onClick={this.handleItemClick}>
            Reviews
          </Menu.Item>
  
          <Menu.Item
            name='Sign in'
            active={activeItem === 'Sign in'}
            onClick={this.handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
        </Menu>
      )
}
}

export default Navbar;